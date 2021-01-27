import React, {Component} from 'react';


 class Activityitem extends Component {
   render(){
    const {id,name,handledelete,handleedit}=this.props;
         return(
        <div>
          <ul className="listcontainer">
          <li className="li-item d-flex rounded justify-content-between align-items-center bg-warning px-2 py-1">
          <p>{name}</p>
          <div className="hbtns">
          <i className="fas fa-trash-alt del icon mr-2" onClick={()=>handledelete(id)}></i>
          <i className="fas fa-edit edit icon" onClick={()=>handleedit(id)}></i>
          </div>
          </li>
          </ul>
         </div>
     );
   }
}

export default Activityitem;
