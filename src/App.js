import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Activitylist from "./components/activitylist";
import Activity from "./components/activity";
import { v4 as uuidv4 } from 'uuid';


class App extends Component{

constructor(props){
super(props);
         this.state = {
           items:[{id:1, name:"Default activity for day."},
                ],
            id: uuidv4(),
            item:"",
            edititem: false,
         };
      }

handlechange=(e)=>{
  const value= e.target.value;
  this.setState({
    item:value
  })
}


handlesubmit=(e)=>{
  e.preventDefault();
  const newItem={
    id:this.state.id,
    name:this.state.item
  }

const newItems=[...this.state.items,newItem];

if(this.state.item===""){
  alert("please enter a task")
} else {
  this.setState({
     items:newItems,
     id: uuidv4(),
     item:"",
     edititem: false,
  }, ()=> console.log(this.state))
}
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
      item={this.state.item}
      handlechange={this.handlechange}
      handlesubmit={this.handlesubmit}
      >
      </Activity>

      <Activitylist
      items={this.state.items}
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
