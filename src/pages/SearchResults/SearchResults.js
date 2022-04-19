import React, { useEffect, useState } from 'react'
import { Col, Container, Row } from 'reactstrap'
import Search from '../../components/Search'
import WurkerCard from '../../components/WurkerCard'
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import FilterSearchResults from '../../components/FilterSearchResults';
import Typesense from 'typesense';

function SearchResults() {
    const [wurkers, setWurkers] = useState([]);
    // const [wurkers, setWurkers] = useState([]);

    // the below need to be moved after setting searchParams/filters in redux
    const { searchParams } = useParams();

    // Create a Typesense Client using the search-only API key
    const client = new Typesense.Client({
        'nodes': [{
            'host': '8vhgabwrmky6pz7cp-1.a1.typesense.net', // where xxx is the ClusterID of your Typesense Cloud cluster
            'port': '443',
            'protocol': 'https'
        }],
        'apiKey': 'N1QsozxFYgafvNigVIzjeLQ3ZNTVGzGZ',
        'connectionTimeoutSeconds': 2
    });
    const pageNum = 1;
    // Search for notes with matching text
    const searchParameters = {
        'q': searchParams,
        'query_by': 'tags,skill,displayName',
        'sort_by': 'rate:asc',
        'per_page': '20',
        'page': `${pageNum}`
    };

    useEffect(() => {
        client.collections('wurkers')
            .documents()
            .search(searchParameters)
            .then((searchResults) => {
                setWurkers(searchResults.hits)
                console.log(searchResults)
            })
    }, [searchParams])

    // console.log(wurkers[0]?.document)
    return (
        <Container fluid>
            <Row>
                <Col>
                    <p className='wurklo__textColor text-center mb-0'>1 2 3 4 5 6 7 8 9 ... 35</p>
                    <p className='wurklo__textColor text-center mb-0'>pages for {`${searchParams}`} </p>
                </Col>
            </Row>
            <Row className='mx-5 mt-4'>
                {
                    wurkers.map(({document}) => (
                        <WurkerCard
                            key={document?.id}
                            id={document?.id}
                            wurker={document}
                        />
                    ))
                }
            </Row>
        </Container>
    )
}

export default SearchResults