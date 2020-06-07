import React, { useState } from 'react';
import FlipMove from 'react-flip-move'

import { MdSearch } from "react-icons/md";
import { SearchBox, ItemContainer, ItemInfo, ItemImg, ActionLabel, Label, List } from './styles'
import mockData from '../../mockData'

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

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputText(value);
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') searchItems();
  }

  const searchItems = () => {
    const result = mockData.filter((e: IItem) =>
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
    setFilteredItems(mockData);
    setInputText('');
    setnoMatchesFound(false);
  }

  return (
    <section>
      <SearchBox>
        <MdSearch color='#ccc' />
        <input
          placeholder='O que você quer aprender?'
          value={inputText}
          onChange={handleChange}
          onKeyDown={handleKeyDown}
          autoFocus
        />
      </SearchBox>

      <List>
        {
          filteredItems.length > 0 &&
          <FlipMove duration={200} easing='ease-out'>
            {
              filteredItems.map(item => (
                <ItemContainer onClick={handleClick(item)} key={item.id} >
                  <ItemImg src={item.imgUrl} />
                  <ItemInfo>
                    <h2>{item.title}</h2>
                    <p>{item.description}</p>
                  </ItemInfo>
                </ItemContainer>
              ))
            }
          </FlipMove>
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