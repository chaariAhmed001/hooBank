import React from 'react'
import { features } from '../constants'
import styles, { layout } from '../style'

const Businss = () => {
  return (
    <section id='features' className={`${layout.section}`}>
        <div className={`${layout.sectionInfo}`}>
            <h2 className={`${styles?.heading2}`}>You do the business,<br className='hidden sm:block'/> we’ll handle the money.</h2>
            <p className={`${styles.paragraph} text-[16px] max-w-[520px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
            <button className='p-2 rounded-md bg-blue-gradient mt-10 py-4 px-6 text-primary font-semibold font-poppins text-[18px]' type="button">
              Get Started
            </button>
        </div>
        <div className={` ${layout.sectionImg} flex-col`}>
            {
                features.map((feature,index)=>(<div className={`flex flex-row gap-5 feature-card rounded-[20px] p-6 ${features.length -1 === index ? "mb-0" :"mb-4"}`} key={feature?.id}>
                   <div className={`w-[64px] h-[64px] rounded-full ${styles.flexCenter} bg-dimBlue`}>
                      <img src={feature?.icon} alt="star" className="w-1/3 h-1/3  object-contain" />
                    </div>
                  <div className='flex-1 flex flex-col'>
                    <h4 className='font-poppins font-semibold text-[18px] leading-[23.4px] mb-1'> {feature?.title} </h4>
                    <p className={`${styles.paragraph} text-[16px]`}>{feature?.content}</p>
                  </div>
                </div>))
            }
        </div>
    </section>
  )
}

export default Businss