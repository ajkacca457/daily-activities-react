import React, {Component} from 'react';


 class Activity extends Component {

   render(){
     const {handlechange,handlesubmit}=this.props;
     return(
         <div className="maincontainer border border-info rounded text-center w-50 my-5 mx-auto bg-dark py-2 px-2">
         <h3 className="text-white">Add Activity</h3>
         <form onSubmit={handlesubmit}>
            <input type="text" name="activity" className="rounded w-100 pl-3" onChange={handlechange}  />
            <input type="submit" className="rounded w-75 btn-danger mt-3"/>
        </form>
         </div>
     );
   }
}

export default Activity;
