import React, {Component} from 'react';


 class Activitylist extends Component {
   render(){
     return(
         <div className="maincontainer border border-info rounded text-center w-50 my-1 mx-auto bg-light py-2 px-2">
          <ul className="listcontainer">
          <li className="li-item d-flex rounded justify-content-between align-items-center bg-warning px-2 py-1">
          <p>Item 1</p>
          <div className="hbtns">
          <i className="fas fa-trash-alt mr-2 "></i>
          <i className="fas fa-edit"></i>
          </div>
          </li>
          </ul>
          <div className="btncont">
            <button className="btn btn-danger w-75"> Clear List</button>
          </div>

         </div>
     );
   }
}

export default Activitylist;
