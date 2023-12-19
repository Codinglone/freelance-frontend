/* eslint-disable @typescript-eslint/no-unused-vars */

import React, { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { FrontEndEnums, backEndPoints } from '../utils/enum'
import api from '../utils/endpointRequest'
import { employeeType } from '../utils/types'
import Navbar from './Navbar'
import Background from './Background'
export default function Addservice () {
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
  const { register, handleSubmit, formState: { errors } } = useForm<employeeType>()
  const [loading, setLoading] = useState(false)
  const [messaging, setMessaging] = useState('')
  const handleEmployee = async (data: employeeType) => {
    // setLoading(true)
    const dataEmpl = {
      firstName: data.firstName,
      lastName: data.lastName,
      category: data.category,
      fixedPrice: data.fixedPrice,
      employerPrice: data.fixedPrice,
      email: data.email,
      startDate: data.startDate,
      endDate: data.endDate,
      hours: data.hours,
      currency: data.currency,
      priceHours: data.priceHours
    }
    try {
      const employPath = `${backEndPoints.EMPLOYEE}`
      const employSend = await api.post(employPath, dataEmpl)
      console.log(employSend)
      if (employSend !== null) {
        setMessaging('Regist Employee! succefful')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging('Regist Employee! succefful')
          setLoading(false)
        }, 2000)
      }
    } catch (error:any) {
      console.log(error)
      setMessaging(error)
      setLoading(false)
    }
  }

  // const [clicks, setClicks] = useState(0)
  // const [small, setSmall] = useState(false)
  // const handleClick = () => {
  //   if (clicks === 0) {
  //     setSmall(true)
  //     setClicks(1)
  //   } else {
  //     setSmall(false)
  //     setClicks(0)
  //   }
  // }

  // const [clickss, setClickss] = useState(0)
  // const [yourprice, setPrice] = useState(false)
  // const handleYourprice = () => {
  //   if (clickss === 0) {
  //     setPrice(true)
  //     setClickss(1)
  //   } else {
  //     setPrice(false)
  //     setClickss(0)
  //   }
  // }
  return (
        <>
       <div className="h-full w-full bg-mobile ">
         <Background/>
         <Navbar/>
            <div className="relative mt-52 md:mt-44 md:w-4/6  ml-5 text-white font-Poppins">
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
                <p className="font-normal">Information shared will be taken confidantial for your security annd interectual property</p>
            </div>
            <form onSubmit={handleSubmit((data) => { handleEmployee(data) })} className="w-full max-w-lg mt-10 md:ml-11">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input {...register('firstName', { required: '* This first name is required' })} type="text" required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                        <p className="text-red-500 text-xs italic">{errors.firstName && errors.firstName.message}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input {...register('lastName')} type="text" required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                         Email
                        </label>
                        <input {...register('email', { required: '* This email is required' })} className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                        <p className="text-red-500 text-xs italic">{errors.email && errors.email.message}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                         Phone
                        </label>
                        <input {...register('email', { required: '* This email is required' })} required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                        <p className="text-red-500 text-xs italic">{errors.email && errors.email.message}</p>
                    </div>
                      <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Project Name
                        </label>
                        <input {...register('lastName')} type="text" required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                    </div>
                    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Summaries your request in 100 words
                        </label>
                        <input {...register('lastName')} type="text" required className="appearance-none block w-full text-white bg-black border-2 border-gold hover:border-white rounded py-3 px-4 mb-6 leading-tight focus:outline-none focus:bg-black" />
                    </div>

                    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Choice Service Category
                        </label>
                        <select {...register('category')} required className="w-full text-white bg-black border-2 border-gold hover:border-white rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" >
                           {service.map((serv: any, index) => {
                             return (
                                        <option key={index} value={serv.serviceName}>{serv.serviceName}</option>
                             )
                           })}
                        </select>
                    </div>
                    <div className="w-full md:w-2/2 px-3 pt-4 mb-6 md:mb-0">

                    {loading ? <input type='submit' value="Sending..." className="appearance-none block w-full text-white text-bold bg-gold hover:bg-gold cursor-pointer border-2 border-gold rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gold" /> : <input type='submit' value="Submit" className="appearance-none block w-full text-white text-bold bg-black hover:bg-gold cursor-pointer border-2 border-gold rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />}

                    </div>
                </div>
            </form>
            </div>

        </div>

        </>
  )
}
