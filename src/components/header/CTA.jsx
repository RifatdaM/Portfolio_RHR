import React from 'react'
import CV from '../../assets/RakibulHasabCV.pdf'

const CTA = () => {
  return (
    <div className="cta">
        <a href={CV} download className='btn'>Donwload CV</a>
        <a href="#contact" className='btn btn-primay'>Let's Talk</a>
    </div>
  )
}

export default CTA