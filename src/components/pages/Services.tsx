/* eslint-disable @typescript-eslint/no-unused-vars */
import React, { useState, useEffect } from 'react'
// import BackgroundImage from '../Images/image 1.png'
import { FrontEndEnums, backEndPoints } from '../utils/enum'
import Navbar from './Navbar'
import Background from './Background'
import api from '../utils/endpointRequest'
import Aos from 'aos'
import { Link } from 'react-router-dom'

export default function Services () {
  const [service, setService] = useState([])
  const [data, setData] = useState([])
  const [search, setSearch] = useState('')
  useEffect(() => {
    const getService = async () => {
      const urlPath = `${backEndPoints.SERVICE}`
      try {
        const response = await api.get(urlPath)
        if (response.data !== null) {
          setService(response.data)
          setData(response.data)
        }
      } catch (error) { }
    }
    getService()
  }, [])
  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const searchNow = (e:any) => {
    console.log(e)
    setSearch(e)
    if (e.length < 1) {
      setService(data)
    } else {
      setService(service.filter((serviceData:any) => serviceData.serviceName.toLowerCase().match(e.toLowerCase())))
    }
  }

  return (
        <>
        <div className="h-fit  w-full bg-mobile">
       <Background/>
       <Navbar/>
        <div className=" h-20 md:w-1/2 w-full flex flex-wrap md:ml-16 md:relative sm:relative md:mt-32 sm:mt-32">
            <div className="w-1/2"></div>
            <div className="md:w-1/2 w-full ml-2 pr-3 md:pr-0 md:ml-0 flex">
                <div className="h-10 md:w-2/3 w-full bg-white">
                    <form method="POST">
                        <input type="text" value={search} onChange={(e:any) => searchNow(e.target.value)} placeholder="" className="h-10 w-full outline-none mx-3"/>
                    </form>
                </div>
                <div className="h-10 w-1/3 ">
                    <button className=" bg-gold w-full h-full text-md font-bold text-white py-1 pr-4 font-Poppins">Search</button>
                </div>
            </div>
        </div>
        </div>

        <div className='h-fit md:relative md:bg-black bg-mobile md:w-1/2 md:ml-14'>

        {service.length > 0
          ? <div className='flex flex-wrap '>
           {service.map((ser: any, index) => {
             return (
                   <div key={index} className="w-full md:w-1/4 sm:w-1/4">
                    <div className="mx-2.5 text-white bg-black border-2 border-gold h-16 grid content-center hover:border-white py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-black">

                    <Link to={`${FrontEndEnums.Teamcat}/${ser.id}` }>
                     <h5 className='text-center text-white md:pt-1 pt-2 text-xs md:text-base font-bold'>{ser.serviceName}</h5>
                     </Link>
                    </div>
                   </div>

             )
           })}
            </div>
          : <div className='grid grid-cols-2 md:grid-cols-4 gap-4'>
             {[1, 3, 3, 4, 5, 5, 7, 8, 8, 4, 3, 6].map((ser: any, index) => {
               return (
                   <div key={index} className="animate-pulse mb-3">
                    <div className="h-16 bg-slate-700 wfull"></div>
                   </div>

               )
             })}
              </div>
}

        </div>

        </>
  )
}
