import React from 'react'
import "./AboutMe.scss"
import { motion } from 'framer-motion'

export default function AboutMe() {

    const textVariants = {
        initial: {
            x: -500,
            opacity: 0
        }, 
        animate: {
            x: 0,
            opacity: 1,
            transition: {
                duration: 1,
                staggerChildren: 0.1
            }
        },
        scrollButton: {
            opacity: 0,
            y: 5,
            transition: {
                duration: 2,
                repeat: Infinity
            }
        }
    }

    const sliderVariants = {
        initial: {
            x: 0,
        }, 
        animate: {
            x: "-220%",
            transition: {
                repeat: Infinity,
                repeatType: "mirror",
                duration: 20
            }
        },
    }

    return (
        <div className='about-me overflow-hidden relative'>
            <div className="about-me-wrapper max-w-[1366px] h-[100%] m-auto">
                <motion.div variants={textVariants} initial="initial" animate="animate" className="about-me-text-container w-[50%] h-[100%] flex flex-col justify-center gap-[40px]">
                    <motion.h2 variants={textVariants} className='text-[35px] text-purple-500'>Yuchen Liu</motion.h2>
                    <motion.h1 variants={textVariants} className='text-[50px]'>Junior Software Engineer and Web developer</motion.h1>
                    <motion.div variants={textVariants} className="about-me-btns">
                        <motion.button variants={textVariants}>View my projects</motion.button>
                        <motion.button variants={textVariants}>Contact Me</motion.button>
                    </motion.div>
                    <motion.img variants={textVariants} animate="scrollButton" className='w-[50px]' src="/images/scroll.png" alt="" />
                </motion.div>
            </div>
            <motion.div variants={sliderVariants} initial="initial" animate="animate" className="about-me-sliding-text absolute text-[50vh] text-[#ffffff09] whitespace-nowrap bottom-[-120px] w-[50%] font-bold">
                    Writer Contect Creater Influencer
            </motion.div>
            <div className="about-me-image-container h-[100%] absolute top-0 right-0">
                <img src="/images/hero.png" alt="" />
            </div>
        </div>
    )
}
