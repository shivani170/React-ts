import React, { useEffect } from 'react'
import { useUserFormContext } from './context/UserFormContext'

function SecondCheck({step,setStepLabel}: {step: number,setStepLabel:(step:number)=>void}) {
  const {userData, inputOnChange, setUserData, index} = useUserFormContext()

  useEffect(()=>{
    setStepLabel(step)
  },[])

  return (
    <>
    <section className="card col-8 col-lg-4 p-4 mt-3">
      <h1>User Registration </h1>
      <form action="#">

        <div className="mt-2">
          <label htmlFor="" className="form-label">
          Date Of Birth
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Date Of Birth"
            name="dob"
            value={userData.dob}
            onChange={inputOnChange}
          />
        </div>
        <div className="mt-2">
            <label htmlFor="" className="form-label">
              Gender
            </label>
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Male"
                  name="gender"
                  onChange={inputOnChange}
                />
                <label className="form-check-label" htmlFor="">
                  Male
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  value="Female"
                  name="gender"
                  onChange={inputOnChange}
                />
                <label className="form-check-label" htmlFor="">
                  Female
                </label>
              </div>
            </div>
          </div>
          <div className="mt-2">
          <label htmlFor="" className="form-label">
          Password
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Date Of Birth"
            name="password"
            value={userData.password}
            onChange={inputOnChange}
          />
        </div>
        <div className="mt-2">
          <label htmlFor="" className="form-label">
          Confirm Password
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter Date Of Birth"
            name="confirmPwd"
            value={userData.confirmPwd}
            onChange={inputOnChange}
          />
        </div>
          <button className="mt-2 btn btn-primary" onClick={()=> setStepLabel(1)}>
          <span className="fa fa-floppy-o me-2 "></span>
          Back
        </button>
        <button className="mt-2 btn btn-outline-success ms-2">
            <span className="fa fa-floppy-o me-2 "></span>
            Submit
          </button>
      </form>
    </section>
  </>
  )
}

export default SecondCheck