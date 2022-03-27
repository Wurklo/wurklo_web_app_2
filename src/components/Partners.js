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
            <Col md={3}>
                <a href='https://wecap.io/' target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/phant.png?alt=media&token=9be125e6-3e87-48c6-bff4-80b3aa1979f1" alt="white elephant" className='partner-img shadow' /></a>
                <p className='text-center me-4'>White Elephant<br/><span className='team-text'>Partner</span></p>
            </Col>
            <Col md={3}>
            <a href='https://www.vitallmarkets.com/' target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/vitall.png?alt=media&token=c2c676a1-2c3d-419d-8404-5325ff2ba32d" alt="vitall markets" className='partner-img shadow' /></a>
                <p className='text-center me-4'>Vitall Markets<br/><span className='team-text'>Partner</span></p>
            </Col>
            <Col md={3}>
            <a href='https://www.pandacrypto.org/' target="_blank" rel="noreferrer"><img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/panda.png?alt=media&token=50d75799-7010-412f-b25e-126f2f06de89" alt="pandacoin" className='partner-img shadow' /></a>
                <p className='text-center me-4'>PandaCoin<br/><span className='team-text'>Partner</span></p>
            </Col>
        </Row>
    </Container>
</div>
  )
}

export default Partners