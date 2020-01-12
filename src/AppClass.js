import React, { Component } from 'react';

class AppClass extends Component {
  state = {
    count: 0,
    isOn: false,
  }

  componentDidMount () {
    document.title = `I was clicked ${this.state.count} times`
  }

  componentDidUpdate () {
    document.title = `I was clicked ${this.state.count} times`
  }

  incrementCount = () => {
    this.setState(prevState => ({
      count: prevState.count + 1
    }))
  }

  toggleSetOn = () => {
    this.setState(prevState => ({
      isOn: !prevState.isOn
    }))
  }

  render () {
    return (
      <>
        <h2>Counter</h2>
        <button onClick={this.incrementCount}>I was clicked {this.state.count} times</button>
        <h2>Toggle</h2>
        <div
          style={{
            width: 50,
            height: 50,
            backgroundColor: this.state.isOn ? 'yellow' : 'grey'
          }}
          onClick={this.toggleSetOn}
        />
      </>
    )
  }
}

export default AppClass;
