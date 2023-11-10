import LandingNavbar from "@/components/landing-navbar";
import { UserButton } from "@clerk/nextjs";


export default function Home() {
  return (
    <main className="flex text-2xl gap-10 justify-between">
      <div className="h-full">
        <LandingNavbar/>

      </div>
      <div>
        <UserButton afterSignOutUrl="/"/>
      </div>

    </main>
  )
}
