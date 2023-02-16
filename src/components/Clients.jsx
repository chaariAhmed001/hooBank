import React from 'react'
import { clients } from '../constants'
import styles from '../style'

const Clients = () => {
  return (
    <section id="clients" className={`${styles.flexCenter } my-4`}>
        <div className={`w-full ${styles.flexCenter} flex-wrap`}>
            {
                clients.map(client =>(
                    <div key={client?.id} className={`flex-1 ${styles.flexCenter} sm:min-w-[192px] min-w-[120px] m-5`}>
                        <img src={client?.logo} alt='client' className='w-[100px] sm:w-[192.25px] object-contain' />  
                    </div>
                ))
            }
        </div>
    </section>
  )
}

export default Clients