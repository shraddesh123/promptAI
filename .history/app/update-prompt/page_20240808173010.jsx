"use client";
import { useState, useEffect } from "react"
import { useSession } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";

import Form from "@components/Form";


const EditPrompt = () => {
    const router = useRouter();
    const { data: session } = useSession();
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

    }, [promptId]);

    const createPrompt = async (e) => {
        e.preventDefault(); s
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
                handleSubmit={createPrompt}
            />
        </div>
    )
}

export default EditPrompt
