"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
import { Router } from "next/router";

const myProfile = () => {
  const router = useRouter();
  const { data: session } = useSession();

  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch(`/api/users/${session?.user.id}/posts`);
      const data = await res.json();
      setPosts(data);
    };
    if (session?.user.id) {
      fetchPosts();
    }
  }, [session?.user.id]);
  const handleEdit = (post) => { 
     router.push(`/update-prompt?id${post.id}`)

  };
  const handleDelete = (post) => {
      
   };
  return (
    <div>
      < Profile
        name="My"
        desc="Welcome"
        data={posts}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default myProfile
