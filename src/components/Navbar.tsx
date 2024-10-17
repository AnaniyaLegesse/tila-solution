
const Navbar = () => {
  return (
    <div className='flex justify-between align-center px-5 h-[10vh] sticky top-0 '>
          <img src='/logo.svg' className='w-20 h-15' alt='logo' />
          <div className="flex gap-4 justify-center items-center">
            <a href="/" className=" hover:text-green-800">Home</a>
            <a href="#about" className=" hover:text-green-800">About</a>
            <a href="#services" className=" hover:text-green-800">Services</a> 
            <a href="#contact" className=" hover:text-green-800">Contact</a>
          </div>
    </div>
  )
}

export default Navbar