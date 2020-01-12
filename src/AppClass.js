import React, { Component } from 'react';

class AppClass extends Component {
  state = {
    count: 0,
    isOn: false,
    x: null,
    y: null,
  }

  componentDidMount () {
    document.title = `I was clicked ${this.state.count} times`
    window.addEventListener('mousemove', this.handleMousePosition)
  }

  componentDidUpdate () {
    document.title = `I was clicked ${this.state.count} times`
  }

  componentWillUnmount () {
    window.removeEventListener('mousemove', this.handleMousePosition)
  }

  handleMousePosition = event => {
    this.setState({
      x: event.pageX,
      y: event.pageY
    })
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
        <h2>Mouse Position</h2>
        <p>X position: {this.state.x}</p>
        <p>Y position: {this.state.y}</p>
      </>
    )
  }
}

export default AppClass;
