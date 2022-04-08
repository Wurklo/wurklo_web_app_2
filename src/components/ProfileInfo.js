import React from 'react'
import { Col } from 'reactstrap'

function ProfileInfo({name, skill, imageUrl, availability, phone, email, portfolioLink}) {

    return (
        <>
            <Col lg={3} className="profileInfo__image">
                <img src={imageUrl} className="shadow" alt={name} />
            </Col>
            <Col md={3} className='mt-4 mt-md-2'>
                <h3>{name}</h3>
                <p>{skill}</p>
                <p>$25/hr</p>
                <p>Available {availability}</p>
                <p>P# {phone}</p>
                <p>E# {email}</p>
                <p>Portfolio {portfolioLink}</p>
            </Col>
            <Col md={6}>
                <h2>Performance Evaluation</h2>
            </Col>
        </>
    )
}

export default ProfileInfo