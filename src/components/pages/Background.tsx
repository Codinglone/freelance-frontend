import React from 'react'
import BackgroundImage from '../Images/image 1.png'

export default function Background () {
  return (
    <>
      <img src={BackgroundImage} className='w-full hidden md:block h-full absolute' />
    </>
  )
}
