import { connectToDB } from "@utils/database";
import prompt from "@models/prompt";

export const POST = async (req) => {
const { prompt, userId ,tag} = await req.json();
     
try {
    await connectToDB();
    const newPrompt = new Prompt({
        creator: userId,
    })
} catch (error) {
    
}
}