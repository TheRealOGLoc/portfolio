import "./Navbar.scss"
import Sidebar from "../Sidebar/Sidebar"
import { motion } from "framer-motion"

export default function Navbar() {

  return (
    <div className='navbar h-[100px]'>
      <Sidebar/>
      <div className="navbar-wrapper max-w-[1366px] m-auto flex items-center justify-between h-[100%]">
        <motion.span className="navbar-span font-bold pl-[150px]" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ duration: 0.3 }} ></motion.span>
        <div className='social flex gap-[10px]'>
          <a href="https://www.facebook.com/yuchen.liu.90663/"><img src="/images/facebook.png" alt="" /></a>
          <a href="https://github.com/TheRealOGLoc"><img src="/images/github.png" alt="" /></a>
          <a href="https://www.instagram.com/jojoho_kkk/"><img src="/images/instagram.png" alt="" /></a>
          <a href="https://www.linkedin.com/in/yuchen-liu-se/"><img src="/images/linkedin.png" alt="" /></a>
        </div>
      </div>
    </div>
  )
}
