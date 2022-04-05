import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import '../App.css';

function Team() {
    return (
        <div className="team-container">
            <Container className="py-5 px-md-5 text-center text-md-start">
                <h1>Team</h1>
                <Row className="pt-5 px-md-5">
                    <Col md={3} className=''>
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d" alt="wurklo coin" id="coin-img" className="shadow team-img" />
                        <p className='text-center me-4'>Bobby Keel Founder<br/><span className='team-text'>Dev/AWS/Mobile</span></p>
                    </Col>
                    <Col md={3} className=''>
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/DROGAN2.png?alt=media&token=cff4f80c-71a4-47aa-a637-b4d6c1ec05a3" alt="wurklo coin" id="coin-img" className="shadow team-img" />
                        <p className='text-center me-4'>Odogwu Chibundu<br/><span className='team-text'>Community Manager</span></p>
                    </Col>
                    <Col md={3} className=''>
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/nikkiProfile.jpeg?alt=media&token=6670e4af-758f-4429-9289-df2070550a39" alt="wurklo coin" id="coin-img" className="shadow team-img" />
                        <p className='text-center me-4'>Nikki Rubrico Socials<br/><span className='team-text'>Social/Ads/Users</span></p>
                    </Col>
                    <Col md={3} className=''>
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/wurklo-coin.png?alt=media&token=7d7b0ec0-18fb-4495-85cf-61655fa5edf4" alt="wurklo coin" id="coin-img" className="shadow team-img" />
                        <p className='text-center me-4'>Manoj Tilija Advisor<br/><span className='team-text'>Dev/AWS/Backend</span></p>
                    </Col>
                </Row>
                <Row className="pt-md-5 px-md-5">
                    <Col md={3} className=''>
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/Polish_20220322_113431684.png?alt=media&token=0818dcbc-2d3d-4e32-8934-833dae112ffe" alt="wurklo coin" id="coin-img" className="shadow team-img" />
                        <p className='text-center me-4'>Kirayama Kuoji<br/><span className='team-text'>Indonesia TG</span></p>
                    </Col>
                    <Col md={3} className=''>
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/kaylan2.png?alt=media&token=f7630033-f081-4f6d-b840-569e9db1962e" alt="wurklo coin" id="coin-img" className="shadow team-img" />
                        <p className='text-center me-4'>Kaylan<br/><span className='team-text'>India TG</span></p>
                    </Col>
                    <Col md={3} className=''>
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/davidNgan.png?alt=media&token=737b4644-f5e7-4127-bf7c-d9831d5ae0fa" alt="wurklo coin" id="coin-img" className="shadow team-img" />
                        <p className='text-center me-4'>David Ngan<br/><span className='team-text'>Vietnam TG</span></p>
                    </Col>
                    <Col md={3} className=''>
                        <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/wurklo-coin.png?alt=media&token=7d7b0ec0-18fb-4495-85cf-61655fa5edf4" alt="wurklo coin" id="coin-img" className="shadow team-img" />
                        <p className='text-center me-4'>mmadu<br/><span className='team-text'>English TG</span></p>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Team