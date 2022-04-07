import React from 'react'
import { Container, Row } from 'reactstrap'
import ProfileInfo from '../../components/ProfileInfo'

function MyAccount() {
    return (
        <Container className='mt-3 text-center text-md-start'>
            <Row>
                <ProfileInfo />
            </Row>
        </Container>
    )
}

export default MyAccount