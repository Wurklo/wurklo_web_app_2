import React from 'react'
import { Col } from 'reactstrap'

function ProfileInfo() {
    return (
        <>
            <Col lg={3} className="profileInfo__image">
                <img src="https://firebasestorage.googleapis.com/v0/b/wurklo.appspot.com/o/profilePic.webp?alt=media&token=f0f6e321-e5b7-4825-8c34-c90d39ad800d" className="shadow" alt="Profile Pic" />
            </Col>
            <Col md={3} className='mt-4 mt-md-2'>
                <h3>Bobby Keel</h3>
                <p>Full Stack Developer</p>
                <p>$25/hr</p>
                <p>Available 24/7</p>
                <p>P# 555-555-5555</p>
                <p>E# bobbykeel@gmail.com</p>
                <p>portfolio link</p>
            </Col>
            <Col md={6}>
                <h2>Performance Evaluation</h2>
            </Col>
        </>
    )
}

export default ProfileInfo