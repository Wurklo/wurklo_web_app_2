import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';
import { Link } from 'react-router-dom';
import ContentCopyIcon from '@mui/icons-material/ContentCopy';
import solscanLogo from "../images/solscanLogo.svg"

function Landing() {
    return (
        <div className="landing">
            <Container className="pt-5 px-md-5 text-center text-md-start">
                <Row className="pt-md-5 px-md-5">
                    <Col md={4} className='order-md-2'>
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/wurklo-coin.png?alt=media&token=7d7b0ec0-18fb-4495-85cf-61655fa5edf4" alt="wurklo coin" id="coin-img" className="mx-auto px-5 pb-5 p-md-0" />
                    </Col>
                    <Col md={8} className='order-md-1'>
                        <h1>WURK</h1>
                        <h2>A Coin for Wurkers</h2>
                        <h6 className='text-white'>Contract:</h6>
                        <Button onClick={() => {
                            navigator.clipboard.writeText('GYyL45cnhDWEcr2iEs5sxWND5SLXa7VMFUmwp1uM92YV')
                        }} className='contract p-1 border border-2 shadow mb-2'>GYyL45cnhDWEcr2iEs5sxWND5SLXa7VMFUmwp1uM92YV<ContentCopyIcon className='fs-6 ms-1' /></Button>
                        <br />
                        <a href='https://solscan.io/token/GYyL45cnhDWEcr2iEs5sxWND5SLXa7VMFUmwp1uM92YV' target="_blank" rel="noreferrer"><img className='solseaRaydium__logos mt-lg-2 mb-3 ms-4 ms-md-0' src={solscanLogo} alt=''></img></a>
                        <p id="launch">Token Launch:<br />Late 2022</p>
                        <Link to="/buynow"><Button className='ms-4 ms-md-0 shadow' id="whitepaper-button">Buy Now</Button></Link>
                        <Link to="/coin"><Button className='ms-4 ms-md-0 shadow' id="whitepaper-button">Learn more</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Landing;