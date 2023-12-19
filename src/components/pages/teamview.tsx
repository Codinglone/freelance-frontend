import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Background from './Background'
import Navbar from './Navbar'
import { backEndPoints, FrontEndEnums } from '../utils/enum'
import api from '../utils/endpointRequest'
import { useForm } from 'react-hook-form'
import { intouchType } from '../utils/types'
export default function Teamview () {
  const { id, serviceName }: any = useParams()
  const [descri, setDescri] = useState([])
  const [service, setService] = useState([])
  const [profile, setProfile] = useState([])
  const serviceid = service.toString()
  const navigate = useNavigate()
  // const [serviceCat, setServiceName] = useState([])
  const urlImage = `${profile}`
  const sampleLogoAddress = 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bG9nb3N8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60'
  useEffect(() => {
    const getTeam = async () => {
      const urlPath = `${backEndPoints.COMMUNITY}/${id}`
      try {
        const response = await api.get(urlPath)
        if (response.data !== null) {
          setDescri(response.data.description)
          setService(response.data.services)
          setProfile(response.data.profile)
        }
      } catch (error) { }
    }
    getTeam()
  }, [])

  useEffect(() => {
    const getTeam = async () => {
      const urlPath = `${backEndPoints.SERVICE}/${serviceid}`
      try {
        const response = await api.get(urlPath)
        if (response.data !== null) {
          // setServiceName(response.data.serviceName)
        }
      } catch (error) { }
    }
    getTeam()
  }, [])

  const { register, handleSubmit, formState: { errors } } = useForm<intouchType>()
  const [loading, setLoading] = useState(false)
  const [messaging, setMessaging] = useState('')
  const [summary, setSummary] = useState('')
  const handleIntouch = async (data: intouchType) => {
    setLoading(true)
    const dataBody = new FormData()
    dataBody.append('firstName', data.firstname)
    dataBody.append('lastName', data.lastname)
    dataBody.append('phone', data.phone)
    dataBody.append('email', data.email)
    dataBody.append('projectname', data.projectname)
    dataBody.append('workduration', data.workduration)
    dataBody.append('summary', summary)
    dataBody.append('teamid', id)
    dataBody.append('serviceid', serviceid)
    dataBody.append('status', 'Not Approved')
    try {
      const communityPath = `${backEndPoints.INTOUCH}`
      const communitySend = await api.post(communityPath, dataBody)
      console.log(communitySend)
      if (communitySend !== null) {
        setMessaging('Submit successfful')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging('Submit successfful')
          setLoading(false)
        }, 2000)
      }
    } catch (error: any) {
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
      setSmall2(false)
      setSmall3(false)
      setClicks(1)
    } else {
      setSmall(false)
      setClicks(0)
    }
  }

  const [clicks2, setClicks2] = useState(0)
  const [small2, setSmall2] = useState(false)
  const handleClickone = () => {
    console.log('Hello world')
    if (clicks2 === 0) {
      setSmall2(true)
      setSmall(false)
      setSmall3(false)
      setClicks2(1)
    } else {
      setSmall2(false)
      setClicks2(0)
    }
  }

  const [clicks3, setClicks3] = useState(0)
  const [small3, setSmall3] = useState(false)
  const handleClicktwo = () => {
    if (clicks3 === 0) {
      setSmall3(true)
      setSmall(false)
      setSmall2(false)
      setClicks3(1)
    } else {
      setSmall3(false)
      setClicks3(0)
    }
  }

  return (
    <>
      <div className="lg:bg-black bg-mobile">
        <Background />
        <Navbar />
        <div className="sm:relative md:mt-24 sm:mt-28 mr-4 md:ml-12 font-Poppins">

          <div className='text-white ml-4'>
            <span className='font-bold text-lg'>CATEGORY</span> <span className='font-[800] text-lg text-blue-500 ml-4'>{serviceName}</span> <span onClick={() => navigate(-1)} className='font-bold text-lg ml-4 text-yellow-500 cursor-pointer'>{'>'} Back</span>
            <hr className='w-[300px]' />
          </div>
          <div className="flex flex-wrap">
            {/* start of profile and links part */}
            <div className="flex flex-row w-full h-30">
              <div>
                <div className="flex flex-col">
                  <a onClick={handleClickone} className="w-3/3 h-52 group text-center md:relative sm:relative overflow-hidden  cursor-pointer" ><img
                    src={urlImage}
                    alt="An image"
                    className="w-full h-full mt-4  object-contain grayscale ease-in-out duration-500  group-hover:grayscale-0"
                  /></a>
                  <div className="flex flex-col p-4 leading-normal">
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-yellow-500 dark:text-white">ID:<span className="font-medium text-1xl ml-1 text-white">{serviceid.toUpperCase().slice(0, 8)}</span></h5>
                    <hr className='lg:w-36' />
                    <span className='text-white my-2 font-bold'>Clients I served <br />13,221</span>
                  </div>
                </div>
                <div className="flex flex-col ml-4">
                  <p className="text-[15px] text-slate-900 mr-5"><a onClick={handleClick} className="text-yellow-500 font-bold overflow-hidden  cursor-pointer"> Testimonials</a></p>
                  <div className='w-full mb-2'>
                    <hr className='w-36 border-1 border-yellow-500' />
                  </div>
                  <p className="text-[15px] text-slate-900 mr-5 "><a onClick={handleClickone} className="text-yellow-500 font-bold overflow-hidden  cursor-pointer"> My Gallery</a></p>
                  <div className='w-full mb-2'>
                    <hr className='w-36 border-1 border-yellow-500' />
                  </div>
                  <p className="text-[15px] text-slate-900"><a onClick={handleClicktwo} className="text-white font-bold overflow-hidden  cursor-pointer" > Get in Touch</a></p>
                  <div className='w-full'>
                    <hr className='w-36 border-1 border-yellow-500' />
                  </div>
                </div>
              </div>
              <div className='w-6/12 bg-gray-300 md:ml-4 py-20 px-20 mt-4 max-h-[416px]'>
                {descri}
              </div>
              {/* end of profile and links part */}
              <div className="md:w-1/3 lg:w-4/12 mt-4 flex flex-wrap">
                {small
                  ? <div className='w-full bg-white px-14 pb-12 lg:max-h-[418px]  ml-8 lg:h-full max-h-full overflow-auto'>
                    <p className='text-base mt-20'>
                      <span className='text-yellow-500 font-[800] text-lg'>Client:</span> <span className='text-black font-[800] text-lg'>Alex:</span>
                      <span className='ml-2 font-semibold'>
                        is a professional Ui specialist I apreciate his professionalism. I would like to recomend everyone  to work with him He provides unexpected outcome/results. looking forward.
                      </span>
                    </p>

                    <p className='text-base my-8'>
                      <span className='text-yellow-500 font-[800] text-lg'>Client:</span> <span className='text-black font-[800] text-lg'>Mugabo:</span>
                      <span className='ml-2 font-semibold'>
                      Hi! Thank you for the work. It was very useful and help my company to increse the visibility of  our clients. I will not hesitate to reach you again for new work bro.
                      </span>
                    </p>
                    <p className='text-base my-8'>
                      <span className='text-yellow-500 font-[800] text-lg'>Client:</span> <span className='text-black font-[800] text-lg'>Smith:</span>
                      <span className='ml-2 font-semibold'>
                      is a professional Frontend specialist I apreciate his professionalism. I would like to recomend everyone  to work with him He provides unexpected outcome/results. looking forward.
                      </span>
                    </p>
                    <p className='text-base my-8'>
                      <span className='text-yellow-500 font-[800] text-lg'>Client:</span> <span className='text-black font-[800] text-lg'>Mucyo:</span>
                      <span className='ml-2 font-semibold'>
                        is a professional Ui specialist I apreciate his professionalism. I would like to recomend everyone  to work with him He provides unexpected outcome/results. looking forward.
                      </span>
                    </p>
                  </div>
                  : <span></span>}
                {/* gallery page */}
                {small2
                  ? <><div className='w-full  bg-white  p-8 ml-8'>

                    <div className='w-full flex flex-wrap mx-4'>
                      <div className='w-full inline-block'> <h3 className='font-[800] text-black py-4'>Logos</h3></div>
                      <div className='w-full  md:w-1/3 sm:w-2/4 inline-block'><img src={sampleLogoAddress} className="h-auto max-w-[90%] object-cover" alt="" /></div>
                      <div className='w-full  md:w-1/3 sm:w-2/4 inline-block'><img src={sampleLogoAddress} className="h-auto max-w-[90%] object-cover" alt="" /></div>
                      <div className='w-full  md:w-1/3 sm:w-2/4 inline-block'><img src={sampleLogoAddress} className="h-auto max-w-[90%] object-cover" alt="" /></div>
                    </div>
                    <div className='w-full flex flex-wrap mx-4'>
                      <div className='w-full inline-block'> <h3 className='font-[800] text-black py-4'>Pullups</h3></div>
                      <div className='w-full  md:w-1/3 sm:w-2/4 inline-block'><img src={sampleLogoAddress} className="h-auto max-w-[90%] object-cover" alt="" /></div>
                      <div className='w-full  md:w-1/3 sm:w-2/4 inline-block'><img src={sampleLogoAddress} className="h-auto max-w-[90%] object-cover" alt="" /></div>
                      <div className='w-full  md:w-1/3 sm:w-2/4 inline-block'><img src={sampleLogoAddress} className="h-auto max-w-[90%] object-cover" alt="" /></div>
                    </div>
                    <div className='w-full flex flex-wrap mx-4'>
                      <div className='w-full inline-block'> <h3 className='font-[800] text-black py-4'>Business cards</h3></div>
                      <div className='w-full  md:w-1/3 sm:w-2/4 inline-block'><img src={sampleLogoAddress} className="h-auto max-w-[90%] object-cover" alt="" /></div>
                      <div className='w-full  md:w-1/3 sm:w-2/4 inline-block'><img src={sampleLogoAddress} className="h-auto max-w-[90%] object-cover" alt="" /></div>
                      <div className='w-full  md:w-1/3 sm:w-2/4 inline-block'><img src={sampleLogoAddress} className="h-auto max-w-[90%] object-cover" alt="" /></div>
                    </div>
                    <div className='w-full flex flex-wrap mx-4'>
                      <div className='w-full inline-block'> <h3 className='font-[800] text-black py-4'>Website links</h3></div>
                      <div className='w-full md:w-2/4 sm:w-2/4 inline-block'>
                      <div className='text-xs inline-block pr-2 text-black border-b-[1px] border-black font-bold'><a href="https:www.idatech.rw" target='_blank' rel="noreferrer">https:www.idatech.rw</a></div>
                        <div className='text-xs inline-block text-black border-b-[1px] border-black font-bold'><a href="https:www.cityplus.rw" target='_blank' rel="noreferrer">https:www.cityplus.rw</a></div>
                        </div>
                        <div className='w-full md:w-2/4 sm:w-2/4 inline-block'>
                      <div className='text-xs inline-block pr-2 text-black border-b-[1px] border-black font-bold'><a href="https:www.edu.cityplus.rw" target='_blank' rel="noreferrer">https:www.edu.cityplus.rw</a></div>
                        <div className='text-xs inline-block text-black border-b-[1px] border-black font-bold'><a href="https:www.housechurch.rw" target='_blank' rel="noreferrer">https:www.housechurch.rw</a></div>
                        </div>
                    </div>
                  </div>
                  </>

                  : <span></span>}
                {/* end of gallery page */}

                {small3
                  ? <><div className='w-full bg-[#6a7fc7]  ml-8'>
                    {messaging
                      ? <div className="bg-green-100 bg-opacity-70 border border-green-400 text-green-700 m-2 md:m-2 px-4 py-3 rounded relative" role="alert">
                        <strong className="font-bold">{messaging}</strong>
                        <span className="absolute top-0 bottom-0 right-0 px-4 py-3">
                          <a href={FrontEndEnums.Team}>
                            <svg className="fill-current h-6 w-6 text-green-500" role="button" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><title>Close</title><path d="M14.348 14.849a1.2 1.2 0 0 1-1.697 0L10 11.819l-2.651 3.029a1.2 1.2 0 1 1-1.697-1.697l2.758-3.15-2.759-3.152a1.2 1.2 0 1 1 1.697-1.697L10 8.183l2.651-3.031a1.2 1.2 0 1 1 1.697 1.697l-2.758 3.152 2.758 3.15a1.2 1.2 0 0 1 0 1.698z" /></svg>
                          </a>
                        </span>
                      </div>
                      : <span></span>}
                    <div className='w-full text-center'>
                      <h1 className='font-extrabold p-2 bg-yellow-500  text-center text-white'>POST YOUR DEMAND</h1>
                      <p className=' p-2 text-md text-gold  font-bold border-b-2 border-yellow-500/20'>Hello <span className='text-white'>  client </span>!! Information to be shared will stay confidential for your security. please tell me what</p>
                    </div>
                    <form onSubmit={handleSubmit((data) => { handleIntouch(data) })} encType="multipart/form-data" >

                      <div className='flex flex-wrap p-6'>
                        <div className='w-full md:w-1/2 p-1'>
                          <label className='text-xs font-bold text-white'>Firstname</label>
                          <input {...register('firstname', { required: '* This field is required' })} type="text" className='py-1 rounded-sm w-full outline-none shadow-[box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;]' />
                          <p className="text-gold font-bold text-sm italic">{errors.firstname && errors.firstname.message}</p>
                        </div>
                        <div className='w-full md:w-1/2 p-1'>
                          <label className='text-xs font-bold text-white'>Lastname</label>
                          <input {...register('lastname', { required: '* This field is required' })} type="text" className='py-1 rounded-sm w-full outline-none shadow-lg' />
                          <p className="text-gold font-bold text-sm italic">{errors.lastname && errors.lastname.message}</p>
                        </div>
                        <div className='w-full md:w-1/2 p-1'>
                          <label className='text-xs font-bold text-white'>Email</label>
                          <input {...register('email', { required: '* This field is required' })} type="text" className='py-1 rounded-sm w-full outline-none shadow-lg' />
                          <p className="text-gold font-bold text-sm italic">{errors.email && errors.email.message}</p>
                        </div>
                        <div className='w-full md:w-1/2 p-1'>
                          <label className='text-xs font-bold text-white'>Phone</label>
                          <input {...register('phone', { required: '* This field is required' })} type="text" className='py-1 rounded-sm w-full outline-none shadow-lg' />
                          <p className="text-gold font-bold text-sm italic">{errors.phone && errors.phone.message}</p>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-2/3 p-1'>
                          <label className='text-xs font-bold text-white'>Project name</label>
                          <input {...register('projectname', { required: '* This field is required' })} type="text" className='py-1 rounded-sm w-full outline-none shadow-lg' />
                          <p className="text-gold font-bold text-sm italic">{errors.projectname && errors.projectname.message}</p>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/3 p-1'>
                          <label className='text-xs font-bold text-white shadow-lg'>Work Duration</label>
                          <input {...register('workduration', { required: '* Fill the duration' })} type="text" className='py-1 rounded-sm w-full outline-none shadow-lg' />
                          <p className="text-gold font-bold text-sm italic">{errors.workduration && errors.workduration.message}</p>
                        </div>
                        <div className='w-full md:w-full p-1'>
                          <label className='text-xs font-bold text-white'>Upload a summary  .doc/.pdf description of your demand  </label> <br /> <br />
                          {/* <input type="file" onChange={(e:any) => setSummary(e.target.files[0])} name="doc" className='rounded py-1 px-2 text-xs bg-yellow-500 w-full' /> */}
                          <label className="lg:px-8 text-center text-white  bg-[#EDB50F] rounded py-1 px-2 text-sm font-semibold shadow-lg cursor-pointer ">
                            <span className="mt-2 text-1xl font-bold">Click here to choose a file</span>
                            <input type='file' className="hidden" onChange={(e: any) => setSummary(e.target.files[0])} name="doc" />
                          </label>
                        </div>
                        <div className='w-full md:w-full p-1 lg:flex'>
                          <input type="checkbox" {...register('status')} className='outline-none' />
                          <label className='text-white text-xs ml-2 lg:mt-4 font-bold'>Read terms and conditions to use this platform, I declare that I fulfill all requirements.</label>
                        </div>
                        <div className='w-full flex justify-center px-1 pt-1 text-white'>
                          <input type='reset' value="Abort" className="appearance-none block w-1/3 text-white text-bold bg-gold hover:bg-gold cursor-pointer rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-gold mr-2 shadow-lg" />
                          {loading ? <input type='submit' value="Sending..." className="appearance-none block w-1/3 text-white text-bold bg-gold hover:bg-gold cursor-pointer rounded-sm py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-gold" /> : <input type='submit' value="Submit" className="appearance-none block w-1/3 text-white text-bold bg-[#1FB82E] hover:bg-green-600 shadow-lg cursor-pointer rounded py-1 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />}
                        </div>
                      </div>
                    </form>
                  </div></>
                  : <span></span>}
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
