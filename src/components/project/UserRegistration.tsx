import React, { ChangeEvent, ChangeEventHandler, FormEvent, useState } from 'react'

function UserRegistration() {

  type User = {
    name : string
    email: string
    gender: string
  }

  const [users, setUsers] = useState<User>({
    name: '',
    email: '',
    gender: ''
  })

  let userFormSubmit = (e: FormEvent) => {
   e.preventDefault()
  }

  const inputOnChange = (e: ChangeEvent<HTMLInputElement> ) => {
    let {name,value} = e.target
     console.log(e.target.name)
     console.log(e.target.value)
     let _users = {
       ...users,
         [name] : value
      }
    //  _users['name'] = value

     setUsers(_users)

  }
  return (
    <div>
      <section className='card col-8 col-lg-4 p-4'>
        <h2> UserRegistration</h2>
      <form action="#" onSubmit={userFormSubmit}>
    <div className='mt-2'>
      <label htmlFor='' className='form-label'>Username</label>
      <input
      type="text"
      className='form-control'
      value={users.name}
      name="name"
      onChange={inputOnChange}
       />
        <label htmlFor='' className='form-label'>Email</label>
         <input
      type="text"
      className='form-control'
      value={users.email}
      name="email"
      onChange={inputOnChange}
       />
      {/* <div>
      <label htmlFor='' className='form-label'>Gender</label>
      <div className=''>
         <input
      type="radio"
      className='form-control'
      value={users.email}
      name="gender"
      onChange={inputOnChange}
       >
      <label htmlFor='' className='form-label'>Male</label>
       </input>
         <input
      type="radio"
      className='form-control'
      value={users.email}
      name="gender"
      onChange={inputOnChange}
       >
      <label htmlFor='' className='form-label'>Female</label>

       </input>
</div>
       </div> */}
      <div>
      <button className="mt-2 btn btn-outline-success">
        Submit
      </button>
      </div>
    </div>
      </form>
      </section>
      </div>

  )
}

export default UserRegistration