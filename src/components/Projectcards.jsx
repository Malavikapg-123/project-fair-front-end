import React from 'react';
import Card from 'react-bootstrap/Card';
import { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import mediiaPlayerImage from '../Assets/image2.jpeg'
import { Col, Row } from 'react-bootstrap';

function Projectcards() {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <div>
            <Card className='shadow text-center btn' onClick={handleShow}>
                <Card.Img variant="top" src={mediiaPlayerImage} />
                <Card.Body>
                    <Card.Title>Media player</Card.Title>
                </Card.Body>
            </Card>

            <Modal show={show} onHide={handleClose} size='lg'>
                <Modal.Header closeButton>
                    <Modal.Title>Video player</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <Row>
                        <Col md={6} lg={6}>
                            <img src={mediiaPlayerImage} width={"100%"} height={"250px"} alt="" />
                        </Col>
                        <Col md={6} lg={6}>
                            <h4>Description</h4>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quidem dolores,
                                quibusdam animi labore sapiente minus,minima ea soluta voluptas
                                ipsam officia, iusto ipsa corrupti fugiat quis beatae debitis sunt?</p>
                            <p> <span className='fw-bolder'>Technologies:</span>HTML,CSS,React,Node </p>
                        </Col>
                    </Row>
                    <div className='d-flex mt-3'>
                        <a href="https://vercel.com/malavikapg-123s-projects/media-player-project" style={{ color: "black", fontSize: "25px" }}> <i class="fa-solid fa-link ms-3"></i></a>
                        <a href="https://github.com/Malavikapg-123/Media-player-project.git" target='_blank' style={{ color: "black", fontSize: "25px" }}><i class="fa-brands fa-github ms-3"></i></a>
                    </div>
                </Modal.Body>
            </Modal>

        </div>
    )
}

export default Projectcards;