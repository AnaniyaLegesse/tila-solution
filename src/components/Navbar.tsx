
const Navbar = () => {
  return (
    <div className='flex justify-between align-center px-5 h-[15vh]'>
          <img src='/logo2.svg' className='w-20 h-20' alt='logo' />
          <div className="flex gap-4 justify-center items-center">
            <a href="#home">Home</a>
            <a href="#about">About</a>
            <a href="#services">Services</a> 
            <a href="/">Contact</a>
          </div>
    </div>
  )
}

export default Navbar