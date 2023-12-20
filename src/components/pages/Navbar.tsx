import React, { useState } from 'react'
import { FrontEndEnums } from '../utils/enum'
import { FaBars } from 'react-icons/fa'
import { Link } from 'react-router-dom'
export default function Navbar () {
  const [toggle, setToggle] = useState(false)
  const toggleMe = () => {
    setToggle(!toggle)
    console.log(toggle)
  }
  return (<>
        <div onClick={toggleMe} className="md:hidden bg-mobile h-20  md:h-0 w-full  md:w-0" >
                < FaBars size={45} style={{ color: 'white' }} className='ml-3 pt-3' />
        </div>
       <div className="h-0 md:h-0 w-full md:w-[46%] relative bg-mobile z-50">
            <div className="hidden md:block">
                <div className="flex justify-between h-20 w-full ml-20 md:ml-16">
                <Link className="pt-10 text-white text-xl font-Poppins hover:font-bold  hover:text-gold" to={FrontEndEnums.Home} >Home</Link>
                <Link className="pt-10 text-white text-xl font-Poppins hover:font-bold  hover:text-gold" to={FrontEndEnums.About}>About</Link>
                <Link className="pt-10 text-white  text-xl font-Poppins hover:font-bold  hover:text-gold" to={FrontEndEnums.Service}>Services</Link>
                {/* <Link className="pt-10  text-white text-xl font-Poppins hover:font-bold  hover:text-gold" to={FrontEndEnums.Support }>Support</Link> */}
                <Link className="pt-10 text-white font-bold text-xl font-Poppins hover:text-gold" to={FrontEndEnums.JoinCommunity }>Join our Community</Link>
                </div>
            </div>

           {toggle
             ? <div data-aos="fade-down" className=" relative bg-gray-700 p-4 top-0 inset-x-0 md:ml-0 ml-0 pb-4  md:h-0 h-68">
            <div className='h-10  ml-6 w-5/6 md:border-0 md:border-t-0 md:border-b-0 border-t-2 border-b-2 border-gray-400'>
                <a className=" md:text-black text-white hover:font-bold  hover:text-gold text-xl" href={FrontEndEnums.Home} >Home</a>
            </div>
            <div className='h-10 ml-6 w-5/6 md:border-0 border-b-2 border-gray-400'><Link className=" text-white md:text-black text-xl hover:font-bold font-Poppins  hover:text-gold" to={FrontEndEnums.About}>About</Link></div>
            <div className='h-10 ml-6 w-5/6 md:border-0 border-b-2 border-gray-400'><Link className=" text-white md:text-black  text-xl hover:font-bold font-Poppins  hover:text-gold" to={FrontEndEnums.Service}>Services</Link></div>
            {/* <div className='h-10 ml-6 w-5/6 md:border-0 border-b-2 border-gray-400'><Link className="  text-white md:text-black text-xl hover:font-bold font-Poppins  hover:text-gold" to={FrontEndEnums.Support }>Support</Link></div> */}
            <div className='h-10 ml-6 w-5/6 md:border-0 border-b-2 border-gray-400'><Link className=" md:text-black  text-white text-xl hover:font-bold font-Poppins  hover:text-gold" to={FrontEndEnums.JoinCommunity }>Join our Community</Link></div>

            </div>
             : <span></span>
        }
        </div>
    </>)
}
