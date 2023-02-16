import React from 'react'
import styles from '../style'

const CTA  = () => {
  return (
    <section id="cta" className={`px-4 md:px-24 py-12 ${styles.marginY} ${styles.flexCenter} box-shadow flex-col sm:flex-row bg-black-gradient-2 rounded-[20px] `}>
       <div className='flex flex-col flex-1 '>
        <h2 className={`${styles.heading2} `}>Let’s try our service now!</h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Everything you need to accept card payments <br className='hidden sm:block'/> and grow your business
          anywhere on the planet.
        </p>
       </div>
       <div className={`${styles.flexCenter} mt-10 sm:mt-0`}>
          <button className='w-[170px] h-16 p-2 text-primary font-poppins font-medium text-[18px] leading-[27px] rounded-[20px] bg-blue-gradient' type='button'>Get Started</button>
       </div>
    </section>
  )
}

export default CTA 