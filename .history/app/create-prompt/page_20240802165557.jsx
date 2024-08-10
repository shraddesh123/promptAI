"use client";
import { useState } from "react"
import { useSession } from "next-auth/react";
import { useRouter } from "next/router";

import Form from "@components/Form";


const CreatePrompt = () => {
    const [Submitting, setSubmitting] = useState(false);
const [POst, setPOst] = useState({
    prompt: '',
    tag: '',
});
cost cre
    return (
        <div>
            <Form

            />
        </div>
    )
}

export default CreatePrompt
