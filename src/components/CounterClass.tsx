import React, { Component } from 'react'
import '../index.css'
interface CounterClassState{
  count: number
}

interface CounterClassProps{
  start?: number
  squareCount: number
  onClickIncrement?:()=> void
  count: number
}

export class CounterClass extends Component< CounterClassProps, CounterClassState> {
  state= {
     count: 0
  }

  onClickIncrement = () =>{
     this.setState((prevState) =>({
        count : prevState.count+1
     })
     )
  }
  onClickDec = () =>{
    this.setState((prevState) =>({
       count : prevState.count-1
    })
    )
 }
  render() {
    return (
      <center>
      <div className="App">
      <header className={this.state.count%2 === 0 ? 'text-green' : 'text-red'}>
          Hello Everyone Lets start the count down!!<br/><br/>
          <div className='btn'> {this.state.count} <br/></div>
          <button className='btn btn-inc' style={{width: '200px', background:'blue', color: 'white', fontSize: '20px', cursor: 'pointer', margin: '32px', borderRadius:'4px', padding: '12px'}}
          onClick={this.onClickIncrement}>
             <i className="fa fa-plus-circle" aria-hidden="true"></i>
          </button>
          <button style={{width: '200px', background:'blue', color: 'white', fontSize: '20px', cursor: 'pointer', margin: '32px', borderRadius:'4px', padding: '12px'}}
          onClick={this.onClickDec}>
               <i className="fa fa-minus-circle" aria-hidden="true"></i>
          </button>
      </header>
    </div>
    </center>
    )
  }
}

export default CounterClass