import React from 'react'
import { Link } from 'react-router-dom'

const CTA = () => {
  return (
    <section className='cta'>
      <p className='cta-text'>please contact me, i would like to join. <br className='sm:block hidden'/>
      Let's build something together </p>
      <Link to='/contact' className='btn'>
        Contact
      </Link>
    </section>
  )
}

export default CTA
