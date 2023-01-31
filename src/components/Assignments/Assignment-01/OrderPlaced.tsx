
// c. Calculate the percentage of each proportion in below format
// Expected Output for Question c:
// i. Array of Objects
// [ {
// id: 1,
// order: ‘proportion Here',
// order percentage: "percentage_here"
// }

import React from 'react'

function OrderPlaced() {
  const OrderData= {
    '0-500': 60,
    '500-1000': 50,
    '1000-1500': 60,
    '1500-2000': 20,
    'Above 2000': 60
  }

  return (
    <>
    <ul>
       <h1>1. Total number of orders placed: &nbsp;
        <li>{Object.values(OrderData).reduce((agg,curr) => agg+curr)}</li>
      </h1>

      <h1>2.Number of order proportion options: &nbsp;
        <li>{Object.values(OrderData).map((data) => data).join(', ')}</li>
      </h1>
      </ul>
    </>
  )
}

export default OrderPlaced