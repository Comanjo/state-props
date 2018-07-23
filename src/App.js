import React, { Component } from 'react';
import Props from "./Props"

class App extends Component {

  state = {
    name: ''
  }

  render() {
    console.log(this.state.name);
    return (
      <div>

        <input type='text' placeholder='name'value={this.state.name} onChange={e => this.setState({name: e.target.value})}/>
        <Props name={this.state.name}/>
      </div>
    );
  }
}

export default App;
