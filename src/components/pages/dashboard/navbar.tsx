// eslint-disable-next-line no-use-before-define
import React, { useEffect } from 'react'
import { FrontEndEnums, freelanceToken, UserType } from '../../utils/enum'
import { useNavigate } from 'react-router-dom'
import Laftbar from './leftbar'
// import jwt_decode from 'jwt-decode'
export default function Dashboard (props: any) {
  const navigate = useNavigate()
  useEffect(() => {
    const accountType = localStorage.getItem(freelanceToken.accountType)
    const token = localStorage.getItem(freelanceToken.userToken)
    if (accountType !== UserType.ADMIN || token == null) {
      navigate(FrontEndEnums.Signin)
    }
  }, [])
  return (
        <div className="lg:flex w-full bg-lightBlue">
            <div className="lg:w-1/6 ">
                <Laftbar />
            </div>
            <div className="lg:w-5/6 bg-white">
                <hr className="mt-1" />
                {props.children}
            </div>
        </div>
  )
}
