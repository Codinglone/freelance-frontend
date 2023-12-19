// eslint-disable-next-line no-use-before-define
import React, { useState } from 'react'
// import { useNavigate } from 'react-router-dom'
import { FrontEndEnums } from '../../utils/enum'
export default function Laftbar () {
//   const navigate = useNavigate()
  const [small, setSmall] = useState(false)
  const handleClick = () => {
    setSmall(true)
  }
  const handleSmall = () => {
    setSmall(false)
  }
  //   const handleLogout = () => {
  //     localStorage.removeItem(oasisTokens.userToken)
  //     localStorage.removeItem(oasisTokens.accountType)
  //     navigate(frontEnums.WELCOME_HOME)
  //   }
  return (<>
        <div className="md:flex flex-col md:flex-row md:min-h-screen w-full">
            <div className="flex flex-col w-full md:w-full text-gray-700 bg-black flex-shrink-0">
                <div className="flex-shrink-0 border-b-2 border-gray-600 px-8 py-4 flex flex-row items-center justify-between py-4">
                    <div className="">
                        <a href="/" className="text-xl mb-16 font-bold tracking-widest text-gray-100  rounded-lg text-white focus:outline-none focus:shadow-outline">
                          <span className='text-xl'>Freelance</span>
                        </a>
                    </div>
                    <div className="md:hidden">
                        <button type="button" onClick={handleClick} className="inline-flex items-center justify-center p-2 rounded-md text-white hover:text-yellow-600 hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:text-yellow-600 transition duration-150 ease-in-out">
                            {/* <!-- Heroicon name: menu --> */}
                            <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                            </svg>
                        </button>
                    </div>
                </div>
                <hr className="text-2xl text-gray-600 font-bold" />
                <nav className="hidden md:flex-grow lg:flex-grow w-full md:block px-4 pb-4 md:pb-0 md:overflow-y-auto py-2">
                  <h3 className="font-bold text-gray-100 py-4">Menu</h3>
                  <ul className="menu bg-gold text-sm w-full p-2 rounded-box">
                    <li>
                        <a href={FrontEndEnums.Welcome} className="font-semibold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" /></svg>
                        Home
                        </a>
                    </li>
                      <li>
                          <a href={FrontEndEnums.Newservice} className="font-semibold text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                              Services
                          </a>
                      </li>
                      <li>
                          <a href={FrontEndEnums.Ourfreelance} className="font-semibold text-white">
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                              Freelancers
                          </a>
                      </li>
                    <li>
                        <a className="font-semibold text-white" href={FrontEndEnums.EmployeeHome}>
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                         Hire Employee
                        </a>
                    </li>
                      <li>
                          <a className="font-semibold text-white" href={FrontEndEnums.FreelanceHome}>
                              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                            Client Resquest
                          </a>
                      </li>
                    <li>
                        <a href={FrontEndEnums.Welcome} className="font-semibold text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" /></svg>
                        Settings
                        </a>
                    </li>
                   </ul>
                </nav>
                {small
                  ? <div data-aos="fade-down"
                        data-aos-easing="linear"
                        data-aos-duration="500" className="relative bg-gray-100 top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden">
                        <div className="">
                            <div className="rounded-md divide-y-2">
                                <div className="pt-5 pb-6 px-5 space-y-6">
                                    <div className="flex items-center justify-between">
                                        <div>
                                            <h4 className="text-black font-bold">Freelance</h4>
                                        </div>
                                        <div className="-mr-2">
                                            <button type="button" onClick={handleSmall} className="inline-flex items-center justify-center p-2 rounded-md text-red-500 hover:text-yellow-600 hover:bg-yellow-100 focus:outline-none focus:bg-yellow-100 focus:text-yellow-600 transition duration-150 ease-in-out">
                                                <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                                                </svg>
                                            </button>
                                        </div>
                                    </div>
                                    <div>
                                        <nav className="grid gap-y-5">
                                          <a href={FrontEndEnums.Welcome} className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Home
                                            </a>
                                            <a href={FrontEndEnums.EmployeeHome} className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Employee Request
                                            </a>
                                            <a href={FrontEndEnums.FreelanceHome} className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Freelances
                                            </a>
                                            <a href={FrontEndEnums.Newservice} className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Services
                                            </a>
                                            <a href={FrontEndEnums.Welcome} className="text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Settings
                                            </a>
                                            <a href="/" className=" text-sm leading-6 font-medium text-gray-600 hover:text-red-500 focus:outline-none focus:text-yellow-700 transition ease-in-out duration-150">
                                                Sign Out
                                            </a>
                                        </nav>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                  : <span></span>}
            </div>
        </div>
    </>)
}
