"use client";
import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";


const CreatePrompt = () => {
    const [Submitting, setSubmitting] = useState(false);
const [Post, setPOst] = useState({
    prompt: '',
    tag: '',
});
const createPrompt = async (e) => {
    
}
    return (
        <div>
            <Form
              type="create"
              post={post}
            />
        </div>
    )
}

export default CreatePrompt
