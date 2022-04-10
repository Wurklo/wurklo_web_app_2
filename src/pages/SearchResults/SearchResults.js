import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Search from '../../components/Search'
import WurkerCard from '../../components/WurkerCard'
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import { Filter } from '@mui/icons-material';
import FilterSearchResults from '../../components/FilterSearchResults';
import SearchPaginate from '../../components/SearchPaginate';

function SearchResults() {
    const [wurkers, setWurkers] = useState([]);
    const [lastDoc, setLastDoc] = useState();
    const [isEmpty, setIsEmpty] = useState(false);
    const [nameFilter, setNameFilter] = useState('asc');
    const [rateFilter, setRateFilter] = useState('asc');
    let { searchParams } = useParams();

    useEffect(() => {
        db
            .collection('wurkers')
            .where('skill', '==', `${searchParams.toLowerCase()}`)
            .orderBy('rate', `${rateFilter}`)
            .limit(20)
            .get()
            .then((collections) => {
                updateState(collections);
            })
    }, [searchParams, rateFilter]);

    const updateState = (collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
            setWurkers(collections.docs.map(doc => ({
                id: doc.id,
                wurker: doc.data()
            })));
            setLastDoc(collections.docs[collections.docs.length - 1]);
        } else {
            alert("no more wurkers")
        }
    }

    const getNextPage = () => {
        db
            .collection('wurkers')
            .where('skill', '==', `${searchParams.toLowerCase()}`)
            .orderBy('rate', `${rateFilter}`)
            .startAfter(lastDoc)
            .limit(20)
            .get()
            .then((collections) => {
                updateState(collections);
            })
    }


    return (
        <Container fluid>
            <Row>
                <Col className='searchResults__searchInput'>
                    <Search
                        placeholderDefault="Search wurkers ... ex. full stack developer, react"
                        placeholderSearchedValue={searchParams}
                    />
                    <FilterSearchResults
                        setNameFilter={setNameFilter}
                        setRateFilter={setRateFilter}
                    />
                </Col>
            </Row>
            <Row>
                <Col className='searchResults__searchInput mx-auto mt-3'>
                    {/* <SearchPaginate /> */}
                    <Button onClick={getNextPage}>Next Page</Button>
                </Col>
            </Row>
            <Row className='mx-5 mb-5'>
                {
                    wurkers.map(({ id, wurker }) => (
                        <WurkerCard
                            key={id}
                            id={id}
                            name={wurker?.name}
                            skill={wurker?.skill}
                            imageUrl={wurker?.imageUrl}
                        />
                    ))
                }

            </Row>
        </Container>
    )
}

export default SearchResults