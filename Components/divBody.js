import React from 'react';
import ListArr from './listArrayComponent';

let homePage = [{item1: "List A1" ,  item2: "List A2"}, 
                {item1 :"List B1" ,item2 :"List B2" } ,
                { item1:"List C1" , item2 :"List C2"}
                ];

 
class divBodyComponent extends React.Component{
    render(){
        const {children}= this.props;
        const childCnt=React.Children.count(children);
        const childLabel= <ListArr name1="Children-"  name2= {childCnt}  /> 

        const bodyDiv= 
            <div>    
                 <div> 
                    <select>
                    {homePage.map((obj) => {    
                    const listDD= <option key={obj.item1} value=  {obj.item2}> {obj.item2}  </option>
                    return listDD;
                    } ) } 
                    </select>
                </div>          
                <div>
                  
                    <div>
                    {homePage.map((obj) => {
                    const str= <ListArr name1={obj.item1}  name2={obj.item2}  />;
                    return str;
                    })} </div>
                 
                </div>             
        
                <div>          
     
                    {children} {childLabel} 
                 </div>
            </div>

        return bodyDiv;     
    }
}
export default divBodyComponent;