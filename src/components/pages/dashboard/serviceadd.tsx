// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { ServiceType } from '../../utils/types'
import { backEndPoints } from '../../utils/enum'
import api from '../../utils/endpointRequest'
export default function Serviceadd () {
  const { register, handleSubmit, formState: { errors } } = useForm<ServiceType>()
  const [loading, setLoading] = useState(false)
  const [messaging, setMessaging] = useState('')
  const handleService = async (data: ServiceType) => {
    setLoading(true)
    const dataSer = {
      serviceName: data.servicename,
      serviceDescription: data.servicedecr
    }
    try {
      const serPath = `${backEndPoints.SERVICE}`
      const serSend = await api.post(serPath, dataSer)
      console.log(serSend)
      if (serSend !== null) {
        setMessaging('Service Add! successful')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging('Service Add! successful')
          setLoading(false)
        }, 2000)
      }
    } catch (error:any) {
      console.log(error)
      setMessaging(error)
      setLoading(false)
    }
  }
  return (
    <>
    <div className="p-2">
        <div className="flex flex-wrap">
            <div className="w-full flex flex-wrap p-4 bd-gray-100 border-b-2 border-gray-600 my-2">
                <div className="w-1/2">
                    <h2 className="font-bold">Services</h2>
                </div>
            </div>
            <div className="w-full md:w-1/2 p-2 bg-white">
                    <span className="text-green-800 p-2 font-bold">{messaging}</span>
                <form onSubmit={handleSubmit((data) => { handleService(data) })} encType="multipart/form-data" >
                <div className="flex flex-wrap my-4">
                        <div className="w-full md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                                Service Name
                            </label>
                                  <input {...register('servicename', { required: '* This Service is required' })} className='appearance-none block w-full bg-white text-gray-700 border border-gold rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Service Name' />
                            <p className="text-red-500 text-xs italic">{errors.servicename && errors.servicename.message}</p>
                        </div>
                        <div className="w-full md:w-1/2 sm:w-1/2 px-3 mb-6 md:mb-0">
                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2">
                         Service Description
                            </label>
                            <input {...register('servicedecr')} required className="appearance-none block w-full bg-white text-gray-700 border border-gold rounded-full py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" type="text" placeholder="Service Description" />
                        </div>
                    </div>
                <div className="w-full md:w-2/2 px-3 pt-4 mb-6 md:mb-0">
                    {loading ? <input type='submit' value="Sending..." className="appearance-none rounded-full block w-full text-gray-700 text-white bg-gold hover:bg-blue-400 cursor-pointer border-2 border-green-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-gold" /> : <input type='submit' value="Submit" className="appearance-none block w-full text-gray-700 text-bold bg-gold hover:bg-blue-500 cursor-pointer border-2 border-gold rounded py-3 px-4 mb-3 rounded-full leading-tight focus:outline-none focus:bg-black" />}
                </div>
                </form>
            </div>
        </div>
    </div>
    </>
    // eslint-disable-next-line linebreak-style
  )
}
