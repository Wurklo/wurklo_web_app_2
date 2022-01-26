import { Container, Row, Col } from 'reactstrap';

function About() {

    return (
        <div className="about__landing">
            <Container className="pt-5 p-lg-5 text-center">
                <Row className="pt-lg-5 px-lg-5">
                    <Col>
                        <h1 id="about">Founder Story</h1>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default About;