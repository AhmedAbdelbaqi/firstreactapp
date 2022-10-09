import React,{ useState }  from 'react'
import './nav.css'
import {AiFillHome ,AiOutlineUser ,AiFillBook } from 'react-icons/ai'


const Nav = () => {
  const [nav,setnav] = useState('#home');
  return (
    <nav>
      <a href="#home" onClick={()=> setnav('#home')} className={nav === '#home' ? 'active' :''} ><AiFillHome /></a>
      <a href="#about" onClick={()=> setnav('#about')} className={nav === '#about' ? 'active' :''}><AiOutlineUser /></a>
      <a href="#experience" onClick={()=> setnav('#experince')} className={nav === '#experince' ? 'active' :''}><AiFillBook /></a>
    </nav>
  )
}

export default Nav