import React from 'react'
import Navbar from './Navbar'

export default function About () {
  return (
        <>
       <div className="h-full sm:h-fit w-full ">
         <Navbar/>

            <div className="md:relative sm:relative md:mt-60 sm:mt-60 md:mt-72 md: w-5/6  ml-5 text-white font-Poppins">
               <p className='md:ml-11'>We enable companies, individual and privates to successfully
               work together in a<br></br>
                   professional virtual colaboration, with trusted environment.
               </p><br></br>
               <p className='md:ml-11'>We focus exculsively in high quality and cost-effective and implementation of<br></br> services.
                   we are advancing on a tremendous pace and with involvemrnt of skilled<br></br> and experienced people working
                   in the organization
               </p>
             </div>

            <div className='text-2xl md:ml-16 ml-6 md:flex h-44 w-full sm:w-5/6 md:w-1/2 relative mt-2'>
                <span className='lg:w-1/3 w-[86%] md:py-0 py-2 mb-2 lg:mb-0 lg:justify-center flex items-center px-2 text-base font-bold border-2 border-yellow-500 text-white lg:max-h-12 lg:mr-8 cursor-pointer'>Web Based App Dev</span>
                <span className='lg:w-1/3 w-[86%] md:py-0 py-2 mb-2 lg:mb-0 lg:justify-center flex items-center px-2 text-base font-bold border-2 border-yellow-500 text-white lg:max-h-12 lg:mr-8 cursor-pointer'>Mobile App Dev</span>
                <span className='lg:w-1/3 w-[86%] md:py-0 py-2 mb-2 lg:mb-0 lg:justify-center flex items-center px-2 text-base font-bold border-2 border-yellow-500 text-white lg:max-h-12 cursor-pointer'>USSD Dev</span>
            </div>
        </div>

        </>
  )
}
