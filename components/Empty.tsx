import Image from "next/image"
interface Props{
    label: string
}
export const Empty = ({label}: Props)=> {
    return (
        <div className="flex h-full p-20 flex-col items-center justify-center">
            <div className="relative h-72 w-72">
                <Image alt="Empty" fill src="" />
                
            </div>  
            <p className="text-muted-foreground text-sm text-center">{label}</p>  
        </div>

    )
}