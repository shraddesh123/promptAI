"use client";

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';
const PromptCardList = ({ data, handleTagClick }) => {
return (
  <div className='mt-16 prompt_lay'>

  </div>
)
}


const Feed = () => {
  const [searchText, setSearchText] = useState('');

  const handleSearchChange = () => {

  };

  return (
    <section className='feed'>
      <form className="relative w-full flex-center">
        <input
          type="text"
          placeholder='Search for tag or a Username'
          value={searchText}
          onChange={handleSearchChange}
          className='search_input peer' />
      </form>
      <PromptCardList
        data={[]}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed