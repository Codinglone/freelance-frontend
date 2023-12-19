import React, { useState } from 'react'
import { FrontEndEnums, backEndPoints, freelanceToken, UserType } from '../../utils/enum'
import api from '../../utils/endpointRequest'
import jwtDecode from 'jwt-decode'
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom'
import { LoginType } from '../../utils/types'
import Background from './../Background'

export default function Signin () {
  const navigate = useNavigate()
  const { register, handleSubmit } = useForm<LoginType>()
  const [loading, setLoading] = useState(false)
  const [errorMessage, setErrormessage] = useState('')

  const handleLogin = async (data: LoginType) => {
    setLoading(true)
    try {
      const loginPath = `${backEndPoints.LOGIN}`
      const newData = {
        email: data.email,
        password: data.password
      }
      const signinApi = await api.post(loginPath, newData)
      const useraccount = signinApi.data?.token || 'undefined'
      if (useraccount !== '') {
        const decoded:any = jwtDecode(useraccount)
        localStorage.setItem(freelanceToken.userToken, signinApi.data.token)
        localStorage.setItem(freelanceToken.userName, decoded.fullname)
        localStorage.setItem(freelanceToken.userEmail, decoded.email)
        localStorage.setItem(freelanceToken.userId, decoded.id)
        localStorage.setItem(freelanceToken.accountType, decoded.accountType)
        setTimeout(() => {
          setLoading(false)
          if (decoded.accountType.toString() === UserType.ADMIN) {
            navigate(FrontEndEnums.Welcome)
            setErrormessage(signinApi.data.message)
          }
        }, 2000)
      } else {
        setErrormessage(signinApi.data.message)
        setLoading(false)
      }
    } catch (error) {
      console.log(error)
      setLoading(false)
      setErrormessage('Account login fails')
    }
  }
  return (
        <>
            <div className="h-full w-full bg-mobile">
                <Background/>
                <div className="min-h-screen bg-gray-100  py-6 flex flex-col justify-center sm:py-12">
                    <div className="relative py-3 w-11/12 max-w-xl sm:mx-auto">
                        <div className="relative p-8 bg-gray-100 bg-opacity-80 shadow-sm sm:rounded-xl">
                            <div className='py-4'>
                                <h1 className="font-bold  text-center text-3xl py-2 text-black">Freelance</h1>
                                <span className="font-semibold  text-center text-blacl">Login As Administrator </span><br/>
                                { errorMessage
                                  ? <span className="font-semibold text-red-600 text-center">{errorMessage}</span>
                                  : <span></span>}
                            </div>
                            <form className="w-full" onSubmit={handleSubmit((data) => { handleLogin(data) })}>
                                <div className="mb-5 relative">
                                    <input type="text" {...register('email', { required: '* This field is required' })} className="peer pt-8 text-black  bg-gray-100 bg-opacity-80 border-2 border-yellow-500 focus:outline-none rounded-xl focus:border-yellow-600 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="Email Address"/>
                                    <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Email address</label>
                                </div>
                                <div className="mb-5 relative">
                                    <input type="password" {...register('password', { required: '* This field is required' })} className="peer pt-8 text-black bg-gray-100 bg-opacity-90  border-2 border-yellow-500  focus:outline-none rounded-xl focus:border-yellow-600 focus:shadow-sm w-full p-3 h-16 placeholder-transparent" placeholder="password"/>
                                    <label className="peer-placeholder-shown:opacity-100   opacity-75 peer-focus:opacity-75 peer-placeholder-shown:scale-100 scale-75 peer-focus:scale-75 peer-placeholder-shown:translate-y-0 -translate-y-3 peer-focus:-translate-y-3 peer-placeholder-shown:translate-x-0 translate-x-1 peer-focus:translate-x-1 absolute top-0 left-0 px-3 py-5 h-full pointer-events-none transform origin-left transition-all duration-100 ease-in-out">Password</label>
                                </div>
                                {loading ? <input type='submit' value="Loading..." className="appearance-none block w-full text-white font-bold bg-yellow-600 hover:bg-yellow-700 cursor-pointer rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" /> : <input type='submit' value="Signin" className="appearance-none block w-full text-white font-bold bg-yellow-600 hover:bg-yellow-700 cursor-pointer rounded-xl py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-black" />}

                            </form>
                            <div className='py-4'>
                                <a href={FrontEndEnums.Home}>
                                    <i className="fa fa-sign-out"></i>
                                <span className="fa fa-arrow font-normal text-gray-700"> Back</span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
  )
}
