// it will update the handle edit function by GET PATCH * EDIT POST
import Prompt from "@models/prompt";
import { connectToDB } from "@utils/database";


//GET
export const GET = async (request, { params }) => {
    try {
        await connectToDB()

        const prompt = await Prompt.findById(params.id).populate("creator")
        if (!prompt) return new Response("Prompt Not Found", { status: 404 });

        return new Response(JSON.stringify(prompt), { status: 200 })

    } catch (error) {
        return new Response("Internal Server Error", { status: 500 });
    }
}

//PATCH (UPDATE)
export const PATCH = async (request, { params }) => {
};

//DELETE 
export const DELETE = async (request, { params }) => {
    try {
        await connectToDB();
        const prompt = await Prompt.findByIdAndRemove(params.id);

        return new Response("prompt deleted succesfully!", { status: 200 })
    } catch (error) {
        return new Response("failed to delete prompt ", { status: 500 })
    }
}