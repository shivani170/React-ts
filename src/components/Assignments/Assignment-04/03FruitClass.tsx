import React, { Component } from 'react'

export default class FruitClass extends Component {
  fruitBasket: { name: string }[] = [
    { name: "Apple" },
    { name: "Banana" },
    { name: "Orange" },
    { name: "Mango" }
  ]

  render() {
    return (
      <>
        <div>3- FruitClass</div>
        {/* Example const fruits = [{name:"Apple"}, {name:"Banana"}, {name:"Orange"}, {name: "Mango"}] */}
        <div>
          <div style={{ fontWeight: 'bold', margin: '20px', fontSize: '24px' }}>2- Display cube of the values</div>
          <ul >
            {this.fruitBasket.map((fruitName) => {
              return <div style={{ width: '200px', padding: '12px', border: '1px solid gray', fontWeight: 'bold', margin: '20px' }}>
                {fruitName.name}
              </div>
            })}
          </ul>
        </div>
      </>
    )
  }
}
