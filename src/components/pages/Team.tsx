/* eslint-disable no-unused-vars */
import React, { useState, useEffect } from 'react'
import { backEndPoints, FrontEndEnums } from '../utils/enum'
import api from '../utils/endpointRequest'
import { apiUrl } from '../utils/envImage'
import Background from './Background'
import Navbar from './Navbar'
import Image1 from '../Images/111.png'
import Image2 from '../Images/222.png'
import Image3 from '../Images/333.png'
import { useParams } from 'react-router-dom'
export default function Team () {
  const [team, setTeam] = useState([])
  useEffect(() => {
    const getTeam = async () => {
      const urlPath = `${backEndPoints.COMMUNITY}`
      try {
        const response = await api.get(urlPath)
        console.log(response)
        if (response.data !== null) {
          setTeam(response.data)
        }
      } catch (error) {
        console.log(error)
      }
    }
    getTeam()
  }, [])
  return (
        <>
        <div className="bg-mobile">
       <Background/>
       <Navbar/>

       <div className="md:relative sm:relative sm:mt-60 md:mt-44 mr-4 md:ml-12 font-Poppins">
           <div className="text-xl text-white pt-5 ml-6 md:ml-3">
              <p className="font-extrabold">Freelance of All Category</p>
            </div>
           <div className='w-2/4 md:w-1/3 mt-6 ml-6 md:ml-3 md:mt-4'>
               <hr />
           </div>
           <div className='h-80 md:relative sm:relative md:w-1/2 mt-10 md:mt-10 '>
           <div className='flex flex-wrap mt-0 md:mt-2 mr-2 md:mr-0 md:ml-0'>
               {team.map((team: any, index) => {
                 const urlTeam = `${FrontEndEnums.Teamview}/${team.id}`
                 const urlImage = `${team.profile}`
                 return (
                     <div key={index} className="mb-6 h-full w-full md:w-1/6 sm:w-1/6 lg:w-1/6 sm:h-28 md:h-28 p-1  group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">

                         <a href={urlTeam}>
                             <img
                                 src={urlImage}
                                 alt="An image"
                                 className="h-full w-full rounded-md object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
                             />
                             <div className="absolute bg-black w-full h-full opacity-90 transition-opacity duration-500 group-hover:opacity-80">
                             </div>
                         </a>
                     </div>
                 )
               })}
            </div>
           </div>
       </div>
       </div>

        </>
  )
}
