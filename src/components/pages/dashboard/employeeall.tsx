// eslint-disable-next-line no-use-before-define
import React, { useState, useEffect } from 'react'
import { backEndPoints } from '../../utils/enum'
import api from '../../utils/endpointRequest'

export default function Employeeall () {
  const [employee, setEmpl] = useState([])
  const [messaging, setMessaging] = useState('')
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    const getEmpl = async () => {
      const urlPath = `${backEndPoints.EMPLOYEE}`
      try {
        const response = await api.get(urlPath)
        if (response.data !== null) {
          setEmpl(response.data)
        }
      } catch (error) { }
    }
    getEmpl()
  }, [])

  const deleteEmpl = async (id: any) => {
    setLoading(true)
    const deleteEmplPath = `${backEndPoints.EMPLOYEE}/${id.toString()}`
    const response = await api.delete(deleteEmplPath)
    const urlPath = `${backEndPoints.EMPLOYEE}`
    const responseData = await api.get(urlPath)
    try {
      if (response.data !== null) {
        setMessaging('Delete, Successfull')
        setEmpl(responseData.data)
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
  console.log(deleteEmpl)
  const [UpdateModal, setUpdateModal] = useState(false)
  const [empid, setEmpid] = useState('')
  const [firstname, setFirstname] = useState('')
  const [lastname, setLastname] = useState('')
  const [category, setCategory] = useState('')
  const [profile, setProfile] = useState('')
  const [fixedPrice, setFixedPrice] = useState('')
  const [employerPrice, setEmployerPrice] = useState('')
  const [email, setEmail] = useState('')
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')
  const [hours, setHours] = useState('')
  const [currency, setCurrency] = useState('')
  const [priceHours, setPriceHours] = useState('')
  const [createdon, setCreatedon] = useState('')
  console.log(profile)
  console.log(firstname)
  const updateEmpl = async (empid: any) => {
    setUpdateModal(true)
    const urlPath = `${backEndPoints.EMPLOYEE}/${empid}`
    useEffect(() => {
      const getEmpl = async () => {
        try {
          const response = await api.get(urlPath)
          if (response.data !== null) {
            setEmpid(response.data.empid)
            setFirstname(response.data.firstname)
            setLastname(response.data.lastname)
            setCategory(response.data.category)
            setProfile(response.data.profile)
            setFixedPrice(response.data.fixedPrice)
            setEmployerPrice(response.data.employerPrice)
            setEmail(response.data.email)
            setStartDate(response.data.startDate)
            setEndDate(response.data.endDate)
            setHours(response.data.hours)
            setCurrency(response.data.currency)
            setPriceHours(response.data.priceHours)
            setCreatedon(response.data.createdon)
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
      const emplPath = `${backEndPoints.EMPLOYEE}/${empid}`
      const emplSend = await api.patch(emplPath,
        {
          firstname: firstname.toString(),
          lastname: lastname.toString(),
          category: category.toString(),
          fixedPrice: fixedPrice.toString(),
          employerPrice: employerPrice.toString(),
          email: email.toString(),
          startDate: startDate.toString(),
          endDate: endDate.toString(),
          hours: hours.toString(),
          currency: currency.toString(),
          priceHours: priceHours.toString(),
          createdon: createdon.toString()
        })
      if (emplSend !== null) {
        setMessaging('Employee update is succefful!')
        setLoading(false)
      } else {
        setTimeout(() => {
          setMessaging('Employee update is succefful!')
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
            <h1 className="text-gray-800 text-xl font-lg font-bold tracking-normal leading-tight mb-4">Update Info of {firstname}</h1>
            <form className="w-full">
              {messaging}
            <div className="flex flex-wrap">
                <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">First Name</label>
                  <input type="text" value={firstname} onChange={(e: any) => setFirstname(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
                </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Last Name</label>
                  <input type="text" value={lastname} onChange={(e: any) => setLastname(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Category</label>
                  <input type="date" value={category} onChange={(e: any) => setCategory(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">FixedPrice</label>
                <input type="text" value={fixedPrice} onChange={(e: any) => setFixedPrice(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">EmployerPrice</label>
                <input type="text" value={employerPrice} onChange={(e: any) => setEmployerPrice(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Email</label>
                <input type="text" value={email} onChange={(e: any) => setEmail(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">StartDate</label>
                <input type="text" value={startDate} onChange={(e: any) => setStartDate(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Enddate</label>
                <input type="text" value={endDate} onChange={(e: any) => setEndDate(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Sethours</label>
                <input type="text" value={hours} onChange={(e: any) => setHours(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">currency</label>
                <input type="text" value={currency} onChange={(e: any) => setCurrency(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">Pricehours</label>
                <input type="text" value={priceHours} onChange={(e: any) => setPriceHours(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
              </div>
              <div className="w-full md:w-1/3 p-1">
                <label htmlFor="name" className="text-gray-800 text-sm font-bold leading-tight tracking-normal">createdon</label>
                <input type="text" value={createdon} onChange={(e: any) => setCreatedon(e.target.value)} className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border" />
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
            <div className="w-full flex flex-wrap py-4 bd-gray-100 border-b-2 border-gray-600">
                <div className="w-1/2">
                    <h2 className="font-bold">All Request</h2>
                </div>
            </div>
            <div className="w-full flex flex-wrap p-4 bd-gray-100 my-1">
                <div className="w-1/2">
              <h2 className="font-bold text-green-700">{messaging}</h2>
                </div>
            </div>
            <div className="w-full">
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
                        category
                        </th>
                        <th className=" font-semibold  p-2">
                        fixedPrice
                        </th>
                        <th className=" font-semibold  p-2">
                        employerPrice
                        </th>
                        <th className=" font-semibold  p-2">
                        email
                        </th>
                        <th className=" font-semibold  p-2">
                        startDate
                        </th>
                        <th className=" font-semibold  p-2">
                        endDate
                        </th>
                        <th className=" font-semibold  p-2">
                        hours
                        </th>
                        <th className=" font-semibold  p-2">
                        currency
                        </th>
                        <th className=" font-semibold  p-2">
                        priceHours
                        </th>
                         <th className=" font-semibold  p-2">
                             Created On
                         </th>
                     </tr>
                  </thead>
                  <tbody>
                     {
               employee.map((items:any, index) => {
                 return (
                     <tr key={index} className="bg-gray-100 hover:bg-gray-200 border-b border-blue-200">
                     <td className="p-1 text-sm">
                       {items.firstName}
                        </td>
                        <td className="p-1 text-sm">
                       {items.lastName}
                     </td>
                     <td className="p-1 text-sm">
                       {items.category}
                     </td>
                        <td className="p-1 text-sm">
                       {items.fixedPrice}
                        </td>
                        <td className="p-1 text-sm">
                       {items.employerPrice}
                        </td>
                        <td className="p-1 text-sm">
                       {items.email}
                        </td>
                        <td className="p-1 text-sm">
                       {items.startDate}
                        </td>
                        <td className="p-1 text-sm">
                       {items.endDate}
                        </td>
                        <td className="p-1 text-sm">
                       {items.hours}
                        </td>
                        <td className="p-1 text-sm">
                       {items.currency}
                        </td>
                        <td className="p-1 text-sm">
                       {items.priceHours}
                     </td>
                     <td className="p-1 text-sm">
                       {items.createdon}
                     </td>
                        <td className="p-1 text-sm flex">
                            { /* <button onClick={() =>
                                updateEmpl(items.id)} key="submit"
                                     className="m-1 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                                Update
                            </button> */ }
                        <button onClick={() =>
                          deleteEmpl(items.id)} className="m-1 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded">
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
