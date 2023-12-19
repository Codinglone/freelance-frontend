import React, { useState, useEffect } from 'react'
import { FrontEndEnums, backEndPoints, freelanceToken } from '../../utils/enum'
import api from '../../utils/endpointRequest'
import { useNavigate } from 'react-router-dom'
// import { Chart, Axis, Geom, Coord } from 'bizgoblin'
import employee from '../../Images/employee.svg'
export default function WelcomeHome () {
  const navigate = useNavigate()
  const [empl, setEmpl] = useState([])
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
  const emplData = empl.slice(0, 4)

  const handleLogout = () => {
    localStorage.removeItem(freelanceToken.userToken)
    localStorage.removeItem(freelanceToken.accountType)
    navigate(FrontEndEnums.Signin)
  }
  const [services, setServices] = useState(0)
  const [freelance, setFreelance] = useState(0)
  const [emplo, setEmployee] = useState(0)
  const [intou, setInt] = useState(0)
  useEffect(() => {
    const getServ = async () => {
      const urlPath = `${backEndPoints.SERVICE}`
      const response = await api.get(urlPath)

      setServices(response.data.length)
    }
    getServ()
    const getFreelance = async () => {
      const urlPath = `${backEndPoints.COMMUNITY}`
      const response = await api.get(urlPath)
      setFreelance(response.data.length)
    }
    getFreelance()
    getServ()
    const getEmployee = async () => {
      const urlPath = `${backEndPoints.EMPLOYEE}`
      const response = await api.get(urlPath)
      setEmployee(response.data.length)
    }
    getEmployee()
    const getInt = async () => {
      const urlPath = `${backEndPoints.INTOUCH}`
      const response = await api.get(urlPath)
      setInt(response.data.length)
    }
    getInt()
  }, [])
  return (
     <>
     <div className="p-2">
        <div className="flex flex-wrap md:min-h-screen">
          <div className="w-full  md:w-2/3 p-4">
            <div className="flex flex-wrap">
              <div className="w-1/2 flex flex-wrap">

                <span className="text-xl pt-2 font-bold text-yellow-800">
                  Welcome, Admin!
                </span>
              </div>
              <div className="w-1/2">
                <span className="text-blue-600 font-bold rounded-full float-right">
                  <a href={FrontEndEnums.Welcome} className="mr-2"><i className="fa fa-cogs text-yellow-500 font-bold p-2 border-2 rounded-full border-yellow-500 hover:bg-yellow-500 hover:text-white"></i></a>
                  <a onClick={handleLogout} ><i className="cursor-pointer fa fa-sign-out text-gray-800 font-bold  p-2 border-2 rounded-full border-gray-700 hover:bg-gray-700 hover:text-white"></i></a>
                </span>
              </div>
            </div>

            <div className="pt-4">
              <span className="text-xs font-bold text-gray-900 mr-4">REPORT STATS</span>
             <div className="flex flex-wrap">
                <div className="w-full flex flex-wrap pt-2">
                  <div className="w-full md:w-1/3 sm:w-1/3 lg:w-1/3 p-1">
                      <a href={FrontEndEnums.Newservice}>  <div
                            className="relative flex flex-col min-w-0 break-words bg-green-700 hover:bg-green-800 rounded-lg mb-6 xl:mb-0 shadow-lg">
                          <div className="flex-auto p-4">
                            <div className="flex flex-wrap">
                              <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                                <h5 className="text-gray-100 uppercase font-bold text-xs">Our Services</h5>
                                <span className="font-bold text-xl">{services}</span>
                              </div>
                              <div className="relative w-auto pl-4 flex-initial">
                                <div
                                    className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-800">
                                  <i className="fa fa-handshake-o"></i></div>
                              </div>
                            </div>
                          </div>
                        </div>
                      </a>
                  </div>
                  <div className="w-full md:w-1/3 sm:w-1/3 lg:w-1/3 p-1">
                    <a href={FrontEndEnums.Ourfreelance}>  <div
                        className="relative flex flex-col min-w-0 break-words bg-blue-500 hover:bg-blue-600 rounded-lg mb-6 xl:mb-0 shadow-lg">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-gray-100 uppercase font-bold text-xs">Our Freelance</h5>
                            <span className="font-bold text-xl">{freelance}</span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div
                                className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-800">
                              <i className="fa fa-users"></i></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </a>
                  </div>
                  <div className="w-full md:w-1/3 sm:w-1/3 lg:w-1/3 p-1">
                    <a href={FrontEndEnums.EmployeeHome}>  <div
                        className="relative flex flex-col min-w-0 break-words bg-red-500 hover:bg-red-600 rounded-lg mb-6 xl:mb-0 shadow-lg">
                      <div className="flex-auto p-4">
                        <div className="flex flex-wrap">
                          <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                            <h5 className="text-gray-100 uppercase font-bold text-xs">Hired Freelance</h5>
                            <span className="font-bold text-xl">{emplo}</span>
                          </div>
                          <div className="relative w-auto pl-4 flex-initial">
                            <div
                                className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-800">
                              <i className=" fa fa-commenting-o"></i></div>
                          </div>
                        </div>
                      </div>
                    </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex flex-wrap pt-14 p-1">
            <div className="w-full bg-gray-100 rounded p-2 ">
              <span className="text-sm font-bold my-10 text-green-700">Last Freelance <i className="fa fa-arrow-circle-down mx-2 text-green-500 text-xl"></i></span>

              <div className=" flex flex-wrap items-center py-1 bg-white border w-full rounded-lg border-gray-200 mb-2 mt-4 ">
                    <div className="w-3/6 md:w-3/6 px-6 py-2 text-left salarium-text-sm font-bold ">
                      <div className="flex flex-wrapy items-center">
                        <input type="checkbox" /> <p className="text-gold ml-3 pt-1">Name</p>
                      </div>
                    </div>
                    <div className="w-1/6 px-6 py-2 text-left salarium-text-sm font-bold  ">
                      <p className="text-gold pt-1">Category</p>
                    </div>
                    <div className="w-1/6 px-6 py-2 text-left salarium-text-sm font-bold  ">
                      <p className="text-gold pt-1">Status</p>
                    </div>
                  </div>

              {emplData.map((emp: any, index) => {
                return (
                    <div key={index} className=" border rounded-lg border-gray-100  mb-2">
                      <div className="flex flex-wrap items-center py-2 bg-white rounded-lg w-full  ">
                        <div className="w-3/6 md:w-3/6 px-6  text-left salarium-text-sm font-bold ">
                          <div className="flex flex-wrapy items-center">
                            <input type="checkbox" className="mr-3" />
                            <div className="flex flex-wrap items-center ">
                              <div className="flex-shrink-0 h-8 w-8">
                                <img className="h-8 w-8 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=4&w=256&h=256&q=60" alt="" />
                              </div>
                              <div className="ml-4">
                                <div className="text-sm font-medium text-gray-900">
                                  {emp.firstName}
                                </div>
                                <div className="text-sm text-gray-500">
                                  {emp.lastName}
                                </div>
                              </div>
                            </div>
                          </div>
                        </div>

                        <div className="w-1/6 px-6 py-2 text-left salarium-text-sm font-bold  ">
                          <p className="text-xs">{emp.category}</p>
                        </div>
                        <div className="w-1/6 px-6 py-2 text-left salarium-text-sm font-bold  ">
                          <p className="text-xs">{emp.status}</p>
                        </div>
                      </div>

                    </div>
                )
              })}
            </div>
            </div>

          </div>
          <div className="w-full  md:w-1/3 bg-gray-100 p-4 md:min-h-screen -h-screen h-screen">
            <div className="">
              <div className="w-80 bg-gold rounded-3xl m-auto max-w-sm">
                <img src={employee} className="w-full mt-600 p-2" alt="" />
        <div className="bg-white shadow-lg rounded-b-3xl">
          <h2 className="text-center text-gray-800 text-xl font-bold pt-6">CLient Request</h2>
          <div className="flex p-4">
            <div className="w-full text-center">
              <span className="font-bold text-yellow-500">{intou}</span> All request
            </div>
          </div>
          <div className="w-full text-center m-4 ">
                    <a href={FrontEndEnums.FreelanceHome} className='bg-black w-72 lg:w-5/6 m-auto  px-8 py-2 hover:bg-gray-800 rounded-2xl  text-white text-center shadow-xl shadow-bg-blue-700'><button className="lg:text-sm text-yellow-500 text-lg font-bold"> View All</button></a>
          </div>
          <div className="text-center m-auto mt-6 w-full h-16">
          </div>
        </div>
      </div>
            </div>
            <div className="mt-48">
            </div>
          </div>
    </div>
  </div>
     </>
  )
}
