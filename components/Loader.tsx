import Image from "next/image"

const Loader = () => {

    return(
        <div className="h-full flex flex-col gap-y-4 items-center justiffy-center">
            <div className="w-10 h-10 relative animate-spin">
                <Image alt="logo" fill src="/LOGO.png" />
            </div>
            <p className="text-sm text-muted-foreground">
                Sass is thinking....
            </p>


        </div>
    )

}
export default Loader