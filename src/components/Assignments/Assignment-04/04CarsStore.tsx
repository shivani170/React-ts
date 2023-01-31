import React, { Component } from 'react'

export interface CarsStoreProps {
  carsStore: string[]
}
export default class CarsStore extends Component<CarsStoreProps> {

  render() {
    return (
      <>
        <div>
          <div style={{ fontWeight: 'bold', margin: '20px', fontSize: '24px' }}>4- CarsStore</div>
          <ul >
            {this.props.carsStore.map((num) => {
              return <div style={{ width: '200px', padding: '12px', border: '1px solid gray', fontWeight: 'bold', margin: '20px' }}>
                {num}
              </div>
            })}
          </ul>
        </div>
      </>
    )
  }
}
