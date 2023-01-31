import React, { Component } from 'react'
import CarsStore from './04CarsStore'

export default class CarsClass extends Component {
  carsStore= ["Hyundai", "Tata", "BMW", "Ford", "Tata"]

  render() {
    return (
      <div>{
      <CarsStore carsStore={this.carsStore}/>}</div>
    )
  }
}
