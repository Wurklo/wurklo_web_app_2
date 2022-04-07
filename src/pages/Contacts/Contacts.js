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
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
        <WurkerCard />
      </Row>
    </Container>
  )
}

export default Contacts