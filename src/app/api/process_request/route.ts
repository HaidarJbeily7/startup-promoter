// File: pages/api/process_request.js
import { NextApiRequest, NextApiResponse } from 'next'
import { OpenAIApi, Configuration } from "openai";
import {NextRequest, NextResponse} from "next/server";

const configuration = new Configuration({
    apiKey: process.env.NEXT_PUBLIC_OPENAI_API_KEY,
});

const openai = new OpenAIApi(configuration);

export async function POST(req: NextRequest) {
    const { content, action } = await req.json()

    let prompt;
    switch(action) {
        case 'title_gen':
            prompt = "Придумай 5 более приятных русских или английских современных названий для продукта по описанию: " + content;
            break;
        case 'description_gen':
            prompt = "Придумай краткое, более приятное и свежее описании продукта не для рекламы, а больше о сути продукта по существующему описанию продукта не в рекламных целях: " + content;
            break;
        case 'slogan_gen':
            prompt = "Придумай 3 запоминающихся и кратких слогана для продукта по названию и описанию продукта: " + content;
            break;
        default:
            prompt = content;
    }


    const completion = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: `${prompt}`,
        max_tokens:2000,
    });
    console.log(completion.data)
    const gptResponseMessage = completion.data.choices[0].text
    return new NextResponse(JSON.stringify({message: gptResponseMessage}));
}
