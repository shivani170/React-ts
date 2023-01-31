import React from 'react'

function Person() {
  const persons = [
    { id: 1, name: 'Ansh', age: 22, skill: 'React' },
    { Id: 2, name: 'Jay', age: 25, skill: 'Java' },
    { id: 3, name: 'Sara', age: 23, skill: 'Angular' }
  ]

  return (
    <div>
      <div style={{ fontWeight: 'bold', margin: '20px', fontSize: '24px' }}>5- Person Details</div>
      <ul >
        {persons.map((person) => {
          return <div style={{ padding: '12px', border: '1px solid gray', fontWeight: 'bold', margin: '20px', fontSize: '24px' }}>
            {`I am ${person.name}, I am ${person.age} years old, I know ${person.skill}`}
          </div>
        })}
      </ul>
    </div>
  )
}

export default Person
