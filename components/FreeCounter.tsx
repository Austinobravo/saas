import React, { useEffect, useState } from 'react'
import { Card, CardContent } from './ui/card'
import { MAX_FREE_COUNTS } from '@/constants'
import { Button } from './ui/button'
import { Progress } from './ui/progress'
import { Zap } from 'lucide-react'
import { useProModal } from '@/hooks/use-pro-modal'
interface Props{
    apilimitcount: number;
    isPro: boolean
}
function FreeCounter({apilimitcount, isPro}: Props) {
    const proModal = useProModal()
    const [mounted, setMounted] = useState(false)

    useEffect(() =>{
        setMounted(true)
    },[])

    if(!mounted){
        return null
    }
    if (isPro){
        return null
    }
  return (
    <div className="px-3">
        <Card className="bg-white/10 border-0">
            <CardContent className="py-6">
                <div className="text-center text-sm text-white mb-4 space-y-2">
                    <p>
                        {apilimitcount} / {MAX_FREE_COUNTS} Free Generations
                    </p>
                    <Progress
                    className="h-3"
                    value={(apilimitcount / MAX_FREE_COUNTS) * 100}

                    />
                    <Button onClick={()=>proModal.onOpen()} variant="premium" className="w-full cursor-pointer">
                        Upgrade
                        <Zap className="w-4 h-4 ml-2 fill-white"/>
                    </Button>


                </div>
                
            </CardContent>
        </Card>
    </div>
  )
}

export default FreeCounter