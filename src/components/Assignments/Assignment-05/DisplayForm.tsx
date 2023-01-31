
import React from 'react'
import { useUserFormContext } from './context/UserFormContext'

function DisplayForm() {
  const {finalData, userData} = useUserFormContext()
  return (
<table className="table table-striped">
<thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">UseName</th>
      <th scope="col">Email</th>
      <th scope="col">Mobile</th>
      <th scope="col">Address</th>
      <th scope="col">dob</th>
      <th scope="col">Password</th>
      <th scope="col">Confirm Password</th>

    </tr>
  </thead>


<tr className="table-primary">
<th className="table-primary">1</th>
 <td>{userData.userName}</td>
<td className="table-primary">{userData.email}</td>
<td className="table-primary">{userData.mobile}</td>
<td className="table-primary">{userData.address}</td>
<td className="table-primary">{userData.dob}</td>
<td className="table-primary">{userData.password}</td>
<td className="table-primary">{userData.confirmPwd}</td>


</tr>

</table>

  )
}

export default DisplayForm