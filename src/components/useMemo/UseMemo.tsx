import React, { useState } from 'react'
import Age from './Age'

  const UseMemo = () => {
    const [age, setAge] = useState(99)
    const handleClick = () => setAge(age + 1)
    const someValue = { value: "someValue" }


    const doSomething = () => {
      return someValue
    }

      return (
        <div>
          <Age age={age} handleClick={handleClick}/>
          {/* <Instructions doSomething={doSomething} /> */}
        </div>
      )
  }


  const Instructions = React.memo((props: {}) => {

    return (
      <div style={{ background: 'black', color: 'yellow', padding: "1rem" }}>
        <p>Follow the instructions above as closely as possible</p>
      </div>
    )
  })


export default UseMemo