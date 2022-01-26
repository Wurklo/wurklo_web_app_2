import { Container, Row, Col, Button } from 'reactstrap';
import paintbrushGold from '../images/brush_gold.mp4';
import paintbrushBronze from '../images/brush_bronze.mp4';
import paintbrushSilver from '../images/brush_silver.mp4';



function NftPage() {

    return (
        <div className="nftPreview">
            <Container className="py-5 p-md-5 text-center text-md-start">
                <Row className="pt-5 p-md-5">
                    <Col>
                        <h1>NFT Collection</h1>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <h2 className='text-center'>Laborer Series</h2>
                    </Col>
                </Row>
                <Row className="pb-5 px-md-5">
                    <Col className='text-center g-0'>
                        <p id='launch'>Paintbrush Bronze</p>
                        <video className="nft" controls loop>
                            <source src={paintbrushBronze} type="video/mp4"></source>
                        </video>
                        <Button className="button__connect mt-3">Buy</Button>
                    </Col>
                    <Col className='text-center g-0'>
                        <p id='launch'>Paintbrush Silver</p>
                        <video class="nft" controls loop>
                            <source src={paintbrushSilver} type="video/mp4"></source>
                        </video>
                        <Button className="button__connect mt-3">Buy</Button>
                    </Col>
                    <Col className='text-center g-0'>
                        <p id='launch'>Paintbrush Gold</p>
                        <video class="nft" controls loop>
                            <source src={paintbrushGold} type="video/mp4"></source>
                        </video>
                        <Button className="button__connect mt-3">Buy</Button>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default NftPage;