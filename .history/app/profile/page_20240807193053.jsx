"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
const profile = () => {
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

export default myprofile
