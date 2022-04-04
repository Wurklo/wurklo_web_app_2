import React from "react";
import { Container, Row, Col, Button } from 'reactstrap';

function BuyNow() {

    return (
        <Container className="viewport100">
            <Row className="my-4">
                <Col className="text-center mt-4">
                    <h1 className="text-primary">Presale</h1>
                    <p className="text-primary pb-0">Start Date: April 4, 2022</p>
                    <p className="text-primary pt-0">End Date: Token Launch</p>
                </Col>
            </Row>
            <Row className="d-flex justify-content-center ms-md-5 ps-md-5">
                <Col md={5} className="text-center mx-1 mb-5 text-lg-start ">
                    <h5 className="mb-4">Tier 1 -> 0.002 USDT = 1 WURK</h5>
                    <ul>
                        <li>Minimum buy-in = 5,000 USDT</li>
                        <li>Maximum buy-in = No limit</li>
                        <li>Total Tokens = 50,000,000 WURK</li>
                    </ul>
                    <a href="https://form.jotform.com/220934633275053" target="_blank" rel="noreferrer"><Button className='ms-4 ms-md-0 bg-primary text-white shadow' id="whitepaper-button">Buy Tier 1</Button></a>
                </Col>
                <Col md={5} className="text-center mx-1 mb-5 text-lg-start ">
                    <h5 className="mb-4">Tier 2 -> 0.003 USDT = 1 WURK</h5>
                    <ul>
                        <li>Minimum buy-in = 2,500 USDT</li>
                        <li>Maximum buy-in = No limit</li>
                        <li>Total Tokens = 50,000,000 WURK</li>
                    </ul>
                    <a href="https://form.jotform.com/220935117945156" target="_blank" rel="noreferrer"><Button className='ms-4 ms-md-0 bg-primary text-white shadow' id="whitepaper-button">Buy Tier 2</Button></a>
                </Col>
                <Col md={5} className="text-center mx-1 mb-5 text-lg-start ">
                    <h5 className="mb-4">Tier 3 -> 0.004 USDT = 1 WURK</h5>
                    <ul>
                        <li>Minimum buy-in = 1,000 USDT</li>
                        <li>Maximum buy-in = No limit</li>
                        <li>Total Tokens = 50,000,000 WURK</li>
                    </ul>
                    <a href="https://form.jotform.com/220935173530148" target="_blank" rel="noreferrer"><Button className='ms-4 ms-md-0 bg-primary text-white shadow' id="whitepaper-button">Buy Tier 3</Button></a>
                </Col>
                <Col md={5} className="text-center mx-1 mb-5 text-lg-start ">
                    <h5 className="mb-4">Tier 4 -> 0.005 USDT = 1 WURK</h5>
                    <ul>
                        <li>Minimum buy-in = 100 USDT</li>
                        <li>Maximum buy-in = No limit</li>
                        <li>Total Tokens = 50,000,000 WURK</li>
                    </ul>
                    <a href="https://form.jotform.com/220934667804159" target="_blank" rel="noreferrer"><Button className='ms-4 ms-md-0 bg-primary text-white shadow' id="whitepaper-button">Buy Tier 4</Button></a>
                </Col>
            </Row>
        </Container>
    );
};

export default BuyNow;