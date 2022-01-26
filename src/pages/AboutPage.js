import React from "react";
import { Container, Row, Col } from 'reactstrap';
// import { PageContent } from './PageContent';
import YouTube from 'react-youtube';

function AboutPage() {
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            autoplay: 1,
        },
    };

    return (
        <div className="about">
            <Container className="py-5 p-md-5">
                <Row className="py-5 p-md-5 text-center">
                    <Col>
                        <h1>Founder Story</h1>
                        <YouTube className="founderVideo" videoId="ZzMGJbl1sNs" opts={opts} />

                        <p>Bobby Keel, Registered Nurse</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default AboutPage;