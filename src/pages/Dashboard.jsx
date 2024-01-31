import React from 'react'
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';
import Myproject from '../components/Myproject';
import Profile from '../components/Profile';

function Dashboard() {
  return (
    <>
    <Header/>
    <h2 className='mt-5 ms-3'>Welcome <span style={{color:"orange"}}>User</span></h2>
    <Row className='container-fluid mt-5'>
      <Col md={8}>
        <Myproject/>
      </Col>
      <Col>
      <Profile/>
      </Col>
    </Row>
    </>
  )
}

export default Dashboard;