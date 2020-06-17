import React, { useState, useEffect } from 'react';
import firebase from '../../services/firebaseConfig';

import { MdSearch } from "react-icons/md";
import { SearchBox, ItemContainer, ItemInfo, ItemImg, List, TagList, Tag } from './styles'

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
  const [formatedData, setformatedData] = useState<IItem[]>([])
  const [filteredItems, setFilteredItems] = useState<IItem[]>([])
  const [noMatchesFound, setnoMatchesFound] = useState(false)

  const [suggestedTags, setSuggestedTags] = useState([])

  useEffect(() => {
    firebase.database().ref('data').once('value').then(snap => {
      formatData(Object.entries(snap.val()));
    })
    firebase.database().ref('tags').once('value').then(snap => {
      const tags = snap.val().split(';').sort();
      console.log(tags)
      setSuggestedTags(tags);
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
    if (e.key === 'Enter') searchItems()();
  }

  const searchItems = (textTag?: string) => () => {
    if (!inputText && !textTag) return;
    setnoMatchesFound(false);
    // ------- Single Word --------
    const normalized = (textTag || inputText).toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '');
    console.log(normalized)
    if (!normalized.includes(' ')) {
      const result = formatedData.filter((e: IItem) =>
        e.title.toLowerCase().includes(normalized) ||
        e.tags?.toLowerCase().includes(normalized)
      )
      if (!result.length) {
        setnoMatchesFound(true);
        firebase.database().ref('failedSearches').push({
          inputText,
          timestamp: Date.now(),
          version: 1
        });
      }
      setFilteredItems(result);
      return;
    }

    // ------- Multiple Word --------
    const arrayOfWords = normalized.split(' ');
    console.log(arrayOfWords);

    arrayOfWords.forEach((word, index) => {
      const result = formatedData.filter((e: IItem) =>
        e.title.toLowerCase().includes(word) ||
        e.tags?.toLowerCase().includes(word)
      )

      if (result.length) {
        setFilteredItems(result);
        return;
      }

      if (index === arrayOfWords.length - 1 && !result.length) {
        setFilteredItems([]);
        setnoMatchesFound(true);
        firebase.database().ref('failedSearches').push(inputText);
      }
    })

  }

  const handleItemClick = (item: IItem) => () => {
    window.open(item.linkUrl);
  }

  const handleTagClick = (text: string) => () => {
    setInputText(text);
    searchItems(text)();
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
        <MdSearch onClick={searchItems()} color='#e8e8e8' />
      </SearchBox>

      <List>
        {
          filteredItems?.map(item => (
            <ItemContainer onClick={handleItemClick(item)} key={item.id} >
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
          <h4>Não encontramos resultados :(</h4>
          <h3>Aqui estão algumas sugestões</h3>
          <TagList>
            {
              suggestedTags?.map(tag => <Tag onClick={handleTagClick(tag)}>{tag}</Tag>)
            }
          </TagList>
        </>
      }

    </section>
  );
}

export default Home;