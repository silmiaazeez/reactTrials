import React from 'react'

class simpleList extends React.Component  {
    render(){
      const props =this.props;  
      const listFinal =props.list.map((obj) => { 
      const finalList= <div key={obj.key}> {obj.name1} {obj.name2}
      <button key="btnKey" onClick={() =>
          { props.onSelect(props.name2 ? 'true' :'false')}
          //onSelect(obj)  
        }> Delete </button>  </div>
        return finalList;
      } );     
     // return <div>{listFinal}</div>

     const childCnt=React.Children.count(listFinal);     
     return  <div> {listFinal } <div>child-{childCnt} </div> </div> ; 
    }
}
export default simpleList;   