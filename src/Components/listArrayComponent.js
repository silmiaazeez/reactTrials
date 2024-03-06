import React from 'react';
import PropTypes from "prop-types"; 

import LabelComponent from './labelComponent';

ListArr.propTypes={
    name1:PropTypes.string.isRequired,
    name2:PropTypes.string.isRequired
  }

function ListArr(props){  
    const arr=[props.name1,props.name2];  
    return  <div><LabelComponent   id="ListLabel"/><div className="label-Style"> {arr} </div></div> ;
  };

  export default ListArr; 