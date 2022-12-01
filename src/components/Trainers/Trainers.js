import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Col, Container, Row, Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import Form from 'react-bootstrap/Form';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import './trainer.css'

// let setdisplay = ''
const Trainers = () => {
  let [datas, setDatas] = useState([]);
  let [data, setData] = useState({
    _id: '',
    name: '',
    email: '',
    mobileno: '',
    website: '',
    password: '',
    status: 'Active',
    tagline: '',
    gatewayid: ''
  });
  const [show, setShow] = useState(false);

  const handleClose = () => {
    setShow(false);
    load();
  };
  // const handleCloses = () => setShows(false);
  const handleShow = (e, d) => {
    if (d === {}) {
      setData({});
    } else {
      setData(d);
    }
    setShow(true);
  }

  function load() {
    axios.get('http://localhost:8081/admin/trainer').then((res) => {
      console.log(res.data);
      setDatas(res.data.data)
    })
  }
  useEffect(() => {
    load();
  }, []);
  const handleChange = (e) => {
    const newData = { ...data }
    newData[e.target.id] = e.target.value
    setData(newData)
  }

  function handleSubmit(e) {
    e.preventDefault();
    let body = {
      id: data._id,
      name: data.name,
      email: data.email,
      mobileno: data.mobileno,
      website: data.website,
      password: data.password,
      status: data.status,
      tagline: data.tagline,
      gatewayid: data.gatewayid
    };
    console.log(body);
    if (data._id === undefined) {
      axios.put('http://localhost:8081/admin/trainer', body).then((res) => {
        console.log(res.data.data);
        handleClose(true);
      })
    }
    else {
      axios.post('http://localhost:8081/admin/trainer', body).then((res) => {
        console.log(res.data.data);
        handleClose(true);
      })
    }
  }
  function deletetrainer(e, id) {
    e.preventDefault();
    var r = window.confirm(`Are you sure you want to delete!`);
    if (r) {
      axios.delete("http://localhost:8081/admin/trainer", { data: { id: id } }).then((res) => {
        load();
      })
      window.location.href = "/";
    }
  }
  // function deletetrainer(e, id){
  //   e.preventDefault();

  // }
  return (
    <div>
      <div className='container'>
        <div className='breadcrumbs'>
          <p className='bread'>
            <span >  Home </span>/
            <span >Trainers</span>
          </p>
        </div>
        <h1>Trainers</h1>
        <div className='container'>
          <div className="row">
            <div className="col-lg-6">

            </div>
            <div className="col-lg-6 text-end">
              <Button className='btn btn-primary' onClick={(e) => { handleShow(e, {}) }}>Add</Button>
            </div>
          </div>
        </div>
        <div className='row'>
          <div className='col-lg-12 mt-3'>
          <Table responsive="xl" className="table adminTable w-100" >
            <thead className='text-center'>
              <tr>
                <th className='heading'>Action</th>
                <th >Name</th>
                <th>Email</th>
                <th style={{ whiteSpace: "nowrap" }}>Mobile Number</th>
                <th>Website</th>
                <th>Password</th>
                <th>Status</th>
                <th>Tagline</th>
                <th style={{ whiteSpace: "nowrap" }}>Gateway ID</th>
              </tr>
            </thead>
            <tbody>
              {
                datas.map((d) => {
                  return (
                    <tr className='mx-5 text-center' key={d._id}>

                      <td style={{ width: '120px', whiteSpace: "nowrap" }}>
                        <button className="btn btn-primary " style={{ margin: '5px' }} onClick={(e) => { handleShow(e, d) }} > <i className='fa fa-pencil'></i> </button>
                        <button className="btn btn-danger " onClick={(e) => deletetrainer(e, d._id)} ><i className='fa fa-trash-o'></i></button>
                      </td>

                      <td style={{ width: '300px', whiteSpace: "nowrap" }}>{d.name}</td>
                      <td>{d.email}</td>
                      <td>{d.mobileno}</td>
                      <td><Link to={d.website}>{d.website}</Link></td>
                      <td>{d.password}</td>
                      <td>{d.status}</td>
                      <td>{d.tagline}</td>
                      <td>{d.gatewayid}</td>

                    </tr>
                  )
                })
              }
            </tbody>
          </Table>
          </div>
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
                id='_id'
                name='_id'
                onChange={(e) => handleChange(e)}
                autoFocus
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
                      onChange={(e) => handleChange(e)}
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
                      onChange={(e) => handleChange(e)}
                      value={data.email}
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Mobile Number</Form.Label>
                    <Form.Control
                      name='mobileno'
                      id='mobileno'
                      value={data.mobileno}
                      type="number"
                      placeholder=""
                      onChange={(e) => handleChange(e)}
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Website</Form.Label>
                    <Form.Control
                      value={data.website}
                      id='website'
                      type="text"
                      name='website'
                      onChange={(e) => handleChange(e)}
                      placeholder="name@example.com"
                      autoFocus
                    />
                  </Form.Group>
                </Col>
              </Row>
              <Row>
                <Col md={6}>
                  <Form.Group className="mb-3">
                    <Form.Label>Password</Form.Label>
                    <Form.Control
                      value={data.password}
                      type="text"
                      id='password'
                      name='password'
                      placeholder=""
                      onChange={(e) => handleChange(e)}
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col md={6}>
                  <fieldset>
                    <Form.Group className="mb-3">
                      <Form.Label htmlFor="disabledSelect">Status</Form.Label>
                      <Form.Select onChange={(e) => { handleChange(e) }} value={data.status} id="status">
                        <option value='Active'>Active</option>
                        <option value='Offline'>Offline</option>
                      </Form.Select>
                    </Form.Group>
                  </fieldset>
                </Col>
              </Row>
              <Row>
                <Col md={8}>
                  <Form.Group className="mb-3">
                    <Form.Label>Tagline </Form.Label>
                    <Form.Control
                      type="text"
                      value={data.tagline}
                      name='tagline'
                      id='tagline'
                      placeholder=""
                      onChange={(e) => handleChange(e)}
                      autoFocus
                    />
                  </Form.Group>
                </Col>
                <Col md={4}>
                  <Form.Group className="mb-3">
                    <Form.Label>Gateway ID</Form.Label>
                    <Form.Control
                      type="text"
                      value={data.gatewayid}
                      name='gatewayid'
                      id='gatewayid'
                      placeholder=""
                      onChange={(e) => handleChange(e)}
                      autoFocus
                    />
                  </Form.Group>
                </Col>
              </Row>
            </Form>
          </Container>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={(e) => handleSubmit(e)}>
            Save
          </Button>
        </Modal.Footer>
      </Modal>

    </div>
  )
}

export default Trainers
