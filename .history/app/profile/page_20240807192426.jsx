"use client";

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import Profile from "@components/Profile";
const Profile = () => {
  return (
    <div>
     < Profile
       name="My"
       desc="Welcome"
       <data value=""></data>
     />
    </div>
  )
}

export default Profile
