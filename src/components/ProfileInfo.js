import React from 'react'
import { Col } from 'reactstrap'

function ProfileInfo({name, skill, rate, imageUrl, availability, phone, email, portfolioLink}) {

    return (
        <>
            <Col lg={3} className="profileInfo__image">
                <img src={imageUrl} className="shadow" alt={name} />
            </Col>
            <Col md={3} className='profileInfo__info mx-auto m-0 ms-md-3 mt-4 mt-md-0 py-3 p-md-3 shadow'>
                <h3>{name}</h3>
                <p>{skill}</p>
                <p>Rate: ${rate}/hr</p>
                <p>Available {availability}</p>
                <p>P# {phone}</p>
                <p>E# {email}</p>
                <p>Portfolio {portfolioLink}</p>
            </Col>
            <Col md={5} className="profileInfo__performanceEval mx-auto ms-md-5 mt-4 mt-md-0 p-3 text-center shadow">
                <h2>Performance Evaluation</h2>
                <p>Coming soon</p>
            </Col>
        </>
    )
}

export default ProfileInfo