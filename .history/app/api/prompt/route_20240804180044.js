import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        await connectToDB();
    } catch (error) {
        const prompts = await Prompt.find({}).populate('creator')
    }
}