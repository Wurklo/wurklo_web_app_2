import React, { useState } from 'react';
import { Button, Col, Input, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';

function FilterSearchResults({nameFilter, setNameFilter}) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempNameFilter, setTempNameFilter] = useState('');


    const handleApplyFilter = () => {
        setNameFilter(tempNameFilter)
        setIsModalOpen(false)
    }
    return (
        <>
            <Button
                className='createWurker__button ms-2 shadow'
                outline
                onClick={() => setIsModalOpen(isModalOpen ? false : "isOpenCheckout")}
            >
                Filter Results
            </Button>
            <Modal
                className='createWurker__modal'
                fullscreen="md"
                scrollable
                size="lg"
                isOpen={isModalOpen}
                toggle={() => setIsModalOpen(isModalOpen ? false : "isOpenCheckout")}
            >
                <ModalHeader className='p-2 ms-2 ms-lg-0 p-lg-3' toggle={() => setIsModalOpen(false)}>
                    <h3 className='text-secondary m-0'><strong>Filter Results</strong></h3>
                </ModalHeader>
                <ModalBody className=' pt-0'>
                    <Col className="createWurker text-center mt-0 mx-auto">
                        <Input
                            className='search__input shadow mt-4'
                            placeholder="Name ..."
                            value={tempNameFilter}
                            onChange={e => setTempNameFilter(e.target.value)}
                        />
                    </Col>
                </ModalBody>
                <ModalFooter className='d-inline py-1 text-center'>
                    <Button
                        outline
                        color='primary'
                        onClick={handleApplyFilter}
                        className='createWurker__button p-2 px-4 mt-0 shadow'
                    >
                        Apply Filter
                    </Button>
                    <Button outline className='createWurker__button p-2 mt-0 shadow' onClick={() => setIsModalOpen(false)}>
                        Cancel
                    </Button>
                </ModalFooter>
            </Modal>
        </>
    )
}

export default FilterSearchResults