// it will update the handle edit function by GET PATCH * EDIT POST
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


//GET
export const GET = async (request,{params}) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate('creator');
        if (!prompt) return new Respo{
            
        }

        return new Response(JSON.stringify(prompts), { status: 200 })
    } catch (error) {
        return new Response("Failed to fetch all prompts", { status: 500 })
    }
} 