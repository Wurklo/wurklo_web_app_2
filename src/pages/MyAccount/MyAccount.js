import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CreateWurker from '../../components/CreateWurker'
import ProfileInfo from '../../components/ProfileInfo'

const userProfile = {
    name: "bobby keel",
    skill: "full stack developer",
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
                    rate={userProfile.rate}
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

// a preprocesor for capitalization of first word
// and all words processed
// const array = [userProfile.name, userProfile.skill]

// const capitalizeAll = (array) => {
//     let newArray = []
//     for (let i = 0; i < array.length; i++) {
//         console.log(array[i])
//         newArray.push(array[i].replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))) 
//         console.log(array[i])
//     }
//     console.log(newArray);
// }

// capitalizeAll(array)