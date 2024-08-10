"use client";
import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";
const [Submitting, setSubmitting] = useState(false);
const [POst, setPOst] = useState({
    prompt: '',
    tag: '',
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
