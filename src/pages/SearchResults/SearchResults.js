import React, { useEffect, useState } from 'react'
import { Button, Col, Container, Row } from 'reactstrap'
import Search from '../../components/Search'
import WurkerCard from '../../components/WurkerCard'
import { db } from '../../firebase';
import { useParams } from 'react-router-dom';
import FilterSearchResults from '../../components/FilterSearchResults';
import Typesense from 'typesense';

function SearchResults() {
    const [wurkers, setWurkers] = useState([]);
    const [pages, setPages] = useState(1);
    const [numFound, setNumFound] = useState();
    const [currPage, setCurrPage] = useState(1);
    const [perPage, setPerPage] = useState(20);

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

    // Search for notes with matching text
    const searchParameters = {
        'q': searchParams,
        'query_by': 'tags,skill,displayName',
        'sort_by': 'rate:asc',
        'per_page': `${perPage}`,
        'page': `${currPage}`
    };

    useEffect(() => {
        client.collections('wurkers')
            .documents()
            .search(searchParameters)
            .then((searchResults) => {
                setWurkers(searchResults.hits)
                console.log(searchResults)
                setNumFound(searchResults.found);
                setPages(Math.ceil(searchResults.found/searchResults?.request_params?.per_page))
            })
    }, [searchParams, currPage])


    console.log("currpage", currPage)
    // console.log(wurkers)
    return (
        <Container fluid>
            <Row>
                <Col className='text-center'>
                    {Array(pages + 1).fill(pages, 1).map((_, i) => {
                        if ((i > 9) && (i < pages - 1)) {
                            return
                        }
                        return <Button key={i} outline className='wurklo__textColor mt-0 p-1 m-1 shadow-none' onClick={() => setCurrPage(i)}>{i}</Button>
                    })}
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