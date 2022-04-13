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
                    name={user?.displayName}
                    skill={user?.skill}
                    rate={user?.rate}
                    imageUrl={user?.photoURL.split('=')[0]}
                    availability={user?.availability}
                    phone={user?.phone}
                    email={user?.email}
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