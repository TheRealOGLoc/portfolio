import "./Navbar.scss"
import Sidebar from "../Sidebar/Sidebar"
import { motion } from "framer-motion"

export default function Navbar() {

  return (
    <div className='navbar h-[100px]'>
      <Sidebar/>
      <div className="navbar-wrapper max-w-[1366px] m-auto flex items-center justify-between h-[100%]">
        <motion.span className="navbar-span font-bold" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} >Marcos dev</motion.span>
        <div className='social flex gap-[10px]'>
          <a href="#"><img src="/images/facebook.png" alt="" /></a>
          <a href="#"><img src="/images/github.png" alt="" /></a>
          <a href="#"><img src="/images/instagram.png" alt="" /></a>
          <a href="#"><img src="/images/linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}
