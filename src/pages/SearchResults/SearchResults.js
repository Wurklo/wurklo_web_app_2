import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import Search from '../../components/Search'
import WurkerCard from '../../components/WurkerCard'

function SearchResults() {
    return (
        <Container fluid>
            <Row>
                <Col className='searchResults__searchInput'>
                    <Search />
                </Col>
            </Row>
            <Row className='mx-5 mb-5'>
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

export default SearchResults