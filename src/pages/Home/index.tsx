import React, { useState, useEffect } from 'react';
import { MdSearch } from "react-icons/md";
import firebase from '../../firebaseConfig'
import mockData from '../../mockData'

interface IItem {
  displayName: string;
  linkUrl: string;
  imgUrl: string;
  description: string;
  tags?: string;
}

const Home: React.FC = () => {
  const [inputText, setInputText] = useState('')
  const [items, setItems] = useState<IItem[]>([])

  useEffect(() => {
    // fetchData();
  }, [])

  // const fetchData = () => {
  //   try {
  //     firebase.database().ref('data').once('value').then((snap: firebase.database.DataSnapshot) => {
  //       const val = snap.val()
  //       if (val) {
  //         const result = Object.keys(val).map(key => ({ id: key, ...val[key] }));
  //         setItems(result);
  //         console.log(result)
  //       }
  //     })
  //   } catch (err) {
  //     console.log('Error at fetchData: ', err);
  //   }
  // }

  const handleChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    setInputText(value);
  }

  const handleKeyDown = (e: any) => {
    if (e.key === 'Enter') searchItems();
  }

  const searchItems = () => {
    const result = mockData.filter((e: IItem) =>
      e.displayName.toLowerCase().includes(inputText.toLowerCase()) ||
      e.description.toLowerCase().includes(inputText.toLowerCase())
    )
    setItems(result)
  }

  return (
    <div className="App">
      <header className="App-header">
        <div className='Search-box'>
          <MdSearch color='#ccc' />
          <input
            placeholder='O que você quer aprender?'
            value={inputText}
            onChange={handleChange}
            onKeyDown={handleKeyDown}
            autoFocus
          />
          <div>

          </div>
        </div>
      </header>
    </div>
  );
}

export default Home;