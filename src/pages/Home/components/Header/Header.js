import React from 'react'
import './Header.css'
import logo from '../../../../assets/img/img/home/logo.jpg'
export default function Header() {
    return (
        <div className='header1'>
           <div className='i'>
               <img src={logo}/>
           </div>
           <div className='x'>
              <p>寻找商品</p> 
           </div>
        </div>
    )
}


