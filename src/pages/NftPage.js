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
                {/* make this a modal */}
                {/* <Row className="p-5">
                    <Col>
                        <h2>Total to be Released: 10,000</h2>
                        <p className="p-0 m-0">Planned Series:</p>
                        <p className="p-0 m-0 ms-3">Laborer 2000/10000</p>
                        <p className="p-0 m-0 ms-3">Operatives 1750/10000</p>
                        <p className="p-0 m-0 ms-3">Service Workers 1750/10000</p>
                        <p className="p-0 m-0 ms-3">Craft & Trade 1500/10000</p>
                        <p className="p-0 m-0 ms-3">Professionals 1400/10000</p>
                        <p className="p-0 m-0 ms-3">Aggregators 900/10000</p>
                        <p className="p-0 m-0 ms-3">Special Editions 500/10000</p>
                        <p className="p-0 m-0 ms-3">One-of-a-kinds 200/10000</p>
                    </Col>
                    <Col>
                        <h2>Series Variations: 3</h2>
                        <p className="p-0 m-0">Planned Series:</p>
                        <p className="p-0 m-0 ms-3">Bronze</p>
                        <p className="p-0 m-0 ms-3">Silver</p>
                        <p className="p-0 m-0 ms-3">Gold</p>
                    </Col>
                </Row> */}
            </Container>
        </div>
    );
};

export default NftPage;