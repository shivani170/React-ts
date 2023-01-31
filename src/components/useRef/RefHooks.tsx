import React, { useRef } from 'react'
import InputRef from './InputRef'

function RefHooks() {
  let myInput = useRef<HTMLInputElement>(null)

    let getInputData= ()   => {
      // if(myInput.current){
      //   myInput.current.style.color = "red"
      // }

      // let myInput = useRef<InputRef>(null)
    }

  return (
    <div>
      <input type="text" ref={myInput}/>
      <button onClick={getInputData}>Click</button>
      <InputRef  ref={myInput}/>
    </div>
  )
}

export default RefHooks