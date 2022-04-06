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
            <Row>
                <Col className='searchResults__searchInput mt-3'>
                    <p className='text-center'>1 2 3 4 5 6 7 8 9 ... 3,000,234 pages for plumbers</p>
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