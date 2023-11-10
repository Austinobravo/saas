"use client"
import { Button } from './ui/button'
import { Menu } from 'lucide-react'
import { Sheet, SheetContent, SheetTrigger } from './ui/sheet'
import Sidebar from './Sidebar'
import { useEffect, useState } from 'react'

interface Props {
    apilimitcount:number
    isPro: boolean
}
export default function MobileSideBar ({apilimitcount, isPro}:Props){

    const [isMounted, setIsMounted] = useState(false)

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if(!isMounted){
        return null
    }

    return(
        <Sheet>
            <SheetTrigger>
                <Button variant="ghost" size="icon" className='md:hidden'>
                    <Menu/>
                </Button>
            </SheetTrigger>
            <SheetContent side="left" className="p-0">
                <Sidebar isPro={isPro} apilimitcount={apilimitcount}/>
                
            </SheetContent>

        </Sheet>
    )
}