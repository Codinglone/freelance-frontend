import React from 'react'
import Background from './Background'
import Navbar from './Navbar'
export default function Gallery () {
  return (
        <>
             <div className="bg-mobile">
       <Background/>
       <Navbar/>
       <div className="relative mt-52 md:mt-44 mr-4 md:ml-12 font-Poppins">
           <div className="text-xl text-white pt-5 ml-6 md:ml-3">
              <p className="font-extrabold">LOGOS</p>
           </div>
           <div className='w-2/4 md:w-1/3 mt-6 ml-6 md:ml-3 md:mt-4'>
               <hr/>
           </div>
           <div className="container xl:max-w-6xl mx-auto px-4">
        <header className="text-center mx-auto mb-12 lg:px-20">
            <h2 className="text-2xl leading-normal mb-2 font-bold text-white">
            Tecnologies / Frameworks
            </h2>
            <p className="text-white leading-relaxed font-light text-xl mx-auto pb-2">
            My favorite tecnologies!
            </p>
        </header>
    </div>
       </div>
       </div>

        </>
  )
}
