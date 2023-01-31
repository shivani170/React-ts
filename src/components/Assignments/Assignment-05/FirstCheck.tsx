import React, { ChangeEvent, FormEvent, useContext, useEffect, useState } from 'react'
import { userFormType, useUserFormContext } from './context/UserFormContext';

type User = {
  name: string;
  email: string;
  gender: string;
};
const FirstCheck = ({ step, setStepLabel }: { step: number, setStepLabel: (step: number) => void }) => {

  useEffect(() => {
    setStepLabel(step)
  }, [])

  let userFormSubmit = (event: FormEvent) => {
    event.preventDefault();
  };

  const { userData, inputOnChange, index } = useUserFormContext()

  return (
    <>
      {console.log(userData)}
      <section className="card col-8 col-lg-4 p-4 mt-3">
        <h1>User Registration </h1>


        <form action="#">
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              UserName
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter User Name"
              value={userData.userName}
              name="userName"
              onChange={inputOnChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Email
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter Email"
              value={userData.email}
              name="email"
              onChange={inputOnChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Mobile
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Mobile Number"
              value={userData.mobile}
              name="mobile"
              onChange={inputOnChange}
            />
          </div>
          <div className="mt-2">
            <label htmlFor="" className="form-label">
              Address
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter Address"
              name="address"
              value={userData.address}
              onChange={inputOnChange}

            />
          </div>

          <button className="mt-2 btn btn-primary" onClick={() => setStepLabel(2)}>
            <span className="fa fa-floppy-o me-2 "></span>
            Next
          </button>
        </form>
      </section>
    </>
  )
}


export default FirstCheck

