import React from 'react'

function ThirdCheck({step}: {step: number}) {
  return (
    <>
    <section className="card col-8 col-lg-4 p-4 mt-3">
      <h1>User Registration </h1>
      <form action="#">
        <div className="mt-2">
          <label htmlFor="" className="form-label">
          Password
          </label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter User Name"
            name="password"

          />
        </div>
        <div className="mt-2">
          <label htmlFor="" className="form-label">
            Confirm Password
          </label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter Email"
            name="password"
          />
        </div>

        <button className="mt-2 btn btn-primary">
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

export default ThirdCheck