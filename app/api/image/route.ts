import { checkApiLimit, increaseApiLimit } from "@/lib/api-limit"
import { checkSubscription } from "@/lib/subscription"
import { auth } from "@clerk/nextjs"
import { NextResponse } from "next/server"
import Configuration from "openai"
import {OpenAI } from "openai"


const configuration = new Configuration({
    apiKey: process.env.OPENAI_API_KEY,
})

const openai = new OpenAI (configuration);

export async function POST(req: Request){
    try{
        const {userId} = auth()
        const body = await req.json()
        const {prompt, amount=1, resolution="512x512"} = body

        if (!userId){
            return new NextResponse("unauthorized", {status:401})
        }
        if(!configuration.apiKey){
            return new NextResponse("OpenAi API key not configured",{status: 500})
        }
        if(!amount){
            return new NextResponse("Amount are required",{status: 400})
        }
        if(!resolution){
            return new NextResponse("Resolution are required",{status: 400})
        }
        if(!prompt){
            return new NextResponse("Prompt are required",{status: 400})
        }

        const freeTrial = await checkApiLimit()
        const isPro = await checkSubscription()

        if(!freeTrial && !isPro){
            return new NextResponse("Free Trial have expired", { status: 403})
        }

        const response = await openai.createImage({
            prompt,
            n: parseInt(amount,10),
            size: resolution

        })
        if(!isPro){
            await increaseApiLimit()
        }
        return NextResponse.json(response.data.data )
        
    }catch(error){
        console.log("Error",  error)
        return new NextResponse("Internal error", { status: 500 })

    }
}