import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader, Progress } from 'reactstrap';

function LoginModal() {
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    return (
        <>
            <Button outline className='header__joinNowButton shadow-none border-0'
                onClick={() => setIsLoginModalOpen(isLoginModalOpen ? false : true)}
            >Join Now</Button>
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
                        className='createWurker__button p-2 px-4 mt-0'
                    >
                        Login with Google
                    </Button>
                    <Button
                        outline
                        color='secondary'
                        className='createWurker__button p-2 px-4 mt-3'
                    >
                        Login with Apple
                    </Button>
                </ModalBody>
                <ModalFooter className='d-inline py-1 text-center'>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default LoginModal