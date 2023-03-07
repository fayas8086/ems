import React,{useState,useEffect} from 'react'
import Employee from './Employee';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import uuid from 'react-uuid';
import { useNavigate } from 'react-router-dom';

function Add() {
  const [id,setId]=useState('')
  const [uname,setUname]=useState('')
  const [age,setAge]=useState('')
  const [desg,setDesg]=useState('')
  const [salary,setSalary]=useState(0)

  let history=useNavigate()
  const handleAdd=(e)=>{
    e.preventDefault()
    let ids=uuid()
    console.log(ids);
    let uniqueId=ids.slice(0,8)
    console.log(uniqueId);
    Employee.push({
      id:uniqueId,
      uname:uname,
      age:age,
      desg:desg,
      salary:salary
    })
    
    history('/')
  }
  return (
    <>
    <h1 className='text-primery text-center mt-5'> Add Employee</h1>
      <p className='text-center'>An employee management system or EMS is a tool that helps improve employee satisfaction and productivity to help a company achieve their overall goals. These tools help monitor, assess and control employees' working hours and efficiently utilise human resources</p>
      <Row>
        <Col className='ps-5'>
        <img  width={'450px'} height={'450px'} src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9nr9pGY3TnYIKa2ypx75EB9lPL70WJAJpvw&usqp=CAU'/>
        </Col>
        <Col className='pe-5'>
        <Form className='border border-3 p-4'>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Username</Form.Label>
        <Form.Control type="text"
         onChange={(e)=>setUname(e.target.value)}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Age</Form.Label>
        <Form.Control type="text" 
        onChange={(e)=>setAge(e.target.value)}
        />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Desiganation</Form.Label>
        <Form.Control type="text"
         onChange={(e)=>setDesg(e.target.value)}
         />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formName">
        <Form.Label>Salary</Form.Label>
        <Form.Control type="text"
        onChange={(e)=>setSalary(e.target.value)}
         />
      </Form.Group>
      <Button 
      onClick={(e)=>handleAdd(e)}
       variant="primary" type="submit">
        ADD
      </Button>
    </Form>

        </Col>
      </Row>
      </>
  )
}

export default Add