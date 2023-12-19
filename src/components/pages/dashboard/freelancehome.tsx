// eslint-disable-next-line no-use-before-define
import React, { useEffect, useState } from 'react'
import Freelances from './freelances'
import { backEndPoints } from '../../utils/enum'
import api from '../../utils/endpointRequest'
export default function FreelanceHome () {
  const [free, setFree] = useState(0)
  useEffect(() => {
    const getEmployee = async () => {
      const urlPath = `${backEndPoints.INTOUCH}`
      const response = await api.get(urlPath)
      setFree(response.data.length)
    }
    getEmployee()
  }, [])
  return (
    <>
    <div className="w-full flex justify-end mt-5">
             </div>
 <div className="pt-12 px-4 text-black text-2xl font-bold">CLient Reuqest</div>
 <div className="flex flex-wrap pt-4 px-4">
     <div className="w-full md:w-1/3 sm:w-1/3 lg:w-1/3 p-1">
         <div
             className="relative flex flex-col min-w-0 break-words bg-black rounded-lg mb-6 xl:mb-0 shadow-lg">
             <div className="flex-auto p-4">
                 <div className="flex flex-wrap">
                     <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                         <h5 className="text-gray-100 uppercase font-bold text-xs">All CLient Reuqest</h5>
                         <span className="font-bold text-xl">{free}</span>
                     </div>
                     <div className="relative w-auto pl-4 flex-initial">
                         <div
                             className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-gray-800">
                             <i className=" fa fa-commenting-o"></i></div>
                     </div>
                 </div>
             </div>
         </div>
     </div>
     </div>
     <div className="w-full p-4 bg-white">
     <div className="bg-gray-100 rounded-2xl p-2">
               <Freelances/>
               </div>
         </div>
 </>
  )
}
