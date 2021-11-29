import React from 'react'
import img1 from './assets/2.png';
import './header.css'

const Header = () => {
    return (
      <div class="header">
        <a href="#default" className="logo">Logo Academy</a>
      <div class="header-right">
        <a href="#home">Products</a>
        <a href="#contact">Solutions</a>
        <a href="#about">Company</a>
        <a href="#about">Partner</a>
        <a href="#about">Resources</a>
        <a href="#Home"><button class="button button3">Search for courses</button></a>
      </div>
      
    </div>
     
    )
}

export default Header
