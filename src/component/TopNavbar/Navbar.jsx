import "./Navbar.scss"

export default function Navbar() {
  return (
    <div className='navbar h-[100px]'>
      <div className="wrapper max-w-[1366px] m-auto flex items-center justify-between">
        <span className="font-bold">Marcos dev</span>
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
