import React, {Component} from 'react';


class App extends Component{
  constructor(props) {
    super(props)
    this.state={
      name:"this is my name"
    }
  }

  render(){
    return (
      <div className="App">
      <h1>Hello</h1>
      <h1>This is working</h1>
      </div>
    );
  }

}


export default App;
