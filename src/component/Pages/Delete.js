import axios from "axios"
import { useEffect, useState } from "react"
import { NavLink, useNavigate, useParams } from "react-router-dom"

const Delete =()=> {
    const [student, setStudent] = useState({})
    const {studentID} = useParams()
    const navigate = useNavigate ()

    async function getData() {
       const response = await axios.get(`http://localhost:8000/student/${studentID}`)
       console.log(response)
       const result = response.data
       console.log(result)
       setStudent(result)
    }

     useEffect(()=>{
        getData()
     },[])

     const deleteData =()=>{
           axios.delete(`http://localhost:8000/student/${studentID}`)
           alert(`Delete Data !!!!!`)
           navigate('/show')
     }

      return(
         <div className='bg-warning w-50 mx-auto text-center rounded-3 p-4 mt-5'>
           <h1>Delete Student Data</h1>
           <h1>Student ID : {student.id}</h1>
           <h1>Full Name : {student.fname} {student.lname}</h1>
           <div className='mt-4'>
           <button className='btn btn-danger me-2' onClick={deleteData}>YES</button>
           <NavLink to={'/show'}><button className='btn btn-success'>NO</button></NavLink>
           </div>
        </div>
      )
}
export default Delete