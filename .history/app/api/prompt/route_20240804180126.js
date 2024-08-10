import { connectToDB } from "@utils/database";
import Prompt from "@models/prompt";

export const GET = async (request) => {
    try {
        await connectToDB();
        const prompts = await Prompt.find({}).populate('creator');
        return new Res
    } catch (error) {

    }
}