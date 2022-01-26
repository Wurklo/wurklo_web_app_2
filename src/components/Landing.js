import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';
import coin from '../images/wurklo-coin';
import { Link } from 'react-router-dom';

function Landing() {

    return (
        <div className="landing">
            <Container className="pt-5 px-md-5 text-center text-md-start">
                <Row className="pt-md-5 px-md-5">
                    <Col md={4} className='order-md-2'>
                        <img src={coin} alt="wurklo coin" id="coin-img" className="mx-auto px-5 pb-5 p-md-0" />
                    </Col>
                    <Col md={8} className='order-md-1'>
                        <h1>WURK</h1>
                        <h2>A Coin for Wurkers</h2>
                        <p id="launch">Token Launch:<br />Late 2022</p>
                        <Link to="/coin"><Button className='ms-4 ms-md-0' id="whitepaper-button">Learn more</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Landing;