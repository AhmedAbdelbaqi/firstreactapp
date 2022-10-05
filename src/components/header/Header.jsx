import React from 'react'
import './header.css'
import CTA from './CTA'
import me from '../../assets/me.png'
import HeaderSocial from './headerSocial'


const header = () => {
  return (
    <header>
      <div className="container header__container">
        <h5> Hello I am </h5>
        <h1>Ahmed Elsadek</h1>
        <h5 className='text-light'> Senior Automation Engineer </h5>
        <CTA />
        <HeaderSocial />
        <div className="me__image">
          <img src={me} alt="" />
        </div>
      </div>
    </header>
  )
}

export default header