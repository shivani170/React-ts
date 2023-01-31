import React, { useEffect, useState } from 'react'

function CounterFC() {
let [ count, setcount] = useState<number>(0)

useEffect(() => {
   console.log('render once')
},[])

useEffect(() => {
  console.log('every count render')
},[count])

  const onClickIncrement = () =>{
    setcount(count = count+ 1)

 }
 const onClickDec = () =>{
  setcount(count =count- 1)
}

  return (
    <div>
    Hello Everyone Lets start the count down!!<br/><br/>
    <div className='btn'> {count} <br/></div>
    <button className='btn btn-inc' style={{width: '200px', background:'blue', color: 'white', fontSize: '20px', cursor: 'pointer', margin: '32px', borderRadius:'4px', padding: '12px'}}
    onClick={onClickIncrement}>
       <i className="fa fa-plus-circle" aria-hidden="true"></i>
    </button>
    <button style={{width: '200px', background:'blue', color: 'white', fontSize: '20px', cursor: 'pointer', margin: '32px', borderRadius:'4px', padding: '12px'}}
    onClick={onClickDec}>
         <i className="fa fa-minus-circle" aria-hidden="true"></i>
    </button></div>

  )
}

export default CounterFC