"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
const myProfile = () => {
  useEffect(() => {
    const fetchPosts = async () => {
      const res = await fetch('/api/users/${session?.user.id}');
      const data = await res.json();
      setPosts(data);
    };
    fetchPosts();
  }, []);
  const handleEdit = () => {};
  const handleDelete = () => {};
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
