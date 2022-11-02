import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Table } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'

const Trainers = () => {
  let [datas, setDatas] = useState([]);

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
      <Link to="/administrator/category" className='btn btn-primary'>Add</Link>
      </div>
      <div className='container'>
      <Table responsive class="table table-bordered border-primary">

        <thead>
          <th>Action</th>
          <th>Name</th>
          <th>Email</th>
          <th>Mobile Number</th>
          <th>Website</th>
          <th>Password</th>
          <th>Status</th>
          <th>Tagline</th>
        </thead>
        <tbody>
        {
          datas.map((d)=>{
            return(
              <>
             
              <tr>
                <td className='px-3'>
                  <Link className="btn btn-primary " to={"/admin" + d._id }>Edit</Link>
                  <button className="btn btn-danger" onClick={(e)=>deletetrainer(e,d._id)} >Delete</button>
                </td>
                <td>{d.name}</td>             
                <td>{d.email}</td>
                <td>{d.mobileno}</td>
                <td>{d.web_name}</td>
                <td>{d.password}</td>
                {/* <td>{d.status}</td> */}
                <td>{d.tag_line}</td>
                <td>{d.name}</td>
                
              </tr>
              </>
            )
          })
        }
        </tbody>
      </Table>
      </div>
    </div>

    </div>
  )
}

export default Trainers
