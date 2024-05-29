import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
function Header() {
  return (
    <div className='h-[190px] absolute gap-9 flex flex-row items-center w-screen justify-between p-10 bg-black'>
        <div>
        <Image
        className='h-[90px] w-[420px]'
            src="/KWqx6liP-geu-logo.webp"
            alt="GEU Logo"
            height={200} // Adjusted to match the div height
            width={400} // Consistent with the height
            />
        </div>
        <div className='flex flex-row'>
            <ul className='text-white flex flex-row gap-8 text-md mr-10'>
                <li><Link href='#'> Home </Link></li>
                <li><Link href='/about'> About </Link></li>
                <li><Link href='/contact'> Contact </Link></li>
                <li><Link href='/supportus'> Support Us </Link></li>
            </ul>
        </div>
    </div>
  )
}

export default Header