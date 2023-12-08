"use client"

import { cn } from "@/lib/utils"
import { useAuth } from "@clerk/nextjs"
import {Montserrat} from "next/font/google"
import Image from "next/image"
import Link from "next/link"
import { Button } from "./ui/button"
import { useEffect, useState } from "react"

const font  = Montserrat({weight: "600", subsets: ["latin"]})
const LandingNavbar = () => {
    const {isSignedIn} = useAuth()
    const [mounted, setMounted] = useState(false)
    useEffect(()=> (
      setMounted(true)
    ))
    if(!mounted){
      return null
    }
    return(
        <nav className="p-4 bg-transparent flex items-center justify-between">
            <Link href="/" className="flex items-center " >
                <div className="relative h-8 w-8 mr-4">
                    <Image fill alt="logo" src="/LOGO.png"/>

                </div>
                <h1 className={cn("text-2xl font-bold text-white", font.className)}>Saas</h1>
                <div>
                    <Link href={isSignedIn ? "/dashboard" : "/sign-up"}>
                        <Button variant="outline" className="rounded-full">Get started</Button>
                    </Link>
                </div>
            </Link>

        </nav>
    )
}
export default LandingNavbar