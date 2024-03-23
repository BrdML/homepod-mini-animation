"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { motion } from 'framer-motion';

export default function NavBar() {

  const navVariants = {
    hidden: {
      y: -50,
      opacity: 0,
    },
    visible: {
      y: 0, 
      opacity: 1,
    },
  };

  return (
    <motion.header 
      className='flex flex-col'
      variants={navVariants}
      initial="hidden"
      animate="visible"
      transition={{duration: 1, ease: "easeOut", type: 'spring', bounce: 0.35}}
    >
        <nav className='px-60'>
            <ul className='flex justify-between items-center'>
                <li>
                  <Link href="#">
                    <Image src="/assets/images/Apple.svg" alt='logo apple' width={15} height={15}/>
                  </Link>  
                </li>
                <li>
                  <Link href="#">
                    Store
                  </Link>                    
                </li>
                <li>
                  <Link href="#">
                    Mac
                  </Link>  
                </li>
                <li>
                  <Link href="#">
                    Ipad
                  </Link> 
                </li>
                <li>
                  <Link href="#">
                    Watch
                  </Link> 
                </li>
                <li>
                  <Link href="#">
                    Vision
                  </Link> 
                </li>
                <li>
                  <Link href="#">
                    AirPods
                  </Link> 
                </li>
                <li>
                  <Link href="#">
                    TV & Maison
                  </Link> 
                </li>
                <li>
                  <Link href="#">
                    Divertissement
                  </Link> 
                </li>
                <li>
                  <Link href="#">
                    Accessoires
                  </Link> 
                </li>
                <li>
                  <Link href="#">
                    Assistance
                  </Link> 
                </li>
                <li>
                  <Link href="#">
                    <Image src="/assets/images/Search.svg" alt='logo apple' width={15} height={15}/>
                  </Link>  
                </li>
                <li>
                  <Link href="#">
                    <Image src="/assets/images/Shopping-Bag.svg" alt='logo apple' width={15} height={15}/>
                  </Link>  
                </li>
            </ul>
        </nav>
        <div className='px-60 flex justify-between mt-4 items-center'>
          <h1 className='font-bold'>HomePod mini</h1>
          <button className='bg-[#0071e3] rounded-full text-white px-2'>Buy</button>
        </div>
    </motion.header>
  )
}
