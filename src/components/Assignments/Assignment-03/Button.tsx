import React from 'react'
import { ButtonValue } from './Calculator'

function Button({ onClick, label }:{onClick:(v1: number,v2: number, label: string)=> void, label : string}) {
  return (
    <div
      style={{width: '200px', background:'blue', color: 'white', fontSize: '20px', cursor: 'pointer', margin: '32px', borderRadius:'4px', padding: '12px'}}
      onClick={() => onClick(ButtonValue.BUTTON4,ButtonValue.BUTTON8, label)}
      className="Button"
      >
        {label}
      </div>
  )
}

export default Button
