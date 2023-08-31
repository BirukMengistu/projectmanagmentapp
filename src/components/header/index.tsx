'use client'
import React from 'react'
import Image from 'next/image'
import { MagnifyingGlassMinusIcon } from '@heroicons/react/20/solid'
import { MagnifyingGlassCircleIcon } from '@heroicons/react/24/outline'
import Avatar from 'react-avatar'
import { UserCircleIcon } from '@heroicons/react/24/solid'

const Header = () => {

  return (
    <header>
         
        <div className='flex flex-col md:flex-row 
          items-center p-5 bg-gray-500/10'>
            <div className='absolute
                        top-0
                        left-0
                        w-full
                        h-96
                        bg-gradient-to-br
                         from-pink-400
                         to-blue-400
                         rounded
                         filter
                         blur-3xl
                         opacity-50
                         -z-50' />

            
        <Image 
        src="/project.png"
        alt='Pro-mgt'
        width={300}
        height={100}
        className='w-32 md:w-24 pb-10 object-contain 
       '/>
      <div className='flex items-center space-x-5
        flex-1 justify-end w-full'>
        {/* search form */}
        <form className='flex items-center space-x-5
                bg-white p-2 rounded shadow-md
                 flex-1 md:flex-initial'>
            <MagnifyingGlassCircleIcon className='h-6 w-6 text-gray-400'/>
            <input type='text' placeholder='search'
             className='flex-1 outline-none p-2'/>
            <button hidden> search</button>
        </form>
         {/* avatar  */}
        <Avatar name='Birdev' round size='50' color='gray'/>
      </div>
    </div>
     <div className='flex items-center justify-center px-5 md:py-5 rounded-md'>
        <p className='flex items-center p-5 text-sm font-light
         pr-5 shadow-xl w-fit bg-white italic max-w-3xl text-[#0055D1]'>
        <UserCircleIcon className='inline-block h-10 w-10 mr-1 text-[#0055D1]' />
        GPT is summarsing learning activtes       
        </p>
     </div>
 </header>
  )
}

export default Header
