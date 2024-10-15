import Navbar from '../components/Navbar'

const LandingPage = () => {
  return (
    <div>
        <Navbar/>

        {/* HERO SECTION */}
        <div className="flex flex-col gap-4 justify-center items-center h-[85vh]" id='home'>
            <h1 className='text-5xl font-bold '>Welcome to Tila Tech Solution</h1>
            <p>Innovative Web Development and Digital Marketing, Tailored for You.</p>
            <button className=' bg-blue-500 px-4 py-2 text-white rounded-md transition ease-in-out delay-150 hover:-translate-y-1 hover:bg-blue-600 hover:scale-110 duration-700 '>Get Started</button>
        </div>

        {/* ABOUT SECTION */}
        <div className="md:flex bg-slate-100" id='about'>
            <div className='hidden md:block md:w-1/2 '>
                <img src="/logo2.svg" alt="Tila" />
            </div>
            <div className="md:w-1/2 flex flex-col gap-4 justify-center px-6">
                <h1 className='text-4xl font-bold '>About Us</h1>
                <p >Tila Tech Solution is dedicated to providing innovative web development 
                    and digital marketing solutions that are custom-tailored to meet the unique
                     needs of each client. Our mission is to help businesses thrive in the digital
                      landscape by leveraging cutting-edge technology and creative strategies.</p>
                <p >Our team of experts brings a wealth of experience in web development and digital marketing,
                     ensuring that every project we undertake is executed with precision and excellence.
                      We believe in a collaborative approach, working closely with our clients to understand
                       their goals and deliver solutions that exceed expectations.</p>            
            </div>
        </div>

        {/* SERVICE SECTION */}
        <div className='flex flex-col gap-8 justify-center items-center h-[100vh]' id='services'>
            <h1 className='text-4xl font-bold'>Our Services</h1>
        <div className='md:flex gap-2'> 
            <div className=' p-8 md:w-1/3 text-center'>
                <h1 className='text-xl font-bold '>Digtal Marketing</h1>
                <p >Boost your brand with our expert social media, content creation,
                     email marketing, and PPC campaigns.</p>
            </div>
            <div className=' p-8 md:w-1/3 text-center'>
                <h1 className='text-xl font-bold'>Web Development</h1>
                <p>Get a stunning, responsive, and user-friendly website tailored to your needs.</p>
            </div>
            <div className=' p-8 md:w-1/3 text-center'>
                <h1 className='text-xl font-bold'>SEO Management</h1>
                <p>Increase your online visibility with our comprehensive SEO services, 
                    including keyword research and analytics.</p>
            </div>

        </div>
        </div>
       

    </div>
  )
}

export default LandingPage