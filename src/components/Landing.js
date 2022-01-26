import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';
import coin from '../images/wurklo-coin';

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
                        <a className='mx-auto ms-3 pe-3 ms-md-auto' href='https://www.reddit.com/user/Wurklo/comments/ri14n4/what_is_wurklo/?utm_source=share&utm_medium=web2x&context=3' target="_blank" rel="noreferrer"><Button id="whitepaper-button">Learn more</Button></a>{' '}
                        <a className='mx-auto' href='#timeline'><Button id="roadmap-button">Roadmap</Button></a>
                        {/* <a className='ps-2' href='https://confident-brattain-44395e.netlify.app/'><Button className="p-1 px-md-5 button__testApp">Start</Button></a> */}
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Landing;