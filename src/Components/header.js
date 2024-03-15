import React from 'react';
import  './headerFooter.css';
import logo from './logo.svg';
import LabelComponent from './labelComponent';

function  Header(){
    return (
        <div  className="header">
        <LabelComponent id="React" /> 
        <div>
         <img src={logo}  className="logo" alt="logo" />  
         </div>
         </div>
  
    )
}
export default Header;