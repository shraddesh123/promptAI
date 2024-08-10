"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";

const myProfile = () => {
  const [posts, setPosts] = useState();
  const { data: session } = useSession();
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/users/${session?.user.id}/posts');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  const handleEdit = () => { };
  const handleDelete = () => { };
  return (
    <div>
      < Profile
        name="My"
        desc="Welcome"
        data={[]}
        handleEdit={handleEdit}
        handleDelete={handleDelete}
      />
    </div>
  )
}

export default myProfile
