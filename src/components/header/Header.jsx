import React from 'react'
import './header.css'
import CTA from './CTA'

const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I am </h5>
        <h1>Ahmed Elsadek</h1>
        <h5 className='text-light'> Senior Automation Engineer </h5>
        <CTA />
      </div>
    </header>
  )
}

export default header