
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';

const Admin = () => {
    let [datas, setDatas] = useState([]);
  let [data, setData] = useState({
    _id:'',
    name:'',
    email:'',
    mobileno:'',
    website:'',
    password:'',
    status:'',
    tagline:'',
    gatewayid:''
  });
  const [show, setShow] = useState(false);
 
  const handleClose = () => {
    setShow(false);
    load();
  };
  const handleShow = (e, d) => {
    if(d==={}){
      setData({});
    }else{
      setData(d);
    }
    setShow(true);
  }
  function load(){
    axios.get('http://localhost:8081/admin/admin').then((res)=>{
      console.log(res.data);
      setDatas(res.data.data)
    })
  }
  useEffect(()=>{
    load();
  },[]);
  const handleChange = (e) =>{
    const newData = {...data}
    newData[e.target.id] = e.target.value
    setData(newData)
  }
  function handleSubmit(e){
    e.preventDefault();
    let body = {
      id:data._id,
      name:data.name,
      email:data.email,
      password:data.password,
      
    };
    console.log(body);
    if(data._id === undefined){
    axios.put('http://localhost:8081/admin/admin',body).then((res)=>{
      console.log(res.data.data);
      handleClose(true);
    })
  }
  else{
    axios.post('http://localhost:8081/admin/admin',body).then((res)=>{
      console.log(res.data.data);
      handleClose(true);
    })
  }
  }
  function deletetrainer(e, id){
    e.preventDefault();
    axios.delete("http://localhost:8081/admin/admin", {data:{id:id}}).then((res)=>{
      load();
    })
  }
  return (
    <div>
     <div className='container'>
      <div className='breadcrumbs'>
        <p className='bread'>
          <span >  Home </span>/
          <span >Admin</span> 
          </p>
      </div>
      <h1>Admin</h1>
      <div className='container'>
      <div className="row">
        <div className="col-lg-6">

        </div>
        <div className="col-lg-6 text-end">
      <Button  className='btn btn-primary' onClick={(e)=>{handleShow(e, {})}}>Add</Button>
        </div>
        </div>  
      </div>
      <div className='container mt-3'>
      <Table responsive class="table stripped table-bordered  bordered">
        <thead className='text-center'>
          <tr >
          <th>Action</th>
          <th>Name</th>
          <th>Email</th>
          <th>Password</th>         
          </tr>
        </thead>
        <tbody>
        {
          datas.map((d)=>{
            return(
              <tr className='mx-5 text-center' key={ d._id }>
             
                <td  style={{width:'200px'}}>
                  <button className="btn btn-primary " style={{margin:'5px'}} onClick={(e)=>{handleShow(e, d)}} >Edit </button>
                  <button className="btn btn-danger"  onClick={(e)=>deletetrainer(e,d._id)} >Delete</button>
                </td>
               
                <td>{d.name}</td>             
                <td>{d.email}</td>
                <td>{d.password}</td>
              </tr>
            )
          })
        }
        </tbody>
      </Table>
      </div>
    </div>
  
      
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Admin</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Form>
          <Form.Control
                type="hidden"
                value={data._id}
                placeholder=""
                id='_id'
                name='_id'
                onChange={(e)=>handleChange(e) }
              />
            <Row>
              <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                id='name'
                name='name'
                value={data.name}
                onChange={(e)=>handleChange(e) }
                placeholder=""
                autoFocus
              />
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                id='email'
                type="email"
                name='email'
                onChange={(e)=>handleChange(e) }
                value={data.email}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
            
            </Col>
            <Col md={6}>
          
            </Col>
            </Row>
            <Form.Group className="mb-3">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={data.password}
                type="text"
                id='password'
                name='password'
                placeholder=""
                onChange={(e)=>handleChange(e) }
                autoFocus
              />
            </Form.Group>
                      
          </Form>
        </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e)=>handleSubmit(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>      

    </div>
  )
}

export default Admin
