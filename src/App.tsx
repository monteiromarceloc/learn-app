import React from 'react';
import { MdSearch } from "react-icons/md";
import './index.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className='Search-box'>
          <MdSearch />
          <input
            placeholder='O que você quer aprender?'
            autoFocus
          />
        </div>
      </header>
    </div>
  );
}

export default App;
