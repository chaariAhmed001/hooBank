import React from 'react'
import { apple, down, dribbble, google, manulife, netflix, paypal, svg, up } from '../assets'
import styles,{ layout } from '../style'

const Transaction =({logo,title,subtitle,transaction,type,bgColor})=> {
  return (
  <div className='flex flex-row justify-between my-2'>
    <div className='flex flex-row gap-3'>
      {
        bgColor ? 
        <div className={`w-10 h-10 ${styles?.flexCenter} bg-${bgColor} rounded-full`}>
          <img src={logo} alt={title} className={`w-1/2 h-1/2 ${styles?.flexCenter} object-contain`} />
        </div>
        :<img src={logo} alt={title} className={`w-10 h-10 ${styles?.flexCenter} `} />
      }
      <div className='flex flex-col font-poppins'>
        <h4 className='font-semibold text-[16px] leading-[22px]'>{title}</h4>
        <p className={`${styles.paragraph} text-[12px] leading-[22px]`}>{subtitle}</p>
      </div>
    </div>
    <div className='flex flex-row gap-2 items-center'>
      <img src={ type === 'up' ? up : down } alt={type} className='w-[14px] h-[12px] object-contain'/>
      <span className='text-[14px] font-poppins font-[400] leading-[22px]'>-{transaction}</span>
    </div>
  </div>
)}
const Billing = () => {
  return (
    <section id="billing" className={`${layout.sectionReverse}`}>
      <div className='flex flex-1 flex-col relative mr-0 md:mr-10 min-h-[455px]'>
        {/* Paypal Card */}
        <div className='w-[227px] h-[216px] block md:absolute z-[10] rounded-[10px] p-2 left-0 md:left-[220px] bg-card mb-4'>
          {/* paypal icon */}
          <div className={`flex items-center flex-row gap-4 ml-3 mt-3`}>
            <div className='w-14 h-14 bg-white rounded-full flex items-center justify-center'>
               <img src={paypal} alt='paypal Logo' className='w-1/2 h-1/2 object-contain'/>
            </div>
            <div>
              <h4 className='font-poppins font-semibold text-[24px] leading-[38.4px] '>Paypal</h4>
              <p className={`${styles.paragraph} text-[12px] leading-[19.2px]`}>Checkout</p>
            </div>
          </div>
          {/* total */}
          <div className='flex flex-row justify-between items-center my-4 ml-2'>
            <p className='font-poppins font-[400] text-[18px]'><span className={`${styles.paragraph} text-[12px] leading-[12.2px]`}>Total</span> <br/> $210</p>
            <div className={`${styles.flexCenter} ${styles.paragraph} text-[12px] mr-2 border-solid border-[1px] border-sky-200 w-[72px] h-[33px] rounded-[10px] text-gradient`}>
              Change
            </div>
          </div>
          {/* payment button */}
          <button type='button' className={`${styles.flexCenter} text-primary font-poppins leading-[19.2px] font-medium text-[12px] w-[95%] ml-1 bg-blue-gradient rounded-[10px] h-[33px]`}>
            Make Payment
          </button>
        </div>
        {/* transaction card */}
        <div className='md:w-[335px] h-[280px]  top-0 md:top-[150px] block md:absolute z-[8] bg-card rounded-[9.12px] p-4 mb-4'>
          <h4 className='font-poppins font-semibold text-[22px] leading-[22px] mt-4'>Last Transaction</h4>
          <div className='flex flex-col mt-4'>
            <Transaction logo={dribbble} title="Dribbble Pro" subtitle="15 Days ago" transaction="$250,93" type="down" />
            <Transaction logo={netflix} title="Netflix" subtitle="4 Days ago" transaction="$250,93" type="down" bgColor="bg_logo_1"/>
            <Transaction logo={manulife} title="Manulife Cash" subtitle="4 Days ago" transaction="$250,93" type="up" bgColor="bg_logo_2" />
          </div>
        </div>
        {/* succes card */}
        <div className={`flex flex-row gap-2 bg-white rounded-[10px] p-4 h-[54px] ${styles.flexCenter} block md:absolute  left-0 md:left-[200px] top-[400px] z-[10] mt-1`}>
          <img src={svg} alt="succes" className={`w-6 h-6 ${styles.flexCenter} object-contain`}/>
          <span className='font-poppins font-medium leading-[22px] text-[14px] text-primary'>Great! Your Payment is succesfully.</span>
        </div>
        <div className="absolute z-[3] -left-1/2 top-0 w-[50%] h-[50%] rounded-full white__gradient" />
        <div className="absolute z-[0] w-[50%] h-[50%] -left-1/2 bottom-0 rounded-full pink__gradient" />
      </div>
      <div className='flex flex-1 flex-col justify-center items-start'>
        <h1 className={styles.heading2}>Easily control your <br className='hidden sm:block' /> billing & invoicing.</h1>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Elit enim sed massa etiam. Mauris eu adipiscing ultrices ametodio aenean neque. Fusce ipsum orci rhoncus aliporttitor integer platea placerat.</p>
        <div className="flex flex-row flex-wrap sm:mt-10 mt-6">
          <img src={apple} alt="google_play" className="w-[128.86px] h-[42.05px] object-contain mr-5 cursor-pointer mb-2" />
          <img src={google} alt="google_play" className="w-[144.17px] h-[43.08px] object-contain cursor-pointer mb-2" />
        </div>
      </div>
    </section>
  )
}

export default Billing