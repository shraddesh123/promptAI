"use client";
import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";

import Form from "@components/Form";


const EditPrompt = () => {
    const router = useRouter();
    const { data : session } = useSession();
    const [Submitting, setSubmitting] = useState(false);
    const [Post, setPost] = useState({
        prompt: '',
        tag: '',
    });

   useEffect(() => {
    
   
   }, []);

    const createPrompt = async (e) => {
        e.preventDefault();s
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
