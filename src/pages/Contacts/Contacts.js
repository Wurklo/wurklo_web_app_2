import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import WurkerCard from '../../components/WurkerCard'
import Search from '../../components/Search'

function Contacts() {
  return (
    <Container fluid>
      <Row>
        <Col className='searchResults__searchInput'>
          <Search placeholderValue="Search contacts ..."/>
        </Col>
      </Row>
      <Row className='m-5 mb-5'>
        <WurkerCard 
          name="Bobby Keel"
          skill="Full Stack Developer"
          imageUrl="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d"
        />
      </Row>
    </Container>
  )
}

export default Contacts