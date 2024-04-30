import React, { useState } from 'react'
import { motion } from 'framer-motion'

export default function Test() {

    const [open, setOpen] = useState(false)

    const variants = {
        visible: { opacity: 1,x:500, transition:{type: "spring", } },
        hidden: { opacity: 0 }
    }

    return (
        <div className='course h-[100vh] flex items-center justify-center'>

                <motion.div
                    className="box w-[100px] h-[100px] bg-white m-auto"
                    //initial={{ opacity: 0, scale: 1 }}
                    variants={variants}
                    //initial="hidden"
                    animate={open? "visible":"hidden"}
                    
                    //transition={{  delay: 0.1 }}
                    //animate={{ opacity: 1, scale: 1, y:100}}
                    //whileInView={{ opacity: 1, scale: 1, y: -20 }}
                ></motion.div>
                <button onClick={()=>setOpen(prev=>!prev)}>click</button>
        </div>
    )
}