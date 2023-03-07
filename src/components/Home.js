import React from 'react'
import Table from 'react-bootstrap/Table';
import Employee from './Employee';
import Button from 'react-bootstrap/Button';
import {FaUserPlus,FaTrash,FaUserEdit} from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
function Home() {
  const history=useNavigate();
  const handleDelete =(id)=>{
    alert('Deleted')
    let index=Employee.map(item=>item.id).indexOf(id);
    Employee.splice(index,1);
    console.log(Employee);
    history('/');
  }
  const handleEdit =(id,uname,age,desg,salary)=>{
    localStorage.setItem("id",id);
    localStorage.setItem("uname",uname);
    localStorage.setItem("age",age);
    localStorage.setItem("desg",desg);
    localStorage.setItem("salary",JSON.stringify(salary));
  }
  return (
    <div>
      <h1 className='text-primery text-center mt-5'>Employee Management</h1>
      <p className='text-center'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources</p>
      <Link to='/add'>
      <Button>ADD <FaUserPlus/> </Button>
      </Link>
      
      <h3 className='mt-5 text-center '>List Of Employee</h3>
      <Table  striped bordered hover>
       
    <thead>
      <tr>
        <th>Uname</th>
        <th>Age</th>
        <th>Desiganation</th>
        <th>Salary</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {
        Employee && Employee.length > 0 ?
        Employee.map((item)=>(
       <tr>
         <td>{item.uname}</td>
         <td>{item.age}</td>
         <td>{item.desg}</td>
         <td>{item.salary}</td>
         <td>
          <Link to='/edit'>
          <Button onClick={()=>handleEdit(item.id,item.uname,item.age,item.desg,item.salary)}><FaUserEdit/></Button>
          </Link>
    
         <Button onClick={()=>handleDelete(item.id)}className='btn btn-danger ms-3'><FaTrash/></Button>
         
        
         </td>
       </tr>
        )):'Erorr'
      }

    </tbody>
    </Table></div>
  )
}

export default Home