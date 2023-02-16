import React from 'react'
import { quotes } from '../assets'
import { feedback } from '../constants'
import styles from '../style'

const Testimonials = () => {
  return (
    <section id="clients" className={`${styles.paddingY} ${styles.flexCenter} flex-col`}>
        <div className='flex flex-col md:flex-row items-center w-full sm:mb-16 mb-6'>
            <h2 className={`flex-[1] lg:flex-[0.5] ${styles.heading2}`}>What people are<br className='hidden sm:block'/> saying about us</h2>
            <p className={`flex-[1] lg:flex-[0.5] md:mt-0 mt-6 ${styles.paragraph} lg:max-w-[470px] text-left w-full`}>Everything you need to accept card payments<br className='hidden sm:block'/> and grow your business anywhere on the planet.</p>
        </div>
        <div className='flex flex-wrap w-full justify-between'>
            {
                feedback?.map(card=>(
                    <div key={card?.id} className="flex flex-col px-10 py-12 rounded-[20px] font-poppins font-normal feedback-card"> 
                        <img src={quotes} alt='quotes' className='w-[42.6px] h-[27.6] my-5'/>
                        <p className='max-w-[250px] text-[18px] leading-[32.4px] min-h-[128px]'>{card.content}</p>
                        <div className='flex flex-row gap-4 my-5'>
                            <img src={card?.img} alt={card.name} className=" rounded-full w-12 h-12" />
                            <div className='flex flex-col'>
                                <h4 className='text-[16px] sm:text-[18px] leading-8'>{card?.name}</h4>
                                <p className='text-[14px] sm:text-[16px] leading-6 text-dimWhite'>{card.title}</p>
                            </div>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Testimonials