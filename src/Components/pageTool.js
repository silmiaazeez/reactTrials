import React from 'react';
/* import Header from './header';
import Footer from './footer'; 
import BodyComponent from  './divBody';
import ListArr from './listArrayComponent';  */

let showList = [
     { 
        name:"name0",
        value:"all"
     },
    { 
         name:"name1",
         value:"active"
    },
    { 
         name:"name2",
         value:"non active"
     },
    { 
         name:"name3",
         value:"None"
    }     
];  

 
class pageToolComponent extends React.Component {
  
    render(){  
        const {
            children,
            onLoad
        }= this.props;          
     
                       
                 // const onlyChild=React.Children.only(children);
                 /*  const listDDCnt=React.Children.count(children); 
                 console.log( {listDDCnt });              
                console.log("showList-" ,{showList});    
                const childCnt=React.Children.count(children);  */  
                                        
              return <div>
                    <div> <select key="select" onChange={onLoad} name="status"> 
                    {showList.map((obj) => { 
                        return  <option key={obj.value} value={obj.value} > {obj.value}</option>              
                    } ) }                                                     
                    </select> </div>
                    {children}
                   {/*  <div>child-{childCnt} </div> */} 
                    </div>          
    }
}

export default pageToolComponent;