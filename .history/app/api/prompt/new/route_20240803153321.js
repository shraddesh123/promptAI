import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt"; // Ensure the model import is capitalized

export const POST = async (req) => {
    const { prompt, userId, tag } = await req.json();

    try {
        await connectToDB();
        const newPrompt = new Prompt({
            creator: userId,
            prompt, // Include the prompt field
            tag
        });
        await newPrompt.save();

        return new Response(JSON.stringify(newPrompt), {
            status: 201
        });
    } catch (error) {
        return new Response(JSON.stringify({ error: 'Failed to create new prompt' }), {
            status: 500
        });
    }
};
