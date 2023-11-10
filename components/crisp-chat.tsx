"use client"
import { useEffect } from 'react';
import {Crisp} from "crisp-sdk-web"

export const CrispChat = () => {
    useEffect(() => {
        Crisp.configure("5d427b37-7a3a-4fbe-9264-15b3a58d2d0f")
    })

    return null 
}