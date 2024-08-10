"use client";
import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";


const CreatePrompt = () => {
    const [Submitting, setSubmitting] = useState(false);
    const [Post, setPost] = useState({
        prompt: '',
        tag: '',
    });
    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await 
        } catch (error) {
            
        }
    }
    return (
        <div>
            <Form
                type="Create"
                post={Post}
                setPost={setPost}
                Submitting={Submitting}
                handleSubmit={createPrompt}
            />
        </div>
    )
}

export default CreatePrompt
