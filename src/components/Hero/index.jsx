"use client"

import React, { useState } from 'react'
import Image from "next/image";
import { motion, animate } from 'framer-motion';
import whiteHomepod from "/public/assets/images/white-homePod.svg";

export default function Hero() {
    const [isClickable, setIsClickable] = useState(false);

    const textH1 = document.getElementsByClassName("texth1")
    const textH2 = document.getElementsByClassName("texth2")
    const textH3 = document.getElementsByClassName("texth3")
    const imgWhitePod = document.getElementsByClassName("homePod-white")
    const btnDiscover = document.getElementsByClassName("discoverBtn")
    const hContainer = document.getElementsByClassName("titleContainer")
    const imgBlr = document.getElementsByClassName("imgblur")
    const imgCircle = document.getElementsByClassName("circleAnimate")

    const handleClick = () => {
        console.log('animer')
        setIsClickable(true)
        animate(textH1, { 
            y: [0, 300],
            opacity: 0, 
        }, { 
            duration: 1 
        });
        animate(textH2, { 
            y: [0, 300],
            opacity: 0, 
        }, { 
            duration: 1 
        });
        animate(textH3, { 
            y: [0, 300],
            opacity: 0, 
        }, { 
            duration: 1 
        });
        animate(btnDiscover, { 
            y: [0, 300],
            opacity: 0, 
        }, { 
            duration: 1 
        });
        animate(imgWhitePod, { 
            y: [0, -350],
            z: [0, 100 ],
            scale : 0.3, 
        }, { 
            duration: 2,
            type: "spring",
            bounce: 0.35, 
        });
        animate(hContainer, { 
            opacity: [0, 1], 
        }, { 
            duration: 1 
        });
        animate(imgBlr, { 
            opacity: [1, 0], 
        }, { 
            duration: 1 
        });
        animate(imgCircle, { 
            opacity: [0, 1], 
            scale: [0, 2],
        }, { 
            duration: 1, 
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeOut"
        });
    }

    const handleImgClick = () => {
        if(isClickable) {
            console.log("cliké")
            const sequence = [
                
            ]

            animate(sequence)
        }
    }
    
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
                    className="gradiantText text-7xl font-extrabold texth1"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2, ease: "ease", type: 'spring', bounce: 0.35}} 
                >
                    Nothing short
                </motion.h1>
                <motion.h2 
                    className="gradiantText text-7xl font-extrabold texth2"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2, ease: "ease", type: 'spring', bounce: 0.35}} 
                >
                    of amazing
                </motion.h2>
                <motion.h3 
                    className="text-4xl font-bold my-3.5 texth3"
                    variants={textVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2, ease: "ease", type: 'spring', bounce: 0.35}} 
                >
                    HomePod mini
                </motion.h3>
                <motion.div 
                    className="titleContainer flex absolute top-50 flex-col items-center z-[2]"
                    initial= {{opacity: 0}}
                >
                <h2 className='gradiantText text-5xl font-extrabold'>Siri does everything</h2>
                <p className='gradiantText text-5xl font-extrabold'>like there's</p>
                <p className='gradiantText text-5xl font-extrabold'>nothing to it.</p>
                </motion.div>
            </div>
            <motion.div 
                className="homePod-white flex justify-center w-full" 
                variants={imageVariants}
                initial="hidden"
                animate="visible"
                transition={{duration: 2, ease: "ease", type: 'spring', bounce: 0.35}} 
            >
                <Image
                    className="w-[70%] brightness-105 relative z-[1]" 
                    src={whiteHomepod} 
                    alt="homePod"
                    width={1399} 
                    height={438}
                    onClick={handleImgClick}
                    style={{ cursor: isClickable ? 'pointer' : 'default' }}
                    disabled={!isClickable}
                />
                <motion.img
                    className="h-full opacity-[0] curser-pointer circleAnimate Z-[0] w-[100%] absolute top-50" 
                    src='/assets/images/circle.svg' 
                    alt="Cicle animate"
                    width={255} 
                    height={255}
                    initial= {{opacity: 0}}
                >
                </motion.img>
            </motion.div>
            <motion.div className="imgblur blur opacity-[.97] absolute -bottom-3 left-36 w-[75%] h-[83px]">
            </motion.div>
            <div className="flex justify-center items-center">
                <motion.button 
                    className="discoverBtn absolute bottom-[120px] bg-black text-white px-4 h-10 rounded-full cursor-pointer"
                    variants={btnVariants}
                    initial="hidden"
                    animate="visible"
                    transition={{duration: 2, ease: "easeInOut", type: 'spring', bounce: 0.35}}
                    onClick={handleClick} 
                >
                    Découvrir↓
                </motion.button>
            </div>
        </div>
    </section>
  )
}
