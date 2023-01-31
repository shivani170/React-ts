import React,{useImperativeHandle, useRef} from 'react'

type InputRef = {
  focus(): void
}

const InputRef: React.ForwardRefRenderFunction<InputRef,{}> =({},ref) => {
let input = useRef<HTMLInputElement>(null)

  useImperativeHandle(ref, ()=>{
    return {
      focus:() => input.current?.focus()
      // getUpperCaseValue: () =>  input.current?.value.toUpperCase
    }
  }, [])

  return (
    <div>
    <input type="text" ref={input} />
    <button >Click</button>
  </div>
  )
}

export default React.forwardRef(InputRef)