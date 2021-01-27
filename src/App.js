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
  })
}
}

handledelete=(id)=>{
const filteredItem= this.state.items.filter((item)=> {
  return item.id !== id;
})
this.setState({
  items:filteredItem
})
}

handleedit=(id)=>{
  const filteredItem= this.state.items.filter((item)=> {
    return item.id !== id;
  })
  const itemtoedit=this.state.items.find((item)=>{
    return item.id===id;
  })

  this.setState({
    items:filteredItem,
    id: id,
    item:itemtoedit.name,
    edititem: true
  })

}

clearlist=()=>{
  this.setState({
    items: []
  })
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
