import React, { Component } from 'react';

class AppClass extends Component {
  state = {
    count: 0
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  render () {
    return (
      <div>
        <button onClick={this.incrementCount}>I was clicked {this.state.count} times</button>
      </div>
    )
  }
}

export default AppClass;
