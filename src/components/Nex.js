import { Container, Row, Col } from 'reactstrap';

function Nex() {

    return (
        <div className="nex" id='nex'>
            <Container className="py-5 p-lg-5 text-center text-lg-start">
                <Row className="pb-5 py-lg-5 ps-lg-5">
                    <Col lg={8}>
                        {/* This component just gives the slant look in background. There is a better way with CSS but this works for now */}
                    </Col>
                    <Col></Col>
                </Row>
            </Container>
        </div>
    );
};

export default Nex;