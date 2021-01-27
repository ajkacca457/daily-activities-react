import React, {Component} from 'react';


 class Activity extends Component {

   handleit=()=>{
     console.log("working")
   }

   render(){
     return(
         <div className="maincontainer border border-info rounded text-center w-50 my-5 mx-auto bg-dark py-2 px-2">
         <h3 className="text-white">Add Activity</h3>
            <input type="text" name="activity" className="rounded w-100 pl-3" />
            <input type="submit" className="rounded w-75 btn-danger mt-3" onClick={this.handleit}/>
         </div>
     );
   }
}

export default Activity;
