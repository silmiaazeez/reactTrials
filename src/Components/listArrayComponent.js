import React from 'react';
//import PropTypes from "prop-types"; 
//import LabelComponent from './labelComponent';

/* ListArr.propTypes={
    name1:PropTypes.string.isRequired,
    name2:PropTypes.string.isRequired
  }
  
function ListArr(props){  
    //const arr=[props.name1,props.name2];  
    return  <div><LabelComponent   id={props.name1} value= {props.name2} /></div> ;
  };*/
  class ListArr extends React.Component{
    render(){
      const props=this.props;
      return  <div>props.name1 props.name2 </div>;
    }
  }

  export default ListArr; 