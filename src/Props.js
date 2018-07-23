import React, { Component } from 'react';





class Props extends Component {


  render() {
    console.log(this);
    console.log(this.props);
    return (
      <div >
          <h1>{this.props.name}</h1>
      </div>
    );
  }
}

export default Props;
