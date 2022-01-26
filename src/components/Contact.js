import { Container, Row, Col, Button } from 'reactstrap';

function Contact() {

    return (
        <div className="contact" id='contact'>
            <Container className="px-3 py-5 p-md-5 text-center text-md-start">
                <Row className="py-5 p-md-5">
                    <Col lg={6}>
                        <h1 id="creator">Creator</h1>
                        <p id="creator-content">Currently, I am a registered nurse, but over my life, I have had more than 50 jobs/careers. I've seen every part of the employment process, and I understand what the average worker wants from a job. Believing there is a better way, I embarked on this mission to change the employer-employee relationship by providing more equal exchange between both parties needs.</p>
                    </Col>
                    <Col lg={1}>
                    
                    </Col>
                    <Col lg={5} className='pt-5 pt-md-0'>
                        <h1 id="contact">Contact</h1>
                        <a href='mailto:bkeel@wurklo.com' target="_blank" rel="noreferrer" className='ps-4 ms-lg-5 ps-lg-3'><Button className="button mt-3">Email</Button></a>
                        <a href='https://docs.google.com/forms/d/e/1FAIpQLSe85uKXIp0KcvdGxu6kyBgjlFf666FdmZfPJJcajjC-QAIyHg/viewform?usp=sf_link' target="_blank" rel="noreferrer"><Button className="button mt-3">Form</Button></a>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Contact;