import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

function Partners() {
  return (
    <div className="partner-container">
    <Container className="py-5 px-md-5 text-center text-md-start">
        <h1>Partners</h1>
        <Row className="pt-5 px-md-5">
            <Col md={3}>
                <a href='https://twitter.com/Solianceio' target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/soliance-circ.jpeg?alt=media&token=933df190-22ae-4e4d-b8f9-ab1eabe0702c" alt="soliance" className='partner-img shadow' /></a>
                <p className='text-center me-4'>Soliance<br/><span className='team-text'>Member</span></p>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Partners