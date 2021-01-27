import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Activitylist from "./components/activitylist";
import Activity from "./components/activity";
import { v4 as uuidv4 } from 'uuid';


class App extends Component{

constructor(props){
super(props);
         this.state = {
           items:[{id:1, name:"my first activity"},
                  {id:2, name:"my second activity"}
                ],
            id: uuidv4(),
            item:"",
            edititem: false,
         };
      }

handlechange=()=>{
  console.log("handle change")
}
handlesubmit=(e)=>{
  e.preventDefault();
  console.log("handle submit")
}

handledelete=(e,id)=>{
  if(e.target.classList.contains("del")){
  console.log("handle delete")
}}

handleedit=(e,id)=>{
  if(e.target.classList.contains("edit")){
  console.log("handle edit")
}
}
clearlist=()=>{
  console.log("clear list")
}

  render(){

    return (
      <div className="App">
      <Navbar></Navbar>

      <Activity
      handlechange={this.handlechange}
      handlesubmit={this.handlesubmit}
      >
      </Activity>

      <Activitylist
      handledelete={this.handledelete}
      handleedit={this.handleedit}
      clearlist={this.clearlist}
      >
      </Activitylist>
      </div>
    );
  }

}


export default App;
