import React from 'react'

function Pets() {
  const user = [
    { Name: 'chris', pets: [{ name: 'bella', type: 'dog' }, { name: 'cocoa', type: 'dog' }] },
    {
      Name: 'nick',
      pets: [{ name: 'hilo', type: 'cat' }, { name: 'polly', type: 'cat' }]
    }];

  return (
    <div>
      <div style={{ fontWeight: 'bold', margin: '20px', fontSize: '24px' }}>6- User Details</div>
      <ul >
        {user.map((person) => {
          return <div style={{ padding: '12px', border: '1px solid gray', fontWeight: 'bold', margin: '20px', fontSize: '24px' }}>
            <div className='' style={{ fontSize: '42px' }}>{`${person.Name}`} <br />
              {person.pets.map((pet) => {
                return <div style={{ fontSize: '24px' }}>{`dog named ${pet.name}`} <br /> </div>
              })}</div>
          </div>

        })}
      </ul>
    </div>
  )
}

export default Pets