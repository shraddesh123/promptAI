"use client";
import { useState, useEffect } from "react"

import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";


const EditPrompt = () => {
    const router = useRouter();
   
    const searchParams = useSearchParams();
    const promptId = searchParams.get('id');
    const [Submitting, setSubmitting] = useState(false);
    const [Post, setPost] = useState({
        prompt: '',
        tag: '',
    });

    useEffect(() => {
        const getPromptDetails = async () => {
            const res = await fetch(`/api/prompt/${promptId}`)
            const data = await res.json();
            setPost({
                prompt: data.prompt,
                tag: data.tag,
            })
        }
        if (promptId) getPromptDetails();
    }, [promptId]);

    const updatePrompt = async (e) => {
        e.preventDefault(); 
        setSubmitting(true);
        if(!promptId) return alert("prompt id not found!");
        try {
            const res = await fetch('/api/prompt/new',
                {
                    method: 'PATVH',
                    body: JSON.stringify({
                        prompt: Post.prompt,
                        userId: session?.user.id,
                        tag: Post.tag
                    })
                })
            if (res.ok) {
                router.push('/');
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <div>
            <Form
                type="Edit"
                post={Post}
                setPost={setPost}
                Submitting={Submitting}
                handleSubmit={updatePrompt}
            />
        </div>
    )
}

export default EditPrompt
