import React from 'react'
import { Billing, Businss, CardDeal, Clients, CTA, Footer, Hero, Navbar, Stats, Testimonials } from './components'
import styles from './style'

const App = () => {
  return (
    <div className='bg-primary w-full overflow-hidden text-white'>
      <div className={`${styles.paddingX} ${styles.flexCenter} `}>
        <div className={`${styles.boxWidth}`}>
          <Navbar />
        </div>
      </div>
      <div className={`bg-primary ${styles.flexStart}`}>
        <div className={`${styles.boxWidth}`}>
          <Hero />
        </div>
      </div>
      <div className={` bg-primary ${styles.paddingX} ${styles.flexStart} `}>
        <div className={`${styles.boxWidth}`}>
          <Stats />
          <Businss />
          <Billing />
          <CardDeal />
          <Testimonials />
          <Clients />
          <CTA />
        </div>
      </div>
      <div className={`w-full ${styles.paddingX} bg-bgFooter`}>
        <Footer />
      </div>
    </div>
  )
}

export default App