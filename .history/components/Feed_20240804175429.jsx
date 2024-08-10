"use client";

import { useState, useEffect } from 'react';
import PromptCard from './PromptCard';
const PromptCardList = ({ data, handleTagClick }) => {
  return (
    <div className='mt-16 prompt_layout'>
 
    </div>
  )
}


const Feed = () => {
  const [searchText, setSearchText] = useState('');
  const [posts, setPosts] = useState([]);

  const handleSearchChange = (e) => {

  };
  useEffect(() => {
    // fetch data here based on searchText
    const fetchPosts = async () => {
      const res = await fetch('/api/prompt');
      const data = await res.json();
      setPosts(data);
    }
    fetchPosts();
  }, []);

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
        data={posts}
        handleTagClick={() => { }}
      />
    </section>
  )
}

export default Feed
