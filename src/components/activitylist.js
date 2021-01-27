import React, {Component} from 'react';
import Activityitem from "./activityitem"

 class Activitylist extends Component {
   render(){
  const {items,handledelete,handleedit,clearlist}=this.props;

     return(
         <div className="maincontainer border border-info rounded text-center w-50 my-1 mx-auto bg-light py-2 px-2">

          {items.map((item)=>{
            return(
                <Activityitem
                  key={item.id}
                  id={item.id}
                  name={item.name}
                  handledelete={handledelete}
                  handleedit={handleedit}
                  ></Activityitem>
            )
          })}
             <div className="btncont">
               <button className="btn btn-danger w-75" onClick={clearlist}> Clear List</button>
             </div>
         </div>
     );
   }
}

export default Activitylist;
