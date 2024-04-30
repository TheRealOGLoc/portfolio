import React from 'react'
import { motion } from 'framer-motion'

const linkVariants = {
    open: {
        transition: {
            staggerChildren: 0.1
        }
    },
    closed: {
        transition: {
            staggerChildren: 0.05,
            staggerDirection: -1
        }
    }
}

const itemVariants = {
    open: {
        y: 0,
        opacity: 1
    },
    closed: {
        y: 50,
        opacity: 0
    }
}

export default function SidebarLinks() {

    const items = [
        "Homepage",
        "Services",
        "Portfolio",
        "Contact",
        "About"
    ]


    return (
        <motion.div variants={linkVariants} className='absolute w-[100%] h-[100%] flex flex-col items-center justify-center gap-[20px] '>
            {items.map((item, index) => (<motion.a className='mt-3 font-bold text-2xl' variants={itemVariants} whileHover={{scale: 1.1}} href={`#${item}`} key={index}>{item}</motion.a>))}
        </motion.div>
    )
}
