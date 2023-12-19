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
import { useParams, Link } from 'react-router-dom'
export default function TeamCategory () {
  const { id } : any = useParams()
  const [team, setTeam] = useState([])
  const [teamselected, setTeamSelct] = useState([])
  const [serviceName, setServiceName] = useState([])
  useEffect(() => {
    const getTeam = async () => {
      const urlPath = `${backEndPoints.COMMUNITY}`

      try {
        const response = await api.get(urlPath)
        if (response.data !== null) {
          setTeam(response.data)
        }
      } catch (error) {
      }
    }
    getTeam()

    const getTeamSelected = async () => {
      const urlPathteam = `${backEndPoints.COMMUNITYCAT}/${id}`
      try {
        const response = await api.get(urlPathteam)

        if (response.data !== null) {
          setTeamSelct(response.data)
        }
      } catch (error) {
      }
    }
    getTeamSelected()

    const getTeamb = async () => {
      const urlPath = `${backEndPoints.SERVICE}/${id}`
      try {
        const response = await api.get(urlPath)
        if (response.data !== null) {
          setServiceName(response.data.serviceName)
        }
      } catch (error) { }
    }
    getTeamb()
  }, [])

  return (
    <>
        <div className="bg-mobile overflow-scroll lg:h-[600px]">
            <Background/>
            <Navbar/>

            { teamselected.length > 0
              ? <div className="md:relative sm:relative mt-32 md:mt-32 mr-4 md:ml-12 font-Poppins">
                    <div className="text-xl text-white pt-5 ml-6 md:ml-3">
                        <p className="font-extrabold uppercase"> Category <span className="text-blue-500 ml-2 font-bold">{serviceName}</span></p>
                    </div>
                    <div className='w-2/4 md:w-1/3 mt-6 ml-6 md:ml-3 md:mt-4'>
                        <hr />
                    </div>
                    <div className='h-80 relative md:w-1/2 mt-10 md:mt-10'>
                        <div className='flex flex-wrap max-h-96 max-h-screen mt-0 md:mt-2 mr-2 md:mr-0 md:ml-0'>
                            {teamselected.map((team: any, index) => {
                              const urlTeam = `${FrontEndEnums.Teamview}/${team.id}/${serviceName}`
                              const urlImage = `${team.profile}`
                              return (
                                    <div key={index} className="mb-1 h-full w-full md:w-1/6 sm:w-1/6 lg:w-1/6 sm:h-28 md:h-28 p-1  group flex justify-center text-center relative overflow-hidden cursor-pointer">

                                        <Link to={urlTeam}>
                                            <img
                                                src={urlImage}
                                                alt="An image"
                                                className="max-w-full h-auto lg:min-h-[110px] object-fill  ease-in-out duration-500 grayscale group-hover:rotate-6 group-hover:scale-125"
                                            />
                                            <div className="absolute bg-black w-full h-full opacity-90 transition-opacity duration-500 group-hover:opacity-80">
                                            </div>
                                        </Link>
                                    </div>
                              )
                            })}
                        </div>
                    </div>
                </div>
              : <div className="relative mt-52 md:mt-44 mr-4 md:ml-12 font-Poppins">
                    <div className="text-xl text-white pt-5 ml-6 md:ml-3">

                    </div>
                    <div className='w-2/4 md:w-1/3 mt-6 ml-6 md:ml-3 md:mt-4'>
                        Fetching....
                    </div>
                    <div className='h-80 relative md:w-1/2 mt-10 md:mt-10 '>
                        <div className='grid grid-cols-2  md:grid-cols-4 gap-4'>
                          {[1, 2, 3, 4, 5, 6, 8, 9, 3, 3, 3, 10].map((team: any, index) => {
                            const urlTeam = `${FrontEndEnums.Teamview}/${team.id}`
                            const urlImage = `${team.profile}`
                            return (
                                  <div key={index} className=" animate-pulse mb-6   group flex justify-center text-center relative overflow-hidden rounded-md cursor-pointer">

                                            <div

                                                className="rounded-md h-24 w-full px-3 bg-slate-700 object-cover ease-in-out duration-500 group-hover:rotate-6 group-hover:scale-125"
                                            >

                                            </div>
                                    </div>
                            )
                          })}
                        </div>
                    </div>
                </div>}

        </div>

    </>
  )
}
