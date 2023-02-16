import React from 'react'
import { arrowUp } from '../assets'
import styles from '../style'

const GetStarted = () => {
  return (
    <div className={`w-[140px] h-[140px] p-[2px] bg-blue-gradient rounded-full hover:cursor-pointer ${styles.flexCenter}`}>
        <div className={`w-full h-full  bg-primary rounded-full ${styles.flexCenter} flex-col font-poppins font-medium text-[18px] leading-[23.4px]`}>
          <div className='flex flex-row'>
            <p className='text-gradient'>Get</p>
            <img src={arrowUp} alt="arrowUp" className='w-[23px] h-[23px] object-fill'/>
          </div>
          <p className='text-gradient'>Satrted</p>
        </div>
    </div>
  )
}

export default GetStarted