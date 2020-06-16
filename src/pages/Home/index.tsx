import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move'
import firebase from '../../services/firebaseConfig';

import { MdSearch } from "react-icons/md";
import { SearchBox, ItemContainer, ItemInfo, ItemImg, ActionLabel, Label, List } from './styles'

interface IItem {
  id: string;
  title: string;
  linkUrl: string;
  imgUrl: string;
  description: string;
  tags?: string;
}

const Home: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const [filteredItems, setFilteredItems] = useState<IItem[]>([])
  const [noMatchesFound, setnoMatchesFound] = useState(false)
  const [formatedData, setformatedData] = useState<IItem[]>([])

  useEffect(() => {
    firebase.database().ref('data').once('value').then(snap => {
      formatData(Object.entries(snap.val()));
    })
  }, []);

  const formatData = async (entries: any[]) => {
    const allData = entries.map(e => ({ ...e[1], id: e[0] }));
    console.log(allData);
    setformatedData(allData);
  }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputText(value);
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') searchItems();
  }

  const searchItems = () => {
    const result = formatedData.filter((e: IItem) =>
      e.title.toLowerCase().includes(inputText.toLowerCase()) ||
      e.tags?.toLowerCase().includes(inputText.toLowerCase())
    )
    if (!result.length) setnoMatchesFound(true);
    setFilteredItems(result)
  }

  const handleClick = (item: IItem) => () => {
    window.open(item.linkUrl);
  }

  const handleShowMore = () => {
    setFilteredItems(formatedData);
    setInputText('');
    setnoMatchesFound(false);
  }

  return (
    <section>
      <SearchBox>
        <input
          placeholder='O que você quer aprender?'
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
        <MdSearch color='#ccc' />
      </SearchBox>

      <List>
        {
          filteredItems?.map(item => (
            <ItemContainer onClick={handleClick(item)} key={item.id} >
              <ItemImg src={item.imgUrl} />
              <ItemInfo>
                <h2>{item.title}</h2>
                <p>{item.description}</p>
              </ItemInfo>
            </ItemContainer>
          ))
        }
      </List>
      {
        noMatchesFound && <>
          <Label>Não encontramos resultados :(</Label>
          <ActionLabel onClick={handleShowMore}>Ver lista completa</ActionLabel>
        </>
      }

    </section>
  );
}

export default Home;