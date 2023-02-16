import React, { useState } from 'react'
import {logo, menu,close} from '../assets/index'
import { navLinks } from '../constants'
const Navbar = () => {
  const [openMenu, setOpenMenu] = useState(false)
  return (
    <nav className='flex justify-between items-center py-6 w-full navbar '>
      <img src={logo} alt='website_logo' className='w-32 h-8'/>
      <ul className='hidden sm:flex list-none text-white font-poppins text-[16px] font-normal'>
        {
        navLinks.map((link,index)=>(<li key={link?.id} className={`cursor-pointer ${index === navLinks.length - 1 ? 'mr-0' : 'mr-10'}`}>
            <a href={`#${link?.id}`}>{link?.title}</a>
        </li>))
        }
      </ul>
      <div className='flex sm:hidden flex-1 justify-end items-center'>
        <img src={openMenu ? close : menu} alt="menu" onClick={()=> setOpenMenu((prev)=>!prev) } className='cursor-pointer'/>
        <ul className={`${openMenu ? 'flex' : 'hidden'} flex-col list-none text-white font-poppins text-base font-normal p-6 bg-black-gradient absolute top-16 right-0 mx-4 my-2 min-w-[140px] rounded-xl sidebar`}>
        {
        navLinks.map((link,index)=>(<li key={link?.id} className={`cursor-pointer ${index === navLinks.length - 1 ? 'mb-0' : 'mb-6'}`}>
            <a href={`#${link?.title}`}>{link?.title}</a>
        </li>))
        }
      </ul>
      </div>
    </nav>
  )
}

export default Navbar