import React from 'react'
import { stats } from '../constants'
import styles from '../style'
// ${stat.id=== "stats-3" ? '' : 'border-r-2 border-gray-500 '} 
const Stats = () => {
  return (
    <section id='stats' className={`${styles.flexCenter} flex-wrap sm:mb-20 mb-6 `}>
        {stats.map(stat =>(
            <div key={stat?.id} className={`font-poppins flex gap-2 flex-1 items-center justify-between`}>
                <h4 className='text-white text-[30px] xs:text-[40px] font-semibold leading-[43px] xs:leading-[53px]'>{stat.value}</h4>
                <p className={`text-gradient font-normal text-sm xs:text-xl leading-4 xs:leading-5  uppercase w-full mr-8 ${stat.id=== "stats-3" ? '' : 'border-r-2 border-gray-500 '} `}>{stat.title}</p>
            </div>
        ))}
    </section>
  )
}

export default Stats