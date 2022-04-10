import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Search from '../../components/Search'
import WurkerCard from '../../components/WurkerCard'
import { db } from '../../firebase';
import { useNavigate, useParams } from 'react-router-dom';
import FilterSearchResults from '../../components/FilterSearchResults';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';

function SearchResults() {
    const [wurkers, setWurkers] = useState([]);
    const [lastDoc, setLastDoc] = useState();
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
                setWurkers(collections.docs.map(doc => ({
                    id: doc.id,
                    wurker: doc.data()
                })));
                setLastDoc(collections.docs[collections.docs.length - 1]);
            })
    }, [searchParams, rateFilter]);

    const updateState = (collections) => {
        const isCollectionEmpty = collections.size === 0;
        if (!isCollectionEmpty) {
            const newWurkers = collections.docs.map(doc => ({
                id: doc.id,
                wurker: doc.data()
            }));
            setWurkers([...wurkers, ...newWurkers])
            setLastDoc(collections.docs[collections.docs.length - 1]);
        } else {

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

    window.onscroll = function (ev) {
        if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
            // you're at the bottom of the page
            getNextPage();
        }
    };

    return (
        <Container fluid>
            <Row>
                <Col id="top" className='searchResults__searchInput mb-4'>
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
            <Row className='mx-5'>
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