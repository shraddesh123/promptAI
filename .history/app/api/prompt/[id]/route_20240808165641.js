// it will update the handle edit function by GET PATCH * EDIT POST
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


//GET
export const GET = async (request) => {
    try {
        await connectToDB()

        const prompts = await Prompt.find({}).populate('creator')

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 