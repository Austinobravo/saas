import { cn } from "@/lib/utils";
import { LucideIcon } from "lucide-react";

interface Props{
    title: string;
    description: string;
    icon: LucideIcon,
    iconColor: string;
    bgColor: string
}

const Heading = ({title,description,icon:Icon,iconColor,bgColor}: Props) => {

    return (
        <>
            <div className="px-4 lg:px-0 flex items-center gap-x-3 mb-0">
                <div className={cn("px-2 w-fit rounded-md", bgColor)}>
                    <Icon className={cn("w-20 h-10", iconColor)} />
                </div>
                <div>
                    <h2 className="text-3xl font-bold">{title}</h2>
                    <p className="text-sm text-muted-foreground">{description}</p>
                </div>
            </div>
        </>
    )

}
export default Heading