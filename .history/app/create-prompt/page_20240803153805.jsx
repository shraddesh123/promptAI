"use client";
import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";


const CreatePrompt = () => {
    const router = use
    const [Submitting, setSubmitting] = useState(false);
    const [Post, setPost] = useState({
        prompt: '',
        tag: '',
    });
    const createPrompt = async (e) => {
        e.preventDefault();
        setSubmitting(true);
        try {
            const res = await fetch('/api/prompt/new',
                {
                    method: 'POST',
                    body: JSON.stringify({
                        prompt: Post.prompt,
                        userId: session?.user.id,
                        tag: Post.tag
                    })
                })
            if (res.ok) {
                Router.push('/');
            }
        } catch (error) {
            console.error(error);
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
