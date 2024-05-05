import React, { useRef, useState } from 'react'
import "./Contact.css"
import { motion } from 'framer-motion'
import emailjs from "@emailjs/browser"

export default function Contact() {

    const formRef = useRef()
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

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

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm('service_4t0h6ak', 'template_flj41g9', formRef.current, {
                publicKey: 'HsvKZFr1WQEi5KoIe',
            })
            .then(
                () => {
                    console.log('SUCCESS!');
                    setSuccess(true)
                },
                (error) => {
                    setError(true)
                    console.log('FAILED...', error.text);
                },
            );
    };

    return (
        <motion.div variants={variants} initial="initial" whileInView="animate" className='contact h-[100%] max-w-[1366px] m-auto flex items-center justify-center gap-[50px]'>
            <motion.div variants={variants} className="contact-text-container flex-1 flex flex-col gap-[40px]">
                <motion.h1 variants={variants} className='text-[60px] leading-[66px]'>Let's work together</motion.h1>
                <motion.div variants={variants} className="contact-text-items">
                    <h2>Mail</h2>
                    <span>lyc990312@hotmail.com</span>
                </motion.div>
                <motion.div variants={variants} className="contact-text-items">
                    <h2>Address</h2>
                    <span>Brisbane, Australia</span>
                </motion.div>
                <motion.div variants={variants} className="contact-text-items">
                    <h2>Phone</h2>
                    <span>+61 0426670312</span>
                </motion.div>
            </motion.div>
            <div className="flex-1">
                <form onSubmit={sendEmail} ref={formRef} className='contact-form-container flex flex-col gap-[20px]'>
                    <input name='name' type="text" placeholder='Name' />
                    <input name='email' type="text" placeholder='E-mail' />
                    <textarea name='message' rows={8} placeholder='Message'></textarea>
                    <button className='p-[20px] bg-orange-500 '>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
                </form>
            </div>
        </motion.div>
    )
}
