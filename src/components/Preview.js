import { Container, Row, Col, Button } from 'reactstrap';
import { Link } from 'react-router-dom';

function Preview() {

    return (
        <div className="preview" id="preview-bg">
            <Container className="py-5 px-4 p-lg-5 text-center text-lg-start" id='app-preview'>
                <Row className="py-lg-5 px-lg-5">
                    <Col className='pt-lg-4 ps-lg-5 order-lg-2'>
                        <center><img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/new_mobile_march.png?alt=media&token=bc6dd2f3-3845-4cbb-b5dd-7b0ead096bdb" alt="desktop preview" id="mobile" /></center>
                    </Col>
                    <Col lg={8} className="pt-5 pb-5 order-lg-1">
                        <h1 id="app-preview">Wurklo App</h1>
                        <p id="app-content">Wurklo allows you to create projects that you are interested in. You can hire people or get hired. You can collaborate with a team or create your own passion project. It’s your call.
                        </p>
                        <Link to="/Wurklo"><Button className='ms-4 ms-md-0' id="whitepaper-button">Learn more</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Preview;