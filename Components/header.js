import React from 'react';
import  './headerFooter.css';
import logo from './logo.svg';

function  Header(){
    return (
        <div  className="header">
        <div className=" span">      
        <span>react-app </span>         
        </div> 
        <div>
         <img src={logo}  className="logo" alt="logo" />  
         </div>
         </div>
  
    )
}
export default Header;