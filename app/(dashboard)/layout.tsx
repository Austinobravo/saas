import Navbar from '@/components/Navbar'
import Sidebar from '@/components/Sidebar'
import { getApiLimitCount } from '@/lib/api-limit'
import { checkSubscription } from '@/lib/subscription'
import React from 'react'

const DashboardLayout = async ({children}: {children: React.ReactNode}) => {

  const apiLimitCount = await getApiLimitCount()
  const isPro = await checkSubscription()
  return (
    <div className='relative h-full '>
        <div >
            <div className='hidden h-full md:w-72 md:inset-y-0  md:flex md:flex-col md:fixed bg-gray-900'>
                <Sidebar isPro={isPro} apilimitcount={apiLimitCount}/>

            </div>
            <main className='md:pl-72'>
                <Navbar/>
                {children}

            </main>

        </div>
    </div>
  )
}

export default DashboardLayout