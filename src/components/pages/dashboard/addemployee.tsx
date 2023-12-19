// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { backEndPoints } from '../../utils/enum'
import api from '../../utils/endpointRequest'
import { employeeType } from '../../utils/types'
import Aos from 'aos'
import 'aos/dist/aos.css'
export default function Addemployee () {
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
    setLoading(true)
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
        setMessaging('Request Employee! successful')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging('Request Employee! successful')
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
  const handleClick = () => {
    if (clicks === 0) {
      setSmall(true)
      setClicks(1)
    } else {
      setSmall(false)
      setClicks(0)
    }
  }

  const [clickss, setClickss] = useState(0)
  const [yourprice, setPrice] = useState(false)
  const handleYourprice = () => {
    if (clickss === 0) {
      setPrice(true)
      setClickss(1)
    } else {
      setPrice(false)
      setClickss(0)
    }
  }

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])
  return (
    <>
    <div className="p-2">
        <div className="flex flex-wrap">
            <div className="w-full flex flex-wrap p-4 bd-gray-100 border-b-2 border-gray-600 my-2">
                <div className="w-1/2">
                    <h2 className="font-bold">Employee Information</h2>
                </div>
            </div>
            {messaging
              ? <div className="bg-green-100 bg-opacity-70 border border-green-400 text-green-700 ml-6 md:ml-11 px-4 py-3 rounded relative" role="alert">
            <strong className="font-bold">{messaging}</strong>
        </div>
              : <span></span> }
            <div className="w-full p-2 bg-white">
                    <span className="text-green-800 p-2 font-bold"></span>
                    <form onSubmit={handleSubmit((data) => { handleEmployee(data) })} className="w-full max-w-lg mt-10 md:ml-11">
                    <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input {...register('firstName', { required: '* This first name is required' })} type="text" className="appearance-none block w-full border-2 border-gold hover:border-black rounded py-2 px-4 mb-3 leading-tight focus:outline-none" />
                        <p className="text-red-500 text-xs italic">{errors.firstName && errors.firstName.message}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input {...register('lastName')} type="text" className="appearance-none block w-full border-2 border-gold hover:border-black rounded py-2 px-4 mb-3 leading-tight focus:outline-none" />
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                         Email
                        </label>
                        <input {...register('email', { required: '* This email is required' })} className="appearance-none block w-full border-2 border-gold hover:border-black rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />
                        <p className="text-red-500 text-xs italic">{errors.email && errors.email.message}</p>
                    </div>
                    <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            Choice Service Category
                        </label>
                        <select {...register('category')} required className="w-full border-2 border-gold hover:border-black rounded py-2 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" >
                           {service.map((serv: any, index) => {
                             return (
                                        <option key={index} value={serv.serviceName}>{serv.serviceName}</option>
                             )
                           })}
                        </select>
                    </div>
                    <div className="w-full md:w-2/2 px-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-xs font-bold mb-2">
                            How i am willing to pay
                        </label>
                    </div>
                    <div className="w-full md:w-2/2 px-3 mb-3 md:mb-0">
                      <div className='flex flex-wrap'>
                        <div className="md:w-1/2 w-full">
                            <a onClick={handleClick} className="bg-gold cursor-pointer text-white text-bold rounded p-2">Fixed Prices</a>
                        </div>
                        <div className='md:w-1/2 w-full'>
                            {small
                              ? <div className='flex flex-wrap'>
                                <div className='w-1/2 '>
                                    <input type="radio" {...register('fixedPrice')} value="10K <br/>" /> 10K <br/>
                                    <input type="radio" {...register('fixedPrice')} value="10K-50k" /> 10K-50k<br/>
                                    <input type="radio" {...register('fixedPrice')} value="50K-100k" /> 50K-100k<br/>
                                    <input type="radio" {...register('fixedPrice')} value="100K-200k" /> 100K-200k<br/>
                                    <input type="radio" {...register('fixedPrice')} value="250K-300k" /> 250K-300k<br/>
                                    <input type="radio" {...register('fixedPrice')} value="300K-400k" /> 300K-400k
                                </div>
                                <div className='w-1/2 '>
                                    <input type="radio" {...register('fixedPrice')} value="400K - 500k " /> 400K - 500k <br/>
                                    <input type="radio" {...register('fixedPrice')} value="500K - 600k " /> 500K - 600k <br/>
                                    <input type="radio" {...register('fixedPrice')} value="600K - 700k " /> 600K - 700k <br/>
                                    <input type="radio" {...register('fixedPrice')} value="700K - 800k " /> 700K - 800k <br/>
                                    <input type="radio" {...register('fixedPrice')} value="900K - 1M " /> 900K - 1M <br/>
                                    <input type="radio" {...register('fixedPrice')} value="Over Rwf 1M" /> Over Rwf 1M
                                </div>
                            </div>
                              : <span></span>}
                        </div>
                        </div>
                    </div>
                    <div className="w-full md:w-2/2 mt-8 flex flex-wrap px-3 mb-6 md:mb-0">
                        <div className='md:w-1/4 sm:w-1/4 w-full'>
                            <a onClick={handleYourprice} className="bg-gold cursor-pointer text-white text-bold rounded p-2">Your Prices</a>
                        </div>
                        <div className='md:w-3/4 sm:w-3/4 w-full'>
                            {yourprice
                              ? <div className='flex flex-wrap pt-3'>
                                <div className='w-1/2 px-2'>
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                     Started Date
                                    </label>
                                    <input type='date' {...register('startDate')} required className="appearance-none block w-full  border-2 border-gold hover:border-black rounded py-2 px-4 mb-3 leading-tight focus:outline-none " />
                                </div>
                                <div className='w-1/2 px-2'>
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                     End Date
                                    </label>
                                    <input type='date' {...register('endDate')} required className="appearance-none block w-full border-2 border-gold hover:border-blackrounded py-2 px-4 mb-3 leading-tight focus:outline-none " />
                                </div>
                                <div className='w-1/2 px-2'>
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                     Hours
                                    </label>
                                    <select {...register('hours')} required className="w-full border-2 border-gold hover:border-black rounded py-2 px-4 mb-3 leading-tight focus:outline-none" >
                                        <option value="1-5">1-5</option>
                                        <option value="5-10">5-10</option>
                                        <option value="10-15">10-15</option>
                                        <option value="15-20">15-20</option>
                                        <option value="25-30">25-30</option>
                                        <option value="30hr +">30hr +</option>
                                    </select>
                                </div>
                                <div className='w-1/2 px-2'>
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                     Currency
                                    </label>
                                    <select {...register('currency')} required className="w-full border-2 border-gold hover:border-black rounded py-2 px-4 mb-3 leading-tight focus:outline-none " >
                                        <option value="EUR">EUR</option>
                                        <option value="USD">USD</option>
                                        <option value="RWF">RWF</option>
                                    </select>
                                </div>
                                <div className='w-2/2 px-2'>
                                    <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                     Price / Hour
                                    </label>
                                    <input type='text' {...register('priceHours')} required className="appearance-none block w-full border-2 border-gold hover:border-black rounded py-2 px-4 mb-3 leading-tight focus:outline-none" />
                                </div>
                            </div>
                              : <span></span>}
                        </div>
                    </div>
                    <div className="w-full float-right my-2 pt-3 md:w-2/2 sm:w-2/2 px-16 mb-6 md:mb-0">
                    {loading ? <input type='submit' value="Sending..." className="appearance-none block w-full text-white text-bold bg-gold hover:bg-gold cursor-pointer border-2 border-gold rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gold" /> : <input type='submit' value="Submit" className="appearance-none block w-full text-white text-bold bg-gold hover:bg-blue-500 cursor-pointer border-2 border-gold rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />}
                    </div>
            </div>
            </form>
        </div>
    </div>
    </div>
    </>
  )
}
