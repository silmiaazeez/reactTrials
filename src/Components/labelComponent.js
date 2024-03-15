import React from 'react';
import './headerFooter.css';
import './labelClass.css';

/* function LabelComponentFn(props){
    return  <label className="label-Style"> ------  {props.id}  ------ </label>;
} */

/* LabelComponent.propTypes={
    id:PropTypes.string.isRequired
  } */

class LabelComponent extends React.Component{
    render(){
        const props=this.props;
        var l1=  " ";

        if(props.id==="ListLabel")
          l1=   <label className="label-Style1"> ------ {props.id}  ------ </label>;
        if(props.id==="ArrayLabel")
          l1=   <label className="label-Style2"> ------ {props.id}  ------ </label>;
        if(props.id==="React")
          l1=   <label className="label-Style4">{props.id}</label>;
        if(props.id==="LinkLabel" || props.onAction)
          l1=  <label className="label-Style3"> ------ {props.id}  ------ </label>;
        else
          l1=props.id;
        return l1;
        
    }
}

export default LabelComponent;