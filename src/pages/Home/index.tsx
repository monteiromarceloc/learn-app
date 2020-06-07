import React, { useState, useEffect } from 'react';
import FlipMove from 'react-flip-move'

import { MdSearch } from "react-icons/md";
import { SearchBox, ItemContainer, ItemInfo, ItemImg } from './styles'
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
      e.description.toLowerCase().includes(inputText.toLowerCase())
    )
    setFilteredItems(result)
  }

  const handleClick = (item: IItem) => () => {
    window.open(item.linkUrl);
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
      {
        filteredItems.length > 0 &&
        <ul>
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
        </ul>
      }
    </section>
  );
}

export default Home;