import React from 'react'
import { Col } from 'reactstrap'

function ProfileInfo({ name, skill, rate, imageUrl, availability, phone, email, portfolioLink }) {

    return (
        <>
            <Col lg={3} className="profileInfo__image">
                <img src={imageUrl} className="shadow" alt={name} />
            </Col>
            <Col md={3} className='profileInfo__info mx-auto m-0 ms-md-3 mt-4 mt-md-0 py-3 p-md-3 shadow'>
                <h3>{name?.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</h3>
                <p>{skill?.replace(/\w\S*/g, (w) => (w.replace(/^\w/, (c) => c.toUpperCase())))}</p>
                <p>Rate: ${rate}/hr</p>
                <p>Available {availability?.toUpperCase()}</p>
                <p>P# {phone}</p>
                <p>E# {email}</p>
                <p>Portfolio {portfolioLink}</p>
            </Col>
            <Col md={5} className="profileInfo__performanceEval mx-auto ms-md-5 mt-4 mt-md-0 p-3 text-center shadow">
                <p className='p-0 m-0'>Coming in Version 1.1.0</p>
                <h2>Performance Evaluation</h2>
                <div className='d-flex justify-content-around'>
                    <h5>Performance</h5>
                    <h5>Character</h5>
                </div>
                <div className='profileInfo__imageContainer d-flex justify-content-around'>
                    <img src="https://firebasestorage.googleapis.com/v0/b/wurklo-web-app.appspot.com/o/wurklo_new_logo_white_blackbg.png?alt=media&token=fdf68760-e902-435e-b71f-c7778f1034a5" className="ms-0 ms-md-3 shadow" alt={name} />
                    <img src="https://firebasestorage.googleapis.com/v0/b/wurklo-web-app.appspot.com/o/wurklo_new_logo_white_blackbg.png?alt=media&token=fdf68760-e902-435e-b71f-c7778f1034a5" className="ms-0 ms-md-3 shadow" alt={name} />
                </div>
            </Col>
        </>
    )
}

export default ProfileInfo