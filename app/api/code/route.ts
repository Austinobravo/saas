import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import Configuration from "openai"
import ChatCompletionRequestMessage from "openai"
import {OpenAI} from "openai"


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAI(configuration);

const instructionMessage: ChatCompletionRequestMessage = {
    role: "system",
    content: "You are a code generator and mut must use markdown also adding code comments for explanation"
}

export async function POST(req: Request){
    try{
        const {userId} = auth()
        const body = await req.json()
        const {messages} = body

        if (!userId){
            return new NextResponse("unauthorized", {status:401})
        }
        if(!configuration.apiKey){
            return new NextResponse("OpenAi API key not configured",{status: 500})
        }
        if(!messages){
            return new NextResponse("Messages are required",{status: 400})
        }
        const freeTrial = await checkApiLimit()
        const isPro = await checkSubscription()

        if(!freeTrial && !isPro){
            return new NextResponse("Free Trial have expired", { status: 403})
        }

        const response = await openai.createChatCompletion({
            model: "gpt-3.5-turbo",
            messages
        })
        if(!isPro){
            await increaseApiLimit()
        }
        return NextResponse.json(response.data.choices[0].message)
        
    }catch(error){
        console.log("Error",  error)
        return new NextResponse("Internal error", { status: 500 })

    }
}