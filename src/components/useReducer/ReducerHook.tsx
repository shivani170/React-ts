import React, { useReducer, useState } from 'react'

type initValueType = {
  count: number
  square: number
}
enum  ActionType{
INC= 'INC',
DEC='DEC',
SQR='SQR'
}

type Action={
  type: ActionType
  payload: number
}

let initValue = {
  count:0,
  square:2
}

function reducer (state: initValueType,action: Action){
   switch(action.type){
    case ActionType.INC :
      return {...state, count: ++state.count}
      case ActionType.DEC :
        return {...state, count: --state.count}
        case ActionType.SQR :
          return {...state,square: state.square*action.payload }
      default:
        return {...state}
   }
}
function ReducerHook() {
  const [state, setState] = useReducer(reducer,initValue)

  return (

    <div>
      <h1>{state.count}</h1>
      <button onClick={() => setState({type:ActionType.INC, payload: 1})}>INC</button>
      <button onClick={() => setState({type:ActionType.INC, payload: 1})}>DEC</button>
<h1>
<button onClick={() => setState({type:ActionType.SQR, payload: state.square})}>{state.square}</button>
</h1>
      </div>
  )
}

export default ReducerHook