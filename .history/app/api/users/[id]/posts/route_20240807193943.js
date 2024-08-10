import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const POST = async (req,{params}) => {
    const { prompt, userId, tag } = await req.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt,
            tag
        });
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {
            status: 201
        });
    } catch (error) {
        console.error('Error creating new prompt:', error);
        return new Response(JSON.stringify({ error: 'Failed to create new prompt' }), {
            status: 500
        });
    }
};
