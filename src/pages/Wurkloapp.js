import React from "react";
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
                <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/new_app_mobeil.png?alt=media&token=f79cf857-3922-465b-8d43-2a46aed83b87" alt="desktop preview" width="300" />
            </Col>
            <Col className="text-center mx-2 mt-md-3 mt-xl-5 mb-5 text-lg-start ">
                <h5 className="mb-4">Wurklo allows you to create projects that you are interested in. You can hire people or get hired. You can collaborate with a team or create your own passion project. It’s your call.</h5>
                <h5 className="mb-4">Wurklo allows you to work with people from around the world, or locally within your neighborhood.</h5>
                <h5 className="mb-4">The idea is to give people the power to create projects, make a wurker profile, pay for services and get paid. Additionally, the app will have business tools that will give users the power of a large scale business with tools such as the demand curve for pricing services.</h5>
                <h5 className="mb-4">You can hire a plumber, create your passion project or rent your parking space, the possibilities are endless. You will decide the work and the amount, and market forces will do the rest. </h5>
                <a href='https://xd.adobe.com/view/8bbf5175-56cc-4203-8cd4-acc29b27a285-deec/' target="_blank"><Button className="p-3 ms-4 ms-md-0">Test App</Button></a>
            </Col>
        </Row>
    </Container>
    );
};

export default Wurkloapp;