import React, { Component } from 'react'

class Counter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count: 0
      }
    }

    increment(){
        // this.setState({
        //     count: this.state.count + 1
        // }, () => {console.log('Callback value', this.state.count)})
        // this.state.count = this.state.count + 1 DO NOT modify state directly, only do so in constructor. Instead use setState

        this.setState((prevState) => ({
            count : prevState.count + 1
        }
        ))
        console.log(this.state.count)
    }

    incrementFive() {
        this.increment()
        this.increment()
        this.increment()
        this.increment()
        this.increment() //React groups calls into one go, updated val does not carry over between calls
    }

  render() {
    return (
      <div>
        <div>Count - {this.state.count}</div>
        <button onClick={()=> this.incrementFive()}>Increment</button>
        </div>
    )
  }
}

export default Counter