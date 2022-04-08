import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CreateWurker from '../../components/CreateWurker'
import ProfileInfo from '../../components/ProfileInfo'

const userProfile = {
    name: "Bobby Keel",
    skill: "Full Stack Developer",
    imageUrl: "https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d",
    availability: "24/7",
    phone: "555-555-5555",
    email: "bobbykeel@gmail.com",
    portfolioLink: "www.wurklo.com"
}

function MyAccount() {
    return (
        <Container className='mt-3 text-center text-md-start'>
            <Row>
                <ProfileInfo
                    name={userProfile.name}
                    skill={userProfile.skill}
                    imageUrl={userProfile.imageUrl}
                    availability={userProfile.availability}
                    phone={userProfile.phone}
                    email={userProfile.email}
                    portfolioLink={userProfile.portfolioLink}
                />
            </Row>
            <Row>
                <Col md={6} className='mt-4 ms-0 ms-lg-5 mb-4'>
                    <CreateWurker />
                </Col>
            </Row>
        </Container>
    )
}

export default MyAccount