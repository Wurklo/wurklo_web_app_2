import React from 'react'
import { Col, Container, Row } from 'reactstrap'
import CreateWurker from '../../components/CreateWurker'
import ProfileInfo from '../../components/ProfileInfo'
//redux 
import { useDispatch, useSelector } from 'react-redux';
import { setUser } from '../../redux/slices/user';

function MyAccount() {
    const { user } = useSelector((state) => state.user);
    const dispatch = useDispatch();

    return (
        <Container className='mt-3 text-center text-md-start'>
            <Row>
                <ProfileInfo
                    name={user?.user.displayName}
                    skill={user?.skill}
                    rate={user?.rate}
                    imageUrl={user?.user.photoURL.split('=')[0]}
                    availability={user?.availability}
                    phone={user?.phone}
                    email={user?.user.email}
                    portfolioLink={user?.portfolioLink}
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