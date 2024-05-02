import React from 'react'
import "./Contact.css"
import { motion } from 'framer-motion'

export default function Contact() {

    const variants = {
        initial: {
            y: 500,
            opacity: 0
        },
        animate: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.5,
                staggerChildren: 0.1
            }
        }
    }

  return (
    <motion.div variants={variants} initial="initial" whileInView="animate" className='contact h-[100%] max-w-[1366px] m-auto flex items-center justify-center gap-[50px]'>
        <motion.div variants={variants} className="contact-text-container flex-1 flex flex-col gap-[40px]">
            <motion.h1 variants={variants} className='text-[60px] leading-[66px]'>Let's work together</motion.h1>
            <motion.div variants={variants} className="contact-text-items">
                <h2>Mail</h2>
                <span>lyc990312@hotmail.com</span>
            </motion.div>
            <motion.div variants={variants}  className="contact-text-items">
                <h2>Address</h2>
                <span>Brisbane, Australia</span>
            </motion.div>
            <motion.div variants={variants} className="contact-text-items">
                <h2>Phone</h2>
                <span>+61 0426670312</span>
            </motion.div>
        </motion.div>
        <div className="flex-1">
            <form className='contact-form-container flex flex-col gap-[20px]'>
                <input type="text" placeholder='Name' />
                <input type="text" placeholder='E-mail' />
                <textarea rows={8} placeholder='Message'></textarea>
                <button className='p-[20px] bg-orange-500 '>Submit</button>
            </form>
        </div>
    </motion.div>
  )
}
