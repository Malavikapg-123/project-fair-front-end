import React from 'react'
import Header from '../components/Header';
import { Col, Row } from 'react-bootstrap';
import Projectcards from '../components/Projectcards';

function Project() {
  return (
    <>
      <Header />
      <div className='d-flex justify-content-center align-items-center mt-5 flex column'>
        <h3>All projects</h3>
        <div className='d-flex mt-5 w-25' >
          <input type="text" name="" id="" className='form-control' placeholder='Search project using technology' />
          <i class="fa-solid fa-magnifying-glass fa-rotate-90" style={{marginLeft:"-40px",color:"lightblue"}}></i>
        </div>
      </div>
      <Row className='mt-5 mb-5 ms-5'>
        <Col md={6} lg={4}>
          <Projectcards/>
        </Col>
      </Row>
    </>
  )
}

export default Project;