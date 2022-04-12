import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGoogle, faApple, faMicrosoft, faYahoo, faGithub } from "@fortawesome/free-brands-svg-icons";

function LoginModal() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <>
            <Button color='primary' outline className=' shadow-none make-round'
                onClick={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >Sign in</Button>
            <Modal
                className='createWurker__modal'
                size="sm"
                isOpen={isLoginModalOpen}
                toggle={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >
                <ModalHeader className='p-2 ms-2 ms-lg-0 p-lg-3' toggle={() => setIsLoginModalOpen(false)}>
                    <h3 className='text-secondary m-0'><strong>Sign in</strong></h3>
                </ModalHeader>
                <ModalBody className='d-flex flex-column mx-auto pt-4 text-center'>
                    <Button
                        outline
                        color='danger'
                        className='googleSignin__button make-round p-2 px-4 mt-0'
                    >
                        Sign in with Google
                        <FontAwesomeIcon icon={faGoogle} className="fs-5 ms-2" />
                    </Button>
                    <Button
                        outline
                        color='secondary'
                        className='appleSignin__button make-round p-2 px-4 mt-3'
                    >
                        Sign in with Apple
                        <FontAwesomeIcon icon={faApple} className="fs-5 ms-2" />
                    </Button>
                    <Button
                        outline
                        color='primary'
                        className='microsoftSignin__button make-round p-2 px-4 mt-3'
                    >
                        Sign in with Microsoft
                        <FontAwesomeIcon icon={faMicrosoft} className="fs-5 ms-2" />
                    </Button>
                    <Button
                        outline
                        color='danger'
                        className='yahooSignin__button make-round p-2 px-4 mt-3'
                    >
                        Sign in with Yahoo
                        <FontAwesomeIcon icon={faYahoo} className="fs-5 ms-2" />
                    </Button>
                    <Button
                        outline
                        color='dark'
                        className='githubSignin__button make-round p-2 px-4 my-3'
                    >
                        Sign in with Github
                        <FontAwesomeIcon icon={faGithub} className="fs-5 ms-2" />
                    </Button>
                </ModalBody>
            </Modal>
        </>
    )
}

export default LoginModal