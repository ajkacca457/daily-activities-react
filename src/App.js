import React, {Component} from 'react';
import Navbar from "./components/navbar";
import Activitylist from "./components/activitylist";
import Activity from "./components/activity"

class App extends Component{
  render(){
    return (
      <div className="App">
      <Navbar></Navbar>
      <Activity></Activity>
      <Activitylist></Activitylist>
      </div>
    );
  }

}


export default App;
