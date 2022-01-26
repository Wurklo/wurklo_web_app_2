import React from "react";
import coin from '../images/wurklo-coin';
import { Container, Row, Col } from 'reactstrap';

function Coin() {

    return (
        <Container className="viewport100">
            <Row className="my-4">
                <Col>
                    <h1 className="text-primary text-center mt-4">WURK</h1>
                </Col>
            </Row>
            <Row>
                <Col md={3} className="mb-5 mt-md-5 text-md-start text-center">
                    <img src={coin} alt="desktop preview" width="300" />
                </Col>
                <Col className="text-center mx-1 mb-5 text-lg-start ">
                    <h5 className="mb-4">WURK is a utility token used to exchange services within the Wurklo ecosystem. This token is based on solana blockchain technology to verify the nodes of each transaction.</h5>
                    <h5 className="mb-4">WURK makes the transactions fast, secured and with almost no extra fee.</h5>
                    <h5 className="mb-4">The total supply of WURK is 1 billion. This enables the community to accommodate global users without the risk of making it a speculation coin.</h5>
                    <h5 className="mb-4">Since the volume of WURK is fixed, The value of the coins rely on the exchange of the token within the system. Therefore the more the token is exchanged between the users for services, the more valuable it gets.</h5>
                    <h5 className="mb-4">We at Wurklo do not want WURK to be another of the speculative tokens. We are creating a utility token backed by the user's hard work. WURK will always be in fixed supply, ensuring no dilution of the value exchange in the future.</h5>
                    <h5 className="mb-4">WURK is a worker's coin. Use it responsibly.</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Coin;