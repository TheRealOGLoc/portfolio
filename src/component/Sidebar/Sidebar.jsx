import React from 'react'
import "./Sidebar.scss"
import { useState } from 'react'
import { motion } from 'framer-motion'
import SidebarLinks from './SidebarLinks/SidebarLinks'

export default function Sidebar() {
    const [open, setOpen] = useState(false)

    const variants = {
        open: {
            clipPath: "circle(1200px at 50px 50px )",
            transition: {
                type: "spring",
                stiffness: 30
            }
        },
        closed: {
            clipPath: "circle(30px at 50px 50px)",
            transition: {
                delay: 0.25,
                type: "spring",
                stiffness: 400,
                damping: 40
            }
        }
    }

    return (
        <motion.div animate={open ? "open" : "closed"} className='flex flex-col items-center justify-center bg-white text-black'>
            <motion.div variants={variants} className='fixed top-0 left-0 bottom-0 w-[400px] bg-white'>
                <SidebarLinks/>
            </motion.div>
            
            <button onClick={() => setOpen(prev => !prev)} className='w-[50px] h-[50px] rounded-full fixed bg-sky-500/0 left-[40px] top-[25px]'>
                <svg width="23" height="23" viewBox='0 0 23 23'>
                    <motion.path
                        strokeWidth="3"
                        stroke="black"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: "M 2 2.5 L 20 2.5" },
                            open: { d: "M 3 16.5 L 17 2.5" }
                        }}
                    />
                    <motion.path
                        strokeWidth="3"
                        stroke="black"
                        strokeLinecap="round"
                        d="M 2 9.423 L 20 9.423"
                        variants={{
                            closed: { opacity: 1 },
                            open: { opacity: 0 }
                        }}
                    />
                    <motion.path
                        strokeWidth="3"
                        stroke="black"
                        strokeLinecap="round"
                        variants={{
                            closed: { d: "M 2 16.346 L 20 16.346" },
                            open: { d: "M 3 2.5 L 17 16.346" }
                        }}
                    />
                </svg>
            </button>
        </motion.div>
    )
}
