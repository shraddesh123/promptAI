// it will update the handle edit function by GET PATCH * EDIT POST
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


//GET
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate('creator');
        if (!prompt) return new Response("prompt not found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
}

//PATCH (UPDATE)
export const PATCH = async (request, { params }) => {
    const { prompt, tag } = await request.JSON();
    try {
        await connectToDB();

        const e
    } catch (error) {
        
    }
}