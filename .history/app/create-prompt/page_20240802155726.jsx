"use client";
import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";
import { Tag } from "git";
const [Submitting, setSubmitting] = useState(false);
const [POst, setPOst] = useState({
    prompt: '',
    Tag
});

const CreatePrompt = () => {
    return (
        <div>
            <Form

            />
        </div>
    )
}

export default CreatePrompt
