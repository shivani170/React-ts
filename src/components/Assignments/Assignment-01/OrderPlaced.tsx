import React from 'react'

function OrderPlaced() {
  const OrderData = {
    '0-500': 60,
    '500-1000': 50,
    '1000-1500': 60,
    '1500-2000': 20,
    'Above 2000': 60
  }

  const mobiledata = [
    {
      id: 1,
      order: 20,
    },
    {
      id: 2,
      order: 50,
    },
    {
      id: 3,
      order: 50,
    },
    {
      id: 4,
      order: 20,
    },
  ]

  const totalOrder = Object.values(OrderData).reduce((agg, curr) => agg + curr)

  return (
    <>
      <ul>
        <h1 style={{ marginBottom: '20px' }}>1. Total number of orders placed: &nbsp;
          <li style={{ color: 'red' }}>{totalOrder}</li>
        </h1>

        <h1 style={{ marginBottom: '20px' }}>2.Number of order proportion options: &nbsp;
          <li style={{ color: 'red' }}>{Object.values(OrderData).map((data) => data).join(', ')}</li>
        </h1>

        <h1 style={{ marginBottom: '20px' }}>3.The percentage of each proportion: &nbsp;
          <li style={{ color: 'red' }}>{mobiledata.map((data) => {
            return <>
               id: {data.id},<br/>
               order: {data.order}<br/>
               orderPercentage: {data.order*100/totalOrder},<br/><br/>
            </>
          }
          )}</li>
        </h1>
      </ul>
    </>
  )
}

export default OrderPlaced