"use client";

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';


const Feed = () => {
  const [state, setstate] = useState();
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
    </section>
  )
}

export default Feed
