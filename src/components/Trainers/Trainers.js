import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import Model from './Model';
// let setdisplay = ''
const Trainers = () => {
  let [datas, setDatas] = useState([]);
  let [data, setData] = useState({
    name:'',
    email:'',
    website:'',
    password:'',
    status:'active',
    tagline:'',
    gatewayid:''
  });
  const [show, setShow] = useState(false);
  // const [shows, setShows] = useState(false);
  // const [item, setItem] = useState


  const [edit, setEdit] = useState();
// if(setdisplay === 'add'){
//   const handleDisplay= (e)=>{
//     setEdit('Add');
//   }
// }
// else{
//   const handleDisplay=(e)=>{
//   setEdit('Edit');
// }
// }

 
  const handleClose = () => setShow(false);
  const handleCloses = () => setShows(false);
  const handleShow = (e, d) => {
    if(d==={}
    ){
      axios.put("http://localhost:8081/admin/trainer").then()
    }
    setData(d);
    setShow(true);
  }
  const handleShows = () => {
    setData({});
    setShows(true);
  }

  function load(){
    axios.get('http://localhost:8081/admin/trainer').then((res)=>{
      console.log(res.data);
      setDatas(res.data.data)
    })
  }
  useEffect(()=>{
    load();
  },[])
  function deletetrainer(e, id){
    e.preventDefault();
    axios.post("https://react-ecomm-mern.herokuapp.com/productcategory/delete", {data:{id:id}}).then((res)=>{
      load();
    })
  }
  return (
    <div>
     <div className='container'>
      <div className='breadcrumbs'>
        <p className='bread'>
          <NavLink to='/'><span Link to='/'>  Admin </span></NavLink>/
          <span >Trainers</span> 
          </p>
      </div>
      <h1>Trainers</h1>
      <div className='text-right'>
      <Button  className='btn btn-primary' onClick={(e)=>{handleShow(e, {})}}>Add</Button>
      </div>
      <div className='container mt-3'>
      <Table responsive class="table table-bordered bordered table-stripped">
        <thead>
          <tr>
          <th>Action</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>Website</th>
          <th>Password</th>
         
          <th>Status</th>
          <th>Tagline</th>
          <th>Gateway ID</th>
          </tr>
        </thead>
        <tbody>
        {
          datas.map((d)=>{
            return(
              <>
             
              <tr className='mx-5'>
             
                <td className='px-3 mx-3'>
                  <button className="btn btn-primary " onClick={(e)=>{handleShow(e, d)}} >Edit </button>
                  <button className="btn btn-danger" onClick={(e)=>deletetrainer(e,d._id)} >Delete</button>
                </td>
               
                <td>{d.name}</td>             
                <td>{d.email}</td>
                <td>{d.mobileno}</td>
                <td>{d.web_name}</td>
                <td>{d.password}</td>
                <td></td>
                <td>{d.tag_line}</td>
                <td>{d.gateway_id}</td>
                
              </tr>
              </>
            )
          })
        }
        </tbody>
      </Table>
      </div>
    </div>
  
      
     <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Trainer</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Container>
          <Form>
          <Form.Control
                type="hidden"
                value={data._id}
                placeholder=""
                autoFocus
              />
            <Row>
              <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Name</Form.Label>
              <Form.Control
                type="text"
                value={data.name}
                placeholder=""
                autoFocus
              />
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Email address</Form.Label>
              <Form.Control
                type="email"
                value={data.email}
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            </Col>
            </Row>
            <Row>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Mobile Number</Form.Label>
              <Form.Control
              value={data.mobileno}
                type="number"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            </Col>
            <Col md={6}>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Website</Form.Label>
              <Form.Control
                value={data.wesbsite}
                type="text"
                placeholder="name@example.com"
                autoFocus
              />
            </Form.Group>
            </Col>
            </Row>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Password</Form.Label>
              <Form.Control
                value={data.password}
                type="text"
                placeholder=""
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Status</Form.Label>
              <Form.Control
                type="text"
                value={data.status}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Tagline </Form.Label>
              <Form.Control
                type="text"
                value={data.tag_line}
                placeholder=""
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
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>      

    </div>
  )
}

export default Trainers
