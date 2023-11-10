
import { UserButton } from '@clerk/nextjs'
import MobileSideBar from './mobilesidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import { checkSubscription } from '@/lib/subscription'

const Navbar = async () => {
  const apilimitcount = await getApiLimitCount()
  const isPro = checkSubscription()
  return (
    <div className='flex items-center p-4'>
        <MobileSideBar isPro={isPro} apilimitcount={apilimitcount}/>
        <div className='flex w-full justify-end'>
            <UserButton afterSignOutUrl='/'/>
        </div>
    </div>
  )
}

export default Navbar