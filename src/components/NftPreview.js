import { Container, Row, Col, Button } from 'reactstrap';
import solseaLogo from '../images/SolSea_Logo.svg';
import magicedenLogo from '../images/ME.png';
import raydiumLogo from '../images/raydiumLogo.svg';
import digitaleyesLogo from '../images/digitaleyesLogo.svg';
import React from 'react';
import { Link } from 'react-router-dom';
import YouTube from 'react-youtube';


function NftPreview() {

    const opts1 = {
        height: '300',
        width: '350',
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: "2e1g9vKifmk",
        },
    };

    
    const opts2 = {
        height: '300',
        width: '350',
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: "NMl5Nr7nz8M",
        },
    };

    
    const opts3 = {
        height: '300',
        width: '350',
        playerVars: {
            autoplay: 1,
            loop: 1,
            playlist: "ccWKYzox1qc",
        },
    };

    return (
        <div className="nftPreview">
            <Container className="py-5 p-md-5 text-center">
                <Row className="pt-5 p-md-5">
                    <Col>
                        <h1>NFT Collection</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text-center pb-5'>Laborer Series</h2>
                    </Col>
                </Row>
                <Row className="pb-5 px-md-5">
                    <Col xs={12} md={4} className='text-center g-0'>
                        <YouTube className="founderVideo" opts={opts1} />
                        <p id='launch'>Paintbrush Bronze</p>
                    </Col>
                    <Col xs={12} md={4} className='text-center g-0'>
                        <YouTube className="founderVideo" opts={opts2} />
                        <p id='launch'>Paintbrush Silver</p>
                    </Col>
                    <Col xs={12} md={4} className='text-center g-0'>
                        <YouTube className="founderVideo" opts={opts3} />
                        <p id='launch'>Paintbrush Gold</p>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-around align-items-center text-center ms-lg-3'>
                    <h2 className='mb-4'>Verified on</h2>
                    <Col lg={3}>
                        <a href='https://solsea.io/collection/61e64ac2c4bd70b891f35435' target="_blank" rel="noreferrer"><img className='solseaRaydium__logos mt-lg-2 mb-3 ms-4 ms-md-0' src={solseaLogo} alt=''></img></a>
                    </Col>
                    <Col lg={3}>
                        <a href='https://nft.raydium.io/marketplace/wurklo' target="_blank" rel="noreferrer"><img className='solseaRaydium__logos mt-lg-2 mb-3 ms-4 ms-md-0' src={raydiumLogo} alt=''></img></a>
                    </Col>
                    <Col lg={3}>
                        <a href='https://magiceden.io/marketplace/wurklo' target="_blank" rel="noreferrer"><img className='magiceden__img mb-3 ms-4 ms-md-0' src={magicedenLogo} alt=''></img></a>
                    </Col>
                    <Col lg={3}>
                        <a href='https://digitaleyes.market/collections/Wurklo' target="_blank" rel="noreferrer"><img className='magiceden__img ms-4 ms-md-0' src={digitaleyesLogo} alt=''></img></a>
                    </Col>
                </Row>

                <Row className='mt-5'>
                    <Col className='text-center'>
                        {/* <Button className="button__connect mt-3 d-xl-none" id="ToolTipComingSoon">View more</Button> */}
                        <Link to="/Nft"><Button className='button__connect mt-3 ms-4' id="whitepaper-button">Learn more</Button></Link>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NftPreview;