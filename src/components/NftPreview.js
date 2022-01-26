import { Container, Row, Col } from 'reactstrap';
import paintbrushGold from '../images/brush_gold.mp4';
import paintbrushBronze from '../images/brush_bronze.mp4';
import paintbrushSilver from '../images/brush_silver.mp4';
import solseaLogo from '../images/SolSea_Logo.svg';
import magicedenLogo from '../images/ME.png';
import raydiumLogo from '../images/raydiumLogo.svg';
import digitaleyesLogo from '../images/digitaleyesLogo.svg';



function NftPreview() {

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
                    <Col className='text-center g-0'>
                        <video className="nft" controls loop>
                            <source src={paintbrushBronze} type="video/mp4"></source>
                        </video>
                        <p id='launch'>Paintbrush Bronze</p>
                    </Col>
                    <Col className='text-center g-0'>
                        {/* <img  src={paintbrushSilver} alt=''></img> */}
                        <video class="nft" controls loop>
                            <source src={paintbrushSilver} type="video/mp4"></source>
                        </video>
                        <p id='launch'>Paintbrush Silver</p>
                        {/* <Button className="button__connect mt-3 d-none d-xl-inline" id="ToolTipComingSoon">View more</Button> */}
                    </Col>
                    <Col className='text-center g-0'>
                        {/* <img className='nft' src={paintbrushGold} alt=''></img> */}
                        <video class="nft" controls loop>
                            <source src={paintbrushGold} type="video/mp4"></source>
                        </video>
                        <p id='launch'>Paintbrush Gold</p>
                    </Col>
                </Row>
                <Row className='d-flex justify-content-around align-items-center text-center ms-lg-3'>
                    <h2 className='mb-4'>Verified on</h2>
                    <Col lg={3}>
                        <a href='https://solsea.io/collection/61e64ac2c4bd70b891f35435' target="_blank" rel="noreferrer"><img className='solseaRaydium__logos mt-lg-2 mb-3' src={solseaLogo} alt=''></img></a>
                    </Col>
                    <Col lg={3}>
                        <a href='https://nft.raydium.io/marketplace/wurklo' target="_blank" rel="noreferrer"><img className='solseaRaydium__logos mt-lg-2 mb-3' src={raydiumLogo} alt=''></img></a>
                    </Col>
                    <Col lg={3}>
                        <a href='https://magiceden.io/marketplace/wurklo' target="_blank" rel="noreferrer"><img className='magiceden__img mb-3' src={magicedenLogo} alt=''></img></a>
                    </Col>
                    <Col lg={3}>
                        <a href='https://digitaleyes.market/collections/Wurklo' target="_blank" rel="noreferrer"><img className='magiceden__img' src={digitaleyesLogo} alt=''></img></a>
                    </Col>
                </Row>

                {/* <Row>
                    <Col className='text-center'>
                        <Button className="button__connect mt-3 d-xl-none" id="ToolTipComingSoon">View more</Button>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
};

export default NftPreview;