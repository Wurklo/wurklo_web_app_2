import React from "react";
import mobile from '../images/new_mobile_march.png';
import { Container, Row, Col, Button } from 'reactstrap';

function Wurkloapp() {

    return (
        <Container>
        <Row className="mt-4">
            <Col>
                <h1 className="text-primary text-center mt-4">Wurklo</h1>
            </Col>
        </Row>
        <Row>
            <Col md={3} className="mb-5 g-0 text-md-start text-center">
                <img src={mobile} alt="desktop preview" width="300" />
            </Col>
            <Col className="text-center mx-2 mt-md-3 mt-xl-5 mb-5 text-lg-start ">
                <h5 className="mb-4">Wurklo allows you to work. You can create your own work or get hired.</h5>
                <h5 className="mb-4">The idea is to give people the power to create, pay and get paid.</h5>
                <h5 className="mb-4">The app will assign wurkers with the ability to choose the work they want. The community will decide whether the project is worth the amount of WURK tokens, ensuring a fair market reimbursement.</h5>
                <h5 className="mb-4">You can hire a plumber, create your passion project or rent your parking space, the possibilities are endless. You will decide the work and the amount.</h5>
                <h5 className="mb-4">The wurklo app is a workspace that promotes local participation to create interaction between people of close proximity. Wurklo will also accommodate remote users for digital work.</h5>
                <a href='https://xd.adobe.com/view/8bbf5175-56cc-4203-8cd4-acc29b27a285-deec/' target="_blank"><Button className="p-3 ms-4 ms-md-0">Test App</Button></a>
            </Col>
        </Row>
    </Container>
    );
};

export default Wurkloapp;