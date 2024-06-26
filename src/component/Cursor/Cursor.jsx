import React, { useEffect, useState } from 'react'
import "./Cursor.scss"
import { motion } from 'framer-motion'

export default function Cursor() {
    const [position, setPosition] = useState({x: 0, y: 0})

    useEffect(() => {
        const mouseMove = (e) => {
            setPosition({x: e.clientX, y: e.clientY})
        }

        window.addEventListener("mousemove", mouseMove)

        return () => {
            window.removeEventListener("mousemove", mouseMove)
        }
    }, [])

  return (
    <motion.div className='cursor w-[50px] h-[50px] rounded-full' animate={{x: position.x + 10, y: position.y + 10}}>
      
    </motion.div>
  )
}
