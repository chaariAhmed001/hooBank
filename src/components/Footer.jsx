import React from 'react'
import { logo } from '../assets'
import { footerLinks, socialMedia } from '../constants'
import styles from '../style'

const Footer = () => {
  return (
    <section id='footer' className={`${styles.paddingY}  flex flex-col`}>
        <div className='flex flex-col md:flex-row w-full mb-5'>
            <div className='flex-1'>
              <img src={logo} art="logo" className='w-[220px] h-[72px] object-contain'/>
              <p className={`${styles.paragraph} max-w-[312px] leading-[32px] text-[16px] ml-3 mt-4`}>A new way to make the payments easy, reliable and secure.</p>
            </div>
            <div className='flex flex-col md:flex-row flex-[1.5] w-full justify-between items-center md:items-start'>
                {
                    footerLinks?.map((footerlink,index)=>(
                        <div className='flex flex-col font-poppins min-w-[150px] mb-4 mt-4 md:mt-0' key={index}>
                            <h4 className='text-[18px] font-medium leading-[27px] mb-2'>{footerlink?.title}</h4>
                            <ul className='list-none'>
                                {
                                    footerlink?.links.map((link,index)=>(
                                        <li key={index} className={`text-[16px] font-normal leading-[24px] text-dimWhite hover:text-secondary hover:cursor-pointer ${index === footerlink?.links.length -1 ? 'mb-0' : 'mb-2'}`}>
                                            {link?.name}
                                        </li>
                                    ))
                                }
                            </ul>
                        </div>
                    ))
                }
            </div>
        </div>
        <div className='flex flex-col justify-between items-center md:flex-row border-t-[1px] border-t-[#3F3E45] pt-6'>
          <p className={` ${styles.paragraph} leading-[27px]`} >Copyright Ⓒ 2022 HooBank. All Rights Reserved.</p>
          <div className='flex flex-row mr-4 md:mt-0 mt-6'>
            {
                socialMedia.map((media, index)=>(
                    <img key={media.icon} src={media.icon} alt='socialMedia' className={`w-[21px] h-[21px] object-contain cursor-pointer ${
                        index !== socialMedia.length - 1 ? "mr-6" : "mr-0"
                      }`} />
                ))
            }
          </div>
        </div>
    </section>
  )
}

export default Footer