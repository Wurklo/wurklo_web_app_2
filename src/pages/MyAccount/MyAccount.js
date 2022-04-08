import React from 'react'
import { Container, Row } from 'reactstrap'
import CreateWurker from '../../components/CreateWurker'
import ProfileInfo from '../../components/ProfileInfo'

function MyAccount() {
    return (
        <Container className='mt-3 text-center text-md-start'>
            <Row>
                <ProfileInfo />
            </Row>
            <Row>
                <CreateWurker />
            </Row>
        </Container>
    )
}

export default MyAccount