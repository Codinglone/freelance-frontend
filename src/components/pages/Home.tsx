import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { FrontEndEnums, backEndPoints } from '../utils/enum'
import api from '../utils/endpointRequest'
import { employeeType } from '../utils/types'
import Navbar from './Navbar'
import Background from './Background'
import Aos from 'aos'
import 'aos/dist/aos.css'
import { useNavigate } from 'react-router-dom'

export default function Home () {
  const navigate = useNavigate()
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
  const handleEmployee = async (data: any) => {
    console.log(data)
    setLoading(true)
    try {
      const urlTeam = `${FrontEndEnums.Teamcat}/${data.category}`
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
      const response = await api.post(`${backEndPoints.EMPLOYEE}`, dataEmpl)
      if (response.data !== null) {
        setMessaging('Request successfull')
        setLoading(false)
      }
      setTimeout(() => {
        setMessaging('Request successfull')
        navigate(urlTeam)
        setLoading(false)
      }, 2000)
    } catch (error) {
      console.log(error)
      setMessaging('not successfull')
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

  useEffect(() => {
    Aos.init({ duration: 2000 })
  }, [])

  const [show, setShow] = useState(false)
  const [wnd, setwnd] = useState(true)
  const showContent = () => {
    setShow(true)
    setwnd(false)
  }

  return (
        <>
        <div className="h-full w-full bg-mobile md:bg-black">
        <Background/>
        <Navbar/>

        {show
          ? <div data-aos="fade-down" className='h-fit md:h-auto md:mt-20  md:ml-16 md:w-2/5 font-Poppins md:relative sm:relative'>
        {messaging
          ? <div className="bg-green-100 bg-opacity-70 border border-green-400 text-green-700 md:ml-11 px-4 py-3 rounded md:relative sm:relative" role="alert">
            <strong className="font-bold">{messaging}</strong>
            <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                <a href={FrontEndEnums.Home}>
                <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z"/></svg>
                </a>
            </span>
        </div>
          : <span></span> }
           <div className="text-xl text-white">
                <span className="text-green-800 p-2 font-bold"></span>
                <p className="font-semibold text-sm ">Work with an individual freelancer of your choice, schedure,time, share ideas and payment. You will thank us later!.</p>
            </div>
            <form onSubmit={handleSubmit((data) => { handleEmployee(data) })} className="w-full max-w-lg mt-6">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2  md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            First Name
                        </label>
                        <input {...register('firstName', { required: '* This field is required' })} type="text" className="text-xs font-bold appearance-none bg-white block w-full text-black bg-black border-2  rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:text-white" />
                        <p className="text-red-500 text-xs italic">{errors.firstName && errors.firstName.message}</p>
                    </div>
                    <div className="w-full md:w-1/2 pl-0 md:pl-3 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Last Name
                        </label>
                        <input {...register('lastName', { required: '* This field is required' })} type="text" className="text-xs font-bold appearance-none block w-full text-black bg-white border-2  rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:text-white" />
                        <p className="text-red-500 text-xs italic">{errors.lastName && errors.lastName.message}</p>
                    </div>
                    <div className="w-full md:w-2/2 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                         Email
                        </label>
                        <input {...register('email', { required: '* This field is required' })} className="text-xs appearance-none font-bold block w-full text-black bg-white border-2  rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:text-white" />
                        <p className="text-red-500 text-xs italic">{errors.email && errors.email.message}</p>
                    </div>
                    <div className="w-full md:w-2/2 mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            Choose Service Category
                        </label>
                        <select {...register('category', { required: '* Please select category' })} className="text-xs w-full text-black font-bold bg-white border-2  rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:text-white" >
                           <option selected={true} disabled={true}>Select Service Category</option>
                           {service.map((serv: any, index) => {
                             return (
                                        <option key={index} value={serv.id}>{serv.serviceName}</option>
                             )
                           })}
                        </select>
                        <p className="text-red-500 text-xs italic">{errors.category && errors.category.message}</p>
                    </div>
                    <div className="w-full md:w-2/2 flex flex-wrap mb-6 md:mb-0">
                        <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                            How i am willing to pay
                        </label>
                    </div>
                    <div className="w-full md:w-2/2 mt-2 flex flex-wrap mb-6 md:mb-0">
                        <div className="md:w-1/4 sm:w-1/4 w-full gap-1">
                            <a onClick={handleClick} className="bg-white cursor-pointer text-black text-bold rounded px-2 py-1">Fixed Prices</a> <br/><br/>
                          <a onClick={handleYourprice} className="bg-white cursor-pointer text-black text-bold rounded px-2 py-1">Your Prices</a>
                        </div>
                        <div className='md:w-3/4 sm:w-3/4 w-full pt-3'>
                            {small
                              ? <div className='flex flex-wrap ml-6'>
                                <div className='w-1/2 text-white text-xs'>
                                    <input type="radio" {...register('fixedPrice')} value="10K <br/>" /> 10K <br/>
                                    <input type="radio" {...register('fixedPrice')} value="10K-50k" /> 10K-50k<br/>
                                    <input type="radio" {...register('fixedPrice')} value="50K-100k" /> 50K-100k<br/>
                                    <input type="radio" {...register('fixedPrice')} value="100K-200k" /> 100K-200k<br/>
                                    <input type="radio" {...register('fixedPrice')} value="250K-300k" /> 250K-300k<br/>
                                    <input type="radio" {...register('fixedPrice')} value="300K-400k" /> 300K-400k
                                </div>
                                <div className='w-1/2 text-white text-xs'>
                                    <input type="radio" {...register('fixedPrice')} value="400K - 500k " /> 400K - 500k <br/>
                                    <input type="radio" {...register('fixedPrice')} value="500K - 600k " /> 500K - 600k <br/>
                                    <input type="radio" {...register('fixedPrice')} value="600K - 700k " /> 600K - 700k <br/>
                                    <input type="radio" {...register('fixedPrice')} value="700K - 800k " /> 700K - 800k <br/>
                                    <input type="radio" {...register('fixedPrice')} value="900K - 1M " /> 900K - 1M <br/>
                                    <input type="radio" {...register('fixedPrice')} value="Over Rwf 1M" /> Over Rwf 1M
                                </div>
                            </div>
                              : <span></span>}
                          {yourprice
                            ? <div className='flex flex-wrap'>
                                <div className='w-1/2 px-2'>
                                  <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                    Starting Date
                                  </label>
                                  <input type='date' {...register('startDate')} className=" text-xs appearance-none block w-full text-black font-bold bg-white   rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:text-white" />
                                </div>
                                <div className='w-1/2 px-2'>
                                  <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                    Ending Date
                                  </label>
                                  <input type='date' {...register('endDate')} className="text-xs appearance-none block w-full text-black bg-white font-bold  rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:text-white" />
                                </div>
                                <div className='w-1/2 px-2'>
                                  <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                    Hours
                                  </label>
                                  <select {...register('hours')} className="w-full text-xs text-black font-bold bg-white border-gold  rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:text-white" >
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
                                  <select {...register('currency')} className="w-full text-xs text-black bg-white  rounded-sm font-bold py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black focus:text-white" >
                                    <option value="EUR">EUR</option>
                                    <option value="USD">USD</option>
                                    <option value="RWF">RWF</option>
                                  </select>
                                </div>
                                <div className='w-full md:w-2/2 px-2'>
                                  <label className="block uppercase tracking-wide text-gray-100 text-xs font-bold mb-2">
                                    Price / Hour
                                  </label>
                                  <input type='text' {...register('priceHours')} className="text-xs appearance-none block w-full text-black bg-white  rounded-sm font-bold py-2 px-4 mb-3 leading-tight focus:bg-black focus:text-white" />
                                </div>
                              </div>
                            : <span></span>}
                        </div>
                    </div>
                    <div className="w-full flex justify-center px-1 pt-1 text-white lg:ml-16">
                    <input type='reset' value="Abort" className="appearance-none block w-1/3 text-white text-bold bg-gold hover:bg-gold cursor-pointer rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-gold mr-2 shadow-lg" />
                    {loading ? <input type='submit' value="Sending..." className="appearance-none block w-1/3 text-white text-bold bg-gold hover:bg-gold cursor-pointer rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-gold" /> : <input type='submit' value="Submit" className="appearance-none block w-1/3 text-white text-bold bg-[#1FB82E] hover:bg-green-600 shadow-lg cursor-pointer rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />}

                    </div>
                </div>
            </form>

        </div>
          : <span></span>
        }
        {wnd
          ? <div className='md:relative sm:relative h-auto md:mt-80 md:h-60 mt-32 md:px-12 md:w-1/2' >
                <p className='text-white font-extrabold text-2xl md:text-3xl ml-3 font-Poppins'><span className='text-gold px-2'>WE ARE</span><span className='text-gold md:text-white'>NIGHT </span> <span>DEVELOPERS</span></p>
                <p className='text-white text-md mt-2 px-2 ml-3 font-Poppins'> Hire affordable professinal individual or a team of freelancers</p>
                <p className='text-white text-md px-2 ml-3 font-Poppins'>We are here to faster your work, and deadlines to help your stay the best</p>

            <div className='md:h-14 h-72 w-full mt-2 flex flex-wrap '>

                <div className='h-14 md:w-3/6 sm:w-3/6 lg:w-3/6 w-full border-2 border-gold ml-4 mr-2 md:mr-0'>
                     <a>
                    <h5 onClick={showContent} className='text-center text-white pt-3 text-base md:text-md font-extrabold md:pt-4 font-Poppins cursor-pointer'>Hire a pro freelancer</h5>
                    </a>
                </div>

                <div className='h-14 md:w-1/3 sm:w-1/3 lg:w-1/3 w-full bg-gold ml-3 mr-2 md:mr-0'>
                    <a href={FrontEndEnums.JoinCommunity}>
                <h4 className='text-center text-white pt-4 text-base md:text-md font-extrabold md:pt-4 font-Poppins'>Join Community</h4>
                </a>
                </div>
            </div>
            </div>
          : <span></span>

    }

    </div>

        </>
  )
}
