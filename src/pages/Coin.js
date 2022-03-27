import React from "react";
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
                    <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/wurklo-coin.png?alt=media&token=7d7b0ec0-18fb-4495-85cf-61655fa5edf4" alt="desktop preview" width="300" />
                </Col>
                <Col className="text-center mx-1 mb-5 text-lg-start ">
                    <h6 className="mb-4 font-small">Contract Address: GYyL45cnhDWEcr2iEs5sxWND5SLXa7VMFUmwp1uM92YV</h6>
                    <h5 className="mb-4">WURK is a utility token used to exchange services within the Wurklo ecosystem. This token is based on Solana blockchain technology.</h5>
                    <h5 className="mb-4">WURK makes the transactions fast, secured and with almost no extra fee.</h5>
                    <h5 className="mb-4">The total supply of WURK is 1 billion. This enables the community to accommodate global users without creating a confusing conversion rate. Some high supply tokens can have value such as 0.0000004553 = 1000 which can be confusing to convert or spend. We aim with our supply, to keep the price in an understandable range where conversion is not confusing like this. </h5>
                    <h5 className="mb-4">The value of WURK relies on the exchange of the token within the system because people will need to buy the token from a market or the app. Therefore the more the token is exchanged between the users for services, the more valuable it gets.</h5>
                    <h5 className="mb-4">We at Wurklo do not want WURK to be another of the speculative tokens. We are creating a utility token backed by the user's hard work. WURK will always be in fixed supply, ensuring no dilution of the value exchange in the future.</h5>
                    <h5 className="mb-4">WURK is a worker's coin. Use it responsibly.</h5>
                </Col>
            </Row>
        </Container>
    );
};

export default Coin;