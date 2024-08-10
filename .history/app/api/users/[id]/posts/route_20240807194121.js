import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request, { params }) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({crea}).populate('creator');
        return new Response(JSON.stringify(prompts), { status: 200 });
    } catch (error) {
        console.error('Error fetching prompts:', error);
        return new Response("Failed to fetch Prompts", { status: 500 });
    }
}
