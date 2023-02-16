import React from 'react'
import { discount, robot } from '../assets'
import styles from '../style'
import GetStarted from './GetStarted'

const Hero = () => {
  return (
    <section id='home' className={`${styles.paddingY} flex flex-col md:flex-row`}>
      <div className={`${styles.flexStart} flex-1 flex-col xl:px-0 sm:px-16 px-6`}>
        {/* discount */}
        <div className='flex items-center gap-2 bg-discount bg-discount-gradient py-[6px] px-4 rounded-[10px] mb-2'>
          <img src={discount} alt="discount" />
          <p className={styles.paragraph}><span className='text-white'>20%</span> DISCOUNT FOR <span className='text-white'>1 MONTH </span>ACCOUNT</p>
        </div>
        {/* next generation */}
        <div className='flex justify-between items-center w-full'>
          <h1 className='text-white font-poppins font-semibold text-6xl ss:text-[65px] leading-[75px] ss:leading-[100.8px]'>The Next <br/> <span className='text-gradient'>Generation</span></h1>
          <div className='ss:flex hidden md:mr-4 mr-0'>
            <GetStarted />
          </div>
        </div>
        <h1 className="font-poppins font-semibold ss:text-[65px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]  w-full">
          Payment Method.
        </h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Our team of experts uses a methodology to identify the credit cards
          most likely to fit your needs. We examine annual percentage rates,
          annual fees.
        </p>
      </div>
      <div className={`flex-1 relative ${styles.flexCenter} md:my-0 my-10`}>
        <img src={robot} alt="billing" className="w-full h-full relative z-[5]" />

        <div className='absolute w-[578px] h-[571px] pink__gradient z[0] top-0'/>
        <div className='absolute w-[405px] h-[471px] white__gradient rounded-full z-[1]'/>
        <div className='absolute w-[482.59px] h-[615.14px] blue__gradient z-[0] right-20 bottom-20' /> 
      </div>
    </section>
  )
}

export default Hero