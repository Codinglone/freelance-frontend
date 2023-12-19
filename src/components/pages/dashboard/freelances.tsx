// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { backEndPoints } from '../../utils/enum'
import api from '../../utils/endpointRequest'

export default function Freelances () {
  const [Freelancer, setFreelancer] = useState([])
  const [messaging, setMessaging] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getFreel = async () => {
      const urlPath = `${backEndPoints.INTOUCH}`
      try {
        const response = await api.get(urlPath)
        if (response.data !== null) {
          setFreelancer(response.data)
        }
      } catch (error) { }
    }
    getFreel()
  }, [])

  const deleteFreel = async (id: any) => {
    setLoading(true)
    const deleteFreelancePath = `${backEndPoints.INTOUCH}/${id.toString()}`
    const response = await api.delete(deleteFreelancePath)
    const urlPath = `${backEndPoints.INTOUCH}`
    const responsedata = await api.get(urlPath)
    try {
      if (response.data !== null) {
        setMessaging('Delete, Successfull')
        setFreelancer(responsedata.data)
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging(response.data.message)
          setLoading(false)
        }, 2000)
      }
    } catch (error) {
      setMessaging('delete failed')
      setLoading(false)
    }
  }
  console.log(deleteFreel)
  const [UpdateModal, setUpdateModal] = useState(false)
  const [id, setId] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [phone, setPhone] = useState('')
  const [email, setEmail] = useState('')
  const [projectname, setProjectname] = useState('')
  const [workduration, setWorkduration] = useState('')
  const [summary, setSummary] = useState('')
  const [teamid, setTeamid] = useState('')
  const [serviceid, setServiceid] = useState('')
  const [status, setStatus] = useState('')
  console.log(lastname)
  console.log(firstname)
  const updateFreel = async (id: any) => {
    setUpdateModal(true)
    const urlPath = `${backEndPoints.INTOUCH}/${id}`
    useEffect(() => {
      const getFreel = async () => {
        try {
          const response = await api.get(urlPath)
          if (response.data !== null) {
            setId(response.data.id)
            setFirstname(response.data.firstname)
            setLastname(response.data.lastname)
            setPhone(response.data.phone)
            setEmail(response.data.email)
            setProjectname(response.data.projectname)
            setWorkduration(response.data.workduration)
            setSummary(response.data.summary)
            setTeamid(response.data.teamid)
            setServiceid(response.data.serviceid)
            setStatus(response.data.status)
          }
        } catch (error) { }
      }
      getFreel()
    }, [])
  }
  console.log(updateFreel)
  const handleUpdate = async () => {
    setLoading(true)
    try {
      const FreelPath = `${backEndPoints.INTOUCH}/${id}`
      const FreelSend = await api.patch(FreelPath,
        {
          firstname: firstname.toString(),
          lastname: lastname.toString(),
          phone: phone.toString(),
          email: email.toString(),
          projectname: projectname.toString(),
          workduration: workduration.toString(),
          summary: summary.toString(),
          teamid: teamid.toString(),
          serviceid: serviceid.toString(),
          status: status.toString()
        })
      if (FreelSend !== null) {
        setMessaging('Freelance update is succefful!')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging('Freelance update is succefful!')
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
  if (loading) return (<><div className='justify-center mt-64 mx-auto items-center text-center'>Deleting...!</div></>)
  if (UpdateModal) {
    return (<>

      <div className="py-12 w-900 bg-gray-300 transition duration-150 ease-in-out z-10 absolute top-0 right-0 bottom-0 left-0" id="modal">
        <div role="alert" className="container mx-auto w-11/12 md:w-2/3">
          <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
            <h1 className="text-gray-800 text-xl font-lg font-bold tracking-normal leading-tight mb-4">Update Info of {firstname}</h1>
            <form className="w-full">
              {messaging}
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">First Name</label>
                  <input type="text" required value={firstname} onChange={(e: any) => setFirstname(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
                </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Last Name</label>
                  <input type="text" required value={lastname} onChange={(e: any) => setLastname(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Category</label>
                  <input type="date" required value={phone} onChange={(e: any) => setPhone(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">FixedPrice</label>
                <input type="text" required value={email} onChange={(e: any) => setEmail(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">EmployerPrice</label>
                <input type="text" required value={projectname} onChange={(e: any) => setProjectname(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email</label>
                <input type="text" required value={workduration} onChange={(e: any) => setWorkduration(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">StartDate</label>
                <input type="file" required value={summary} onChange={(e: any) => setSummary(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
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
                    <h2 className="font-bold">All Reuqest</h2>
                </div>
            </div>
            <div className="w-full flex flex-wrap p-4 bd-gray-100 my-1">
                <div className="w-1/2">
              <h2 className="font-bold text-green-700">{messaging}</h2>
                </div>
            </div>
            <div className="w-full ">
            <div className="max-w-full overflow-x-auto">
                <table className="table-auto w-full bg-gray-200 text-gray-800">
                  <thead>
                     <tr className="text-left border-b-2 border-blue-400">
                        <th className=" font-semibold  p-2">
                          First Name
                        </th>
                        <th className=" font-semibold  p-2">
                          Last Name
                        </th>
                        <th className=" font-semibold  p-2">
                        Phone
                        </th>
                        <th className=" font-semibold  p-2">
                        Email
                        </th>
                        <th className=" font-semibold  p-2">
                        Project name
                        </th>
                        <th className=" font-semibold  p-2">
                        Workduration
                        </th>
                        <th className=" font-semibold  p-2">
                        Summary
                        </th>
                        <th className=" font-semibold  p-2">
                        Teamid
                        </th>
                        <th className=" font-semibold  p-2">
                        serviceid
                        </th>
                        <th className=" font-semibold  p-2">
                        Status
                        </th>
                     </tr>
                  </thead>
                  <tbody>
                     {
               Freelancer.map((items:any, index) => {
                 return (
                     <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                     <td className="p-1 text-sm">
                       {items.firstName}
                        </td>
                        <td className="p-1 text-sm">
                       {items.lastName}
                     </td>
                     <td className="p-1 text-sm">
                       {items.phone}
                     </td>
                        <td className="p-1 text-sm">
                       {items.email}
                        </td>
                        <td className="p-1 text-sm">
                       {items.projectname}
                        </td>
                        <td className="p-1 text-sm">
                       {items.workduration}
                        </td>
                        <td className="p-1 text-sm">
                       {items.summary}
                        </td>
                        <td className="p-1 text-sm">
                       {items.teamid}
                        </td>
                        <td className="p-1 text-sm">
                       {items.serviceid}
                        </td>
                        <td className="p-1 text-sm">
                       {items.status}
                        </td>
                        <td className="p-1 text-sm flex">
                            { /*  <button onClick={() =>
                         updateFreel(items.id)} key="submit" className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Update
                        </button> */ }
                        <button onClick={() =>
                          deleteFreel(items.id)} className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
