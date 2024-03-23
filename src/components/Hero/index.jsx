"use client"

import React from 'react'
import Image from "next/image";
import { motion } from 'framer-motion';
import whiteHomepod from "/public/assets/images/white-homePod.svg";

export default function Hero() {
    const imageVariants = {
        hidden: {
            y: '-50vh',
            opacity: 0,
          },
          visible: {
            y: '0', 
            opacity: 1, 
          },   
    }
    const textVariants = {
        hidden: {
            y: '20vh',
            opacity: 0,
        },
        visible: {
            y: '0',
            opacity: 1,
        },
    }
    const btnVariants = {
        hidden: {
            y: '20vh',
            opacity: 0,
        },
        visible: {
            y: '0',
            opacity: 1,
        },
    }

  return (
    <section className="home">
        <div className='animeOne'>
            <div className="flex flex-col items-center">
                <motion.h1 
                    className="gradiantText text-7xl font-extrabold"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2, ease: "ease", type: 'spring', bounce: 0.35}} 
                >
                    Nothing short
                </motion.h1>
                <motion.h2 
                    className="gradiantText text-7xl font-extrabold"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2, ease: "ease", type: 'spring', bounce: 0.35}} 
                >
                    of amazing
                </motion.h2>
                <motion.h3 
                    className="text-4xl font-bold my-3.5"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2, ease: "ease", type: 'spring', bounce: 0.35}} 
                >
                    HomePod mini
                </motion.h3>
            </div>
            <motion.div 
                className="homePod-white flex justify-center w-full" 
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{duration: 2, ease: "ease", type: 'spring', bounce: 0.35}} 
            >
                <Image
                    className="w-[70%] brightness-105" 
                    src={whiteHomepod} 
                    alt="homePod"
                    width={1399} 
                    height={438}
                />
            </motion.div>
            <div className="imgblur blur opacity-[.97] absolute -bottom-3 left-36 w-[75%] h-[83px]">
                </div>
            <div className="flex justify-center items-center">
                <motion.button 
                    className="discoverBtn absolute bottom-[120px] bg-black text-white px-4 h-10 rounded-full cursor-pointer"
                    variants={btnVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2, ease: "easeInOut", type: 'spring', bounce: 0.35}} 
                >
                    Découvrir↓
                </motion.button>
            </div>
        </div>
        {/* <div className='w-full h-full animeTwo items-center flex flex-col'>
            <div>
                <h2>Siri does everything</h2>
                <p>like there's</p>
                <p>nothing to it.</p>
            </div>
            <div>
            <Image className="absolute bottom-0 w-[75%] h-[230px] brightness-105" src="/assets/images/white-homePod.svg" alt="homePod WHITE" width={549} height={588}/>
            </div>
        </div> */}
    </section>
  )
}
