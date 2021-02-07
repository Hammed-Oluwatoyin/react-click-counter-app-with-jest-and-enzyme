import React , {Component} from 'react';

import './App.css';

class App extends Component {

  state = {
    counter: 0
  }

  handleDrecrement =() => {
     const number = this.state.counter == 0 ? 0 : this.state.counter - 1
    this.setState({counter : number})
  }

  render() {

    const message = this.state.counter == 0 ? <h1 data-test="message-display" style={{color:'red'}}> The counter cannot go below zero</h1> : null ;

   

    return (

      <div data-test="component-app">
    <h1 data-test="counter-display">The counter is currently {this.state.counter}</h1>
    <button 
    data-test="increment-button" 
    onClick = {() => {this.setState({counter: this.state.counter + 1})}}
    >
      Increment counter</button> 
      <button 
    data-test="decrement-button" 
    onClick = {() => {this.handleDrecrement()}}
    >
      Decrement counter</button> 
     {message}
      </div>
    )
  }
}

export default App;