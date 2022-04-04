import React, { useState } from "react";
import { useEffect } from "react";
import { Container, Row, Col, Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';

function BuyNow() {
    const [modal, toggleModal] = useState(false);

    useEffect(() => {
        toggleModal(!modal);
    }, [])

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
            <div>
                <Modal
                    fullscreen="md"
                    size="lg"
                    isOpen={modal}
                >
                    <ModalHeader className="align-self-center">
                        <h5 className="text-primary">Terms, Conditions, Risk</h5>
                    </ModalHeader>
                    <ModalBody>
                        By purchasing the WURK token you are agreeing to the terms, conditions, and risks associated with this action. See terms & conditions <a href="https://app.gitbook.com/s/LY9HmOSYr92cf33JmybV/tokenomics/vesting" className="p-0 m-0 text-primary" target="_blank" rel="noreferrer">here</a>. Additionally, there are risk involved with purchasing tokens. Tokens have no value except the value placed on them by people who buy them. WURK tokens value will come from the use of the token within our app for payment processing. However, there is the risk that we will not be successful, and the token value could be zero. Therefore, any money you use to purchase the WURK token could be gone forever. You should only buy an amount you can handle losing as this is a very real possibility. Finally, in the event that we are unsuccessful, remaining Wurklo funds will be divided among current holders of WURK tokens, and we will send the divided portions in USDT to those holders. The exception is tier 1 presale group which have a 50% guarantee for 1 year. Terms, conditions, and risks can be updated at anytime and will notify community of changes.
                    </ModalBody>
                    <ModalFooter>
                        {' '}
                        <Button onClick={() => toggleModal(!modal)}>
                            I Agree
                        </Button>
                    </ModalFooter>
                </Modal>
            </div>
        </Container>
    );
};

export default BuyNow;