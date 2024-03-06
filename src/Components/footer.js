import React from 'react';
import  './headerFooter.css';
import LabelComponent from './labelComponent';

class Footer extends React.Component {
   render(){
    const link=
      <a  className="footer"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >  <LabelComponent id="LinkLabel"  />
        </a>
       
        return link;
    }
    
}
export default Footer;