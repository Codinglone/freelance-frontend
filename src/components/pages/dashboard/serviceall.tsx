// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { backEndPoints, FrontEndEnums } from '../../utils/enum'
import api from '../../utils/endpointRequest'
import { useNavigate } from 'react-router-dom'

export default function Serviceall () {
  const navigate = useNavigate()
  const [service, setService] = useState([])
  const [messaging, setMessaging] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getEmpl = async () => {
      const urlPath = `${backEndPoints.SERVICE}`
      try {
        const response = await api.get(urlPath)
        if (response.data !== null) {
          setService(response.data)
        }
      } catch (error) { }
    }
    getEmpl()
  }, [])
  const deleteServ = async (id: any) => {
    const deleteEmplPath = `${backEndPoints.SERVICE}/${id.toString()}`
    const response = await api.delete(deleteEmplPath)
    const urlPath = `${backEndPoints.SERVICE}`
    const responseData = await api.get(urlPath)
    try {
      if (response.data !== null) {
        setMessaging('Delete, Successfull')
        setService(responseData.data)
        navigate(FrontEndEnums.Newservice)
      } else {
        setTimeout(() => {
          setMessaging(response.data.message)
          navigate(FrontEndEnums.Newservice)
        }, 2000)
      }
    } catch (error) {
      setMessaging('delete failed')
      setLoading(false)
    }
  }
  const [UpdateModal, setUpdateModal] = useState(false)
  const [id, setId] = useState('')
  const [serviceName, setServiceName] = useState('')
  const [serviceDescription, setServiceDescription] = useState('')
  console.log(serviceName)
  const updateEmpl = async (id: any) => {
    setUpdateModal(true)
    const urlPath = `${backEndPoints.SERVICE}/${id}`
    useEffect(() => {
      const getEmpl = async () => {
        try {
          const response = await api.get(urlPath)
          if (response.data !== null) {
            setId(response.data.id)
            setServiceName(response.data.serviceName)
            setServiceDescription(response.data.serviceDescription)
          }
        } catch (error) { }
      }
      getEmpl()
    }, [])
  }
  console.log(updateEmpl)
  const handleUpdate = async () => {
    setLoading(true)
    try {
      const emplPath = `${backEndPoints.SERVICE}/${id}`
      const emplSend = await api.patch(emplPath,
        {
          serviceName: serviceName.toString(),
          serviceDescription: serviceDescription.toString()
        })
      if (emplSend !== null) {
        setMessaging('Service update is succefful!')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging('Service update is succefful!')
          setLoading(false)
        }, 2000)
      }
    } catch (error: any) {
      console.log(error)
      setMessaging('send failed')
      setLoading(false)
    }
  }
  const setUpdateModalFalse = () => {
    setUpdateModal(false)
  }
  if (loading) return (<><div className='justify-center mt-64 mx-auto items-center text-center'>Loading...!</div></>)
  if (UpdateModal) {
    return (<>

      <div className="py-12 w-900 bg-gray-300 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
        <div role="alert" className="container mx-auto w-11/12 md:w-2/3">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 className="text-gray-800 text-xl font-lg font-bold tracking-normal leading-tight mb-4">Update Service  {serviceName}</h1>
            <form className="w-full">
              {messaging}
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Service Name</label>
                  <input type="text" value={serviceName} onChange={(e: any) => setServiceName(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
                </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Service Description</label>
                  <input type="text" value={serviceDescription} onChange={(e: any) => setServiceDescription(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
            </div>
            <div className="flex items-center justify-start w-full">
              <button onClick={handleUpdate} className="focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 transition duration-150 ease-in-out hover:bg-blue-600 bg-blue-700 rounded text-white px-8 py-2 text-sm">Update</button>
              <button className="focus:outline-none focus:ring-2 focus:ring-offset-2  focus:ring-gray-400 ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm" onClick={setUpdateModalFalse}>Cancel</button>
            </div>

            </form>
            <button onClick={setUpdateModalFalse} className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out rounded focus:ring-2 focus:outline-none focus:ring-gray-600" aria-label="close modal" role="button">
              <svg xmlns="http://www.w3.org/2000/svg" className="icon icon-tabler icon-tabler-x" width="20" height="20" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" fill="none" strokeLinecap="round" strokeLinejoin="round">
                <path stroke="none" d="M0 0h24v24H0z" />
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </button>
          </div>
        </div>
      </div>
    </>)
  }
  return (
    <>
    <div className="p-2">
        <div className="flex flex-wrap">
            <div className="w-full flex flex-wrap py-4 bd-gray-100 border-b-2 border-gray-600 my-2">
                <div className="w-1/2">
                    <h2 className="font-bold">Services</h2>
                </div>
            </div>
            <div className="w-full flex flex-wrap p-4 bd-gray-100 my-1">
                <div className="w-1/2">
              <h2 className="font-bold text-green-700">{messaging}</h2>
                </div>
            </div>
            <div className="w-full p-2">
            <div className="max-w-full overflow-x-auto">
                <table className="table-auto w-full bg-gray-200 text-gray-800">
                  <thead>
                     <tr className="text-left border-b-2 border-blue-400">
                        <th className=" font-semibold  p-2">
                          Service Name
                        </th>
                        <th className=" font-semibold  p-2">
                          Service Description
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {
               service.map((items:any, index) => {
                 return (
                     <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                     <td className="p-1 text-sm">
                       {items.serviceName}
                        </td>
                        <td className="p-1 text-sm">
                       {items.serviceDescription}
                     </td>
                        <td className="p-1 text-sm">
                       { /* <button onClick={() =>
                         updateEmpl(items.id)} key="submit" className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Update
                        </button> */ }
                        <button onClick={() =>
                          deleteServ(items.id)} className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
                          Delete
                              </button>
                      </td>
                     </tr>
                 )
               }
               )
                     }
                  </tbody>
               </table>
            </div>
            </div>
        </div>
    </div>
    </>
    // eslint-disable-next-line linebreak-style
  )
}
