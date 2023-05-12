import React, { useState, useEffect } from 'react'
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'
import  Link  from 'next/link'

const Navbar = () => {

    const [nav, setNav] = useState(false)



    const handleNavbar = () => {
        setNav(!nav);
    }

    return (
        <nav className='bg-indigo-400 mx'>
            <div className='flex justify-wbetween items-center h-20 max-w-[1240px] mx-auto px-4 '>
                <h1 className='w-full text-3xl font-bold xl: block'>My Portfolio</h1>
                <ul className='hidden md:flex'>
                    <li className='p-4 text-lg font-semibold hover:bg-indigo-700 hover:text-slate-100 rounded-lg transition-all'><Link href='/'>Home</Link></li>
                    <li className='p-4 text-lg font-semibold hover:bg-indigo-700 hover:text-slate-100 rounded-lg transition-all'><Link href='/'>Projects</Link></li>
                    <li className='p-4 text-lg font-semibold hover:bg-indigo-700 hover:text-slate-100 rounded-lg transition-all'><Link href='/about'>About</Link></li>
                    <li className='p-4 text-lg font-semibold hover:bg-indigo-700 hover:text-slate-100 rounded-lg transition-all'><Link href='/'>Contact</Link></li>


                </ul>

                <div onClick={handleNavbar} className='block md:hidden'>
                    {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}

                </div>
                <div className={nav ? 'fixed left-0 top-0 w-[40%] h-full border-r border-r-gray-800 bg-fuchsia-300 ease-in-out duration-700 ' : 'fixed left-[-100%] '}>
                    <h1 className='w-full text-2xl font-bold mb-0'>My Portfolio</h1>
                    <ul className='pt-12 uppercase'>
                        <li className='p-4 text-lg font-semibold border-b border-gray-800 hover:bg-fuchsia-500 transition-all'><Link href='/'>Home</Link></li>
                        <li className='p-4 text-lg font-semibold border-b border-gray-800 hover:bg-fuchsia-500 transition-all'><Link href='/'>Projects</Link></li>
                        <li className='p-4 text-lg font-semibold border-b border-gray-800 hover:bg-fuchsia-500 transition-all'><Link href='/about'>About</Link></li>
                        <li className='p-4 text-lg font-semibold border-b border-gray-800 hover:bg-fuchsia-500 transition-all'><Link href='/'>Contact</Link></li>



                    </ul>
                </div>


            </div>
        </nav>
    )
}

export default Navbar