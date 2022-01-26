import React from "react";
import badge from '../images/badge.png';
import { Container, Row, Col } from 'reactstrap';

function Nftabout() {

    return (
        <Container className="viewport100">
            <Row className="my-4">
                <Col>
                    <h1 className="text-primary text-center mt-4">NFT Laborer Series</h1>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center">
                <Col md={10} className="text-center mx-1 text-lg-start">
                    <h5>The collection includes a series of NFT’s representing the tools used in a labor market. Every image is categorized into a series of Bronze, silver and gold representing the rarity of the image.</h5>
                </Col>
                <Col md={10} className="text-center">
                    <img src={badge} alt="desktop preview" width="1000" />
                </Col>
                <Col md={10} className="text-center mx-1 mb-5 text-lg-start">
                    <h5 className="mb-4">Our Nft collections are verified in <a className="me-0 text-primary" href='https://solsea.io/collection/61e64ac2c4bd70b891f35435' target="_blank" rel="noreferrer">Solsea</a>, <a className="me-0 text-primary" href='https://nft.raydium.io/marketplace/wurklo' target="_blank" rel="noreferrer">Raydium</a>, <a className="me-0 text-primary" href='https://magiceden.io/marketplace/wurklo' target="_blank" rel="noreferrer">Magic Eden</a>, and <a className="me-0 text-primary" href='https://digitaleyes.market/collections/Wurklo' target="_blank" rel="noreferrer">Digital Eyes</a>.</h5>
                    <h5 className="mb-4">One of a kind WURK token will represent itself as a super rare coin in the NFT collection. This super rare coin will represent the image of the WURK token and will be launched soon in the NFT market space.</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Nftabout;