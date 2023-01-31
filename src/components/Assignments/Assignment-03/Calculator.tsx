import React, { useState } from 'react'
import Button from './Button'
// Satement:
// Create a react-typescript project.
// Create a simple calculator having an operation like add, sub, mult, div for
// any 2 values. For values use buttons (avoid input element)
// Create UI with core CSS. Try to add color effect on click, Make a interactive
// UI, use a Hooks like useState to manage result and data.
//  Use components for reusability .

const enum CalcultorType {
   ADD= 'Add',
   SUBTRACT= 'Subtract',
   MULTIPLY='Multiply',
   DIVISION='Division'
}

export const enum ButtonValue {
  BUTTON1= 1,
  BUTTON2=2,
  BUTTON3=3,
  BUTTON4=4,
  BUTTON5=5,
  BUTTON6=6,
  BUTTON7=7,
  BUTTON8=8,
  BUTTON9=9
}

function Calculator() {

  const [calculatedCount, setCalculatedCount] = useState<number>(0)

  const onClickOperations = (val1:number, val2:number, key: string ): void => {
    switch(key){
      case CalcultorType.ADD:
        setCalculatedCount(val1 + val2)
      break;
      case CalcultorType.SUBTRACT:
       setCalculatedCount(val1 - val2)
      break;
      case CalcultorType.MULTIPLY:
       setCalculatedCount(val1 * val2)
      break;
      case CalcultorType.DIVISION:
       setCalculatedCount(val1/val2)
      break;
    }
  }

  return (
    <div className="App">
    <div className="app-title">
        <h1> Calculator</h1>
      </div>
      <form className=''>
      <h1>{calculatedCount}</h1>
           <button style={{margin:'20px'}} >{ButtonValue.BUTTON1}</button>
          <button style={{margin:'20px'}}>{ButtonValue.BUTTON2}</button>
          <button style={{margin:'20px'}}>{ButtonValue.BUTTON3}</button>
          <button style={{margin:'20px'}}>{ButtonValue.BUTTON4}</button>
          <button style={{margin:'20px'}}>{ButtonValue.BUTTON5}</button>
          <button style={{margin:'20px'}}>{ButtonValue.BUTTON6}</button>
          <button style={{margin:'20px'}}>{ButtonValue.BUTTON7}</button>
          <button style={{margin:'20px'}}>{ButtonValue.BUTTON8}</button>
          <button style={{margin:'20px'}}>{ButtonValue.BUTTON9}</button>

        <div className='' style={{display: 'flex'}}>
        <Button  onClick={onClickOperations} label={CalcultorType.ADD}/>
        <Button  onClick={onClickOperations} label={CalcultorType.SUBTRACT}/>
        <Button  onClick={onClickOperations} label={CalcultorType.MULTIPLY}/>
        <Button  onClick={onClickOperations} label={CalcultorType.DIVISION}/>
        </div>

      </form>
      </div>
  )
}

export default Calculator