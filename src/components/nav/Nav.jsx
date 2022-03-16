import React from 'react'
import '../../index.css'
import {AiOutlineHome, AiOutlineUser} from 'react-icons/ai'
import {BiBookBookmark, BiMessage} from 'react-icons/bi'
import {RiServiceLine} from 'react-icons/ri'
const Nav = () => {
  return (
    <nav>
      <a href="#home"><AiOutlineHome/></a>
      <a href="#about"><AiOutlineUser/></a>
      <a href="#experience"><BiBookBookmark/></a>
      <a href="#services"><RiServiceLine/></a>
      <a href="#contact"><BiMessage/></a>
    </nav>
  )
}

export default Nav