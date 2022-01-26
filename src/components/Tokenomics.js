import { Container, Row, Col } from 'reactstrap';
import AnyChart from 'anychart-react'

function Tokenomics() {

    return (
        <div className="tokenomics" id='tokenomics'>
            <Container className="py-5 p-md-5 text-center text-md-start">
                <Row className="py-5 py-md-5 ps-md-5">
                    <Col md={6} className='mb-4 mb-lg-0'>
                        <AnyChart
                            className="chart"
                            height={500}
                            title="Tokenomics"
                            type='pie'
                            data={[['Public Sales', 10], ['Exchanges', 60], ['Team', 20], ['Reserve', 5], ['Community Rewards', 5]]}
                            background='none'
                        />
                    </Col>
                    <Col md={6} className='pb-md-5'>
                        <h1>Tokenomics</h1>
                        <h2>Supply: 1 Billion</h2>
                        <p id="launch">Launch: Late 2022</p>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Tokenomics;