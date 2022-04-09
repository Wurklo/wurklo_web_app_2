import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Search from '../../components/Search'
import WurkerCard from '../../components/WurkerCard'
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import { Filter } from '@mui/icons-material';
import FilterSearchResults from '../../components/FilterSearchResults';

function SearchResults() {
    const [wurkers, setWurkers] = useState([]);
    const [nameFilter, setNameFilter] = useState('asc');
    const [rateFilter, setRateFilter] = useState('asc');
    let { searchParams } = useParams();

    useEffect(() => {
        db
            .collection('wurkers')
            .where('skill', '==', `${searchParams.toLowerCase()}`)
            .orderBy('rate', `${rateFilter}`)
            .onSnapshot(snapshot => {
                setWurkers(snapshot.docs.map(doc => ({
                    id: doc.id,
                    wurker: doc.data()
                })));
            })
    }, [searchParams, rateFilter]);

    return (
        <Container fluid>
            <Row>
                <Col className='searchResults__searchInput'>
                    <Search placeholderValue="Search wurkers ... ex. full stack developer, react" />
                    <FilterSearchResults
                        setNameFilter={setNameFilter}
                        setRateFilter={setRateFilter}
                    />
                </Col>
            </Row>
            <Row>
                <Col className='searchResults__searchInput mt-3'>
                    <p className='text-center'>1 2 3 4 5 6 7 8 9 ... 3,000,234 pages for {searchParams}</p>
                </Col>
            </Row>
            <Row className='mx-5 mb-5'>
                {
                    wurkers.map(({ id, wurker }) => (
                        <WurkerCard
                            key={id}
                            id={id}
                            name={wurker.name}
                            skill={wurker.skill}
                            imageUrl={wurker.imageUrl}
                        />
                    ))
                }

            </Row>
        </Container>
    )
}

export default SearchResults