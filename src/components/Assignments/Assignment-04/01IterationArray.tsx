import React from 'react'
// WAP to display 1st 3 fruits on browser
// using list rendering example Const fruits = ["Apple", "Banana", "Orange", "Mango"]
function IterationArray() {

  const fruits: string[] = ["Apple", "Banana", "Orange", "Mango"]
  const numbers = [1, 2, 3, 4, 5]
  return (
    <>
      <div>
        <div style={{ fontWeight: 'bold', margin: '20px', fontSize: '24px' }}>1- List down first three fruits</div>
        <ul >
          <li style={{ fontWeight: 'bold', margin: '20px' }}>{fruits.slice(0, 3).toString().split('<br/>')}</li>
        </ul>
      </div>


      {/* WAP to take an array of numbers and on click display cube of the values on browser example
Const numbers = [1, 2, 3, 4, 5] */}
      <div>
        <div style={{ fontWeight: 'bold', margin: '20px', fontSize: '24px' }}>2- Display cube of the values</div>
        <ul >
          {numbers.map((num) => {
            return <div style={{ width: '200px', padding: '12px', border: '1px solid gray', fontWeight: 'bold', margin: '20px' }}>
              {num}
            </div>
          })}
        </ul>
      </div>

    </>
  )
}

export default IterationArray