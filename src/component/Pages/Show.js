import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'


const Show = () => {

  const [stu, setStu] = useState ([])
  const [input, setInput] = useState ('')

  async function getData () {
      const response = await  axios.get('http://localhost:8000/student')
      console.log(response)

      const result = response.data
      console.log(result)

      setStu(result)
  }
  useEffect (()=>{
      getData()
  },[])

  const searchName = stu.filter((x)=>{
    return x.fname.toLowerCase().includes(input.toLowerCase())
  })

  return (
    <div>
         <h2 className=' bg-secondary w-50 mx-auto text-center mb-3 p-2 text-info'>********** Student Data **********</h2>
           <div className='text-dark'> Search Name : <input
              type='text'
              className='from-control mb-5 mt-3'
              placeholder='Search Student First Name'
              value={input}
              onChange={(e)=>setInput(e.target.value)}
            /></div>
           <table className='table'>
                <thead>
                      <tr>
                          <th>ID</th>
                          <th>Full Name</th>
                          <th>Last Name</th>
                          <th>Mother Name</th>
                          <th>Father Name</th>
                          <th>Address</th>
                          <th>Gender</th>
                          <th>State</th>
                          <th>City</th>
                          <th>DOB</th>
                          <th>Pincode</th>
                          <th>Course</th>
                          <th>Email ID</th>
                          <th>Action</th>
                      </tr>
                </thead>
                <tbody>
                      {
                        searchName.map((s,index)=>{
                            return (
                              <tr>
                                <td>{index + 1}</td>
                                <td>{s.fname}  </td>
                                <td>{s.lname}</td>
                                <td>{s.mothername}</td>
                                <td>{s.fathername}</td>
                                <td>{s.address}</td>
                                <td>{s.gender}</td>
                                <td>{s.state}</td>
                                <td>{s.city}</td>
                                <td>{s.dob}</td>
                                <td>{s.pincode}</td>
                                <td>{s.course}</td>
                                <td>{s.emailid}</td>
                                <td>
                                  <NavLink to={`/update/student/${s.id}`}> <button className='btn btn-warning me-2'>Edit</button> </NavLink>
                                  <NavLink to={`/delete/student/${s.id}`}> <button className='btn btn-danger'>Delete</button> </NavLink>
                                </td>
                              </tr>
                            )
                        })
                      }
                </tbody>
           </table>
           </div>
  )
}

export default Show