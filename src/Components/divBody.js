import React from 'react';
//import ListArr from './listArrayComponent';
/*   import Header from './header';
import Footer from './footer';   */
import PageTool from  './pageTool';
import SimpleList from './simpleList'

let selectList = [
   { key:"A1",  name1:"List A1" , name2:"true" },  
   { key:"B1",  name1:"List B1" , name2:"false" },
   { key:"C1" , name1:"List C1" , name2:"true" }
 ]; 
class List extends React.Component{
//----------Initialize state---------
   constructor(props){
      super(props);

      this.state=({
         data:selectList,
         activeState:"all"
      });
   }

       onClick=(item) =>{
            //const listValue=item; 
           // console.log(listValue); 
            var filterArr=this.state.data.filter((element) =>  element.name1 !== item.name1 ) 
            this.setState({
               data:filterArr
            })
        };        
       onSelect(event) {
        const selValue=event.target.value; 
     /*    var newArr=selectList.filter((item) => {
             if (selValue==="active"){                        
                return item.name2==="true" ;
             }
             if (selValue==="non active"){
                return item.name2==="false" ;
             }
             if (selValue==="all"){
                return true; ;
             }
             return false;
             });  */
           //  console.log(newArr)
            //----------Write state---------
            this.setState({
               data:selectList,
               activeState:selValue
            });
    };

    render(){  
         const{
            data,
            activeState
         }=this.state;
      
      var newArr=data.filter((item) => {
         if (activeState==="active"){                        
            return item.name2==="true" ;
         }
         if ( activeState==="non active"){
            return item.name2==="false" ;
         }
         if ( activeState==="all"){
            return true; ;
         }
         return false;
         }); 
         //------------bind this keyword in callback event to identify claa
        return   <PageTool  onLoad={this.onSelect.bind(this)} >
                  <SimpleList list={newArr}  onSelect={this.onClick} />
                 </PageTool>
          
    }
}
export default List;