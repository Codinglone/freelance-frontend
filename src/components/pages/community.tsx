/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
// import image from '../Images/image 1.png'
import { FrontEndEnums, backEndPoints } from '../utils/enum'
import api from '../utils/endpointRequest'
import { communityType } from '../utils/types'
import Navbar from './Navbar'
import Background from './Background'

export default function Community () {
  const [service, setService] = useState([])
  useEffect(() => {
    const getService = async () => {
      const urlPath = `${backEndPoints.SERVICE}`
      try {
        const response = await api.get(urlPath)
        if (response.data !== null) {
          setService(response.data)
        }
      } catch (error) { }
    }
    getService()
  }, [])
  const { register, handleSubmit, formState: { errors } } = useForm<communityType>()
  const [loading, setLoading] = useState(false)
  const [messaging, setMessaging] = useState('')

  const handleCommunity = async (data: communityType) => {
    setLoading(true)
    const dataBody = new FormData()
    dataBody.append('firstName', data.firstName)
    dataBody.append('lastName', data.lastName)
    dataBody.append('dob', data.dob)
    dataBody.append('gender', data.gender)
    dataBody.append('phone', data.phone)
    dataBody.append('email', data.email)
    dataBody.append('services', data.services)
    dataBody.append('profile', data.profile[0])
    dataBody.append('cv', data.cv[0])
    dataBody.append('certificate', data.certificate[0])
    dataBody.append('description', data.description)
    dataBody.append('status', 'Not Approved')
    try {
      const communityPath = `${backEndPoints.COMMUNITY}`
      const communitySend = await api.post(communityPath, dataBody)
      console.log(communitySend)
      if (communitySend !== null) {
        setMessaging('Request to join community! successfful')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging('Request to join community! successfful')
          setLoading(false)
        }, 2000)
      }
    } catch (error:any) {
      console.log(error)
      setMessaging(error)
      setLoading(false)
    }
  }

  const [clicks, setClicks] = useState(0)
  const [small, setSmall] = useState(false)
  const [clickss, setClickss] = useState(0)
  const [yourprice, setPrice] = useState(false)
  const handleClick = () => {
    if (clicks === 0) {
      setSmall(true)
      setPrice(false)
      setClicks(1)
    } else {
      setSmall(false)
      setClicks(0)
    }
  }

  const handleYourprice = () => {
    if (clickss === 0) {
      setPrice(true)
      setSmall(false)
      setClickss(1)
    } else {
      setPrice(false)
      setClickss(0)
    }
  }
  return (
        <>
       <div className="h-full w-full bg-mobile ">
         <Background/>
         <Navbar/>
            <div className="md:relative sm:relative lg:relative sm:mt-32 md:mt-32 md:w-4/6  ml-5 text-white font-Poppins">
            {messaging
              ? <div className="bg-green-100 bg-opacity-70 border border-green-400 text-green-700 ml-6 md:ml-11 px-4 py-3 rounded relative" role="alert">
                <strong className="font-bold">{messaging}</strong>
                <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                    <a href={FrontEndEnums.JoinCommunity }>
                    <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                    </a>
                </span>
            </div>
              : <span></span> }
            <div className="text-xl text-white  ml-6 md:ml-11">
                <span className="text-green-800 p-2 font-bold"></span>
                <p className="font-extrabold mb-2">Join Our Community</p>
                <p className="font-normal"></p>
            </div>
            <form onSubmit={handleSubmit((data) => { handleCommunity(data) })} encType="multipart/form-data" className="w-full max-w-lg mt-6 md:ml-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input {...register('firstName', { required: '* This first name is required' })} type="text" className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                        <p className="text-red-500 text-xs italic">{errors.firstName && errors.firstName.message}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input {...register('lastName')} type="text" required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Date of birth
                        </label>
                        <input type="date" {...register('dob')} required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Gender
                        </label>
                        <select {...register('gender')} required className="w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" >
                          <option value="male">Male</option>
                          <option value="male">Female</option>
                        </select>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Phone Number
                        </label>
                        <input type="text" {...register('phone')} required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                         Email
                        </label>
                        <input {...register('email', { required: '* This email is required' })} className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                        <p className="text-red-500 text-xs italic">{errors.email && errors.email.message}</p>
                    </div>
                    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            PROFESSION
                        </label>
                        <select {...register('services')} required className="text-xs w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" >
                           <option value="">Select profession</option>
                           {service.map((serv: any, index) => {
                             return (
                                        <option key={index} value={serv.id}>{serv.serviceName}</option>
                             )
                           })}
                        </select>
                    </div>
                    <div className="w-full md:w-2/2 flex flex-wrap px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Your File
                        </label>
                    </div>
                    <div className="w-full md:w-2/2 mt-2 flex flex-wrap px-3 mb-6 md:mb-0">
                        <div className="md:w-1/4 sm:w-1/4 w-full">
                            <a onClick={handleClick} className="bg-gold cursor-pointer text-white text-bold rounded py-1 px-2">Your Profile</a> <br/><br/>
                            <a onClick={handleYourprice} className="bg-gold cursor-pointer text-white text-bold rounded py-1 px-2">Attachment</a>
                        </div>
                        <div className='md:w-3/4 sm:w-3/4 w-full'>
                            {small
                              ? <div className='flex flex-wrap'>
                                <div className='w-2/2 px-2'>
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                     Your Photo
                                    </label>
                                    <input type='file' {...register('profile')} required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                                </div>
                            </div>
                              : <span></span>}
                            {yourprice
                              ? <div className='flex flex-wrap'>
                                    <div className='w-2/2 px-2'>
                                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                            Your Cv
                                        </label>
                                        <input type='file' {...register('cv')} required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                                    </div>
                                    <div className='w-2/2 px-2'>
                                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                            Diplome / certificate
                                        </label>
                                        <input type='file' {...register('certificate')} required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                                    </div>
                                </div>
                              : <span></span>}
                        </div>
                        <p className='pt-3'>Biography</p>
                        <textarea {...register('description')} required className=' py-1 px-4 w-full text-white bg-black border-2 border-gold hover:border-white rounded-lg h-24'></textarea>
                    </div>
                    <div className="w-full md:w-2/2 px-3 pt-4 mb-6 md:mb-0">

                    {loading ? <input type='submit' value="Sending..." className="appearance-none block w-full text-white text-bold bg-gold hover:bg-gold cursor-pointer border-2 border-gold rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-gold" /> : <input type='submit' value="Submit" className="appearance-none block w-full text-white text-bold bg-black hover:bg-gold cursor-pointer border-2 border-gold rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />}

                    </div>
                </div>
            </form>
            </div>

        </div>

        </>
  )
}
