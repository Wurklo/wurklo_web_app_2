import React, { useState } from 'react';
import { Button, Col, FormGroup, Input, Label, Modal, ModalBody, ModalFooter, ModalHeader } from 'reactstrap';
import FilterListIcon from '@mui/icons-material/FilterList';


function FilterSearchResults({ setNameFilter, setRateFilter }) {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [tempNameFilter, setTempNameFilter] = useState('');
    const [tempRateFilter, setTempRateFilter] = useState('');


    const handleApplyFilter = () => {
        setNameFilter(tempNameFilter)
        setRateFilter(tempRateFilter === 'Lowest Rate' ? 'asc' : 'desc')
        setIsModalOpen(false)
    }
    return (
        <>
            <FilterListIcon
                className='filterSearchResults__searchFilterIcon text-secondary'
                onClick={() => setIsModalOpen(isModalOpen ? false : true)}
            />

            <Modal
                className='createWurker__modal'
                scrollable
                size="lg"
                isOpen={isModalOpen}
                toggle={() => setIsModalOpen(isModalOpen ? false : true)}
            >
                <ModalHeader className='p-2 ms-2 ms-lg-0 p-lg-3' toggle={() => setIsModalOpen(false)}>
                    <p className='text-secondary m-0'><strong>Filter Results</strong></p>
                </ModalHeader>
                <ModalBody className=' pt-0'>
                    <Col className="createWurker text-center mt-0 mx-auto">
                        {/* <FormGroup>
                            <Input
                                className='search__input shadow mt-4'
                                id="nameSelect"
                                name="name"
                                type="select"
                                value={tempNameFilter}
                                onChange={e => setTempNameFilter(e.target.value)}
                            >
                                <option disabled>
                                    Name
                                </option>
                                <option>
                                    asc
                                </option>
                                <option>
                                    desc
                                </option>
                            </Input>
                        </FormGroup> */}
                        <FormGroup>
                            <Input
                                className='search__input shadow mt-4'
                                id="rateSelect"
                                name="rate"
                                type="select"
                                value={tempRateFilter}
                                onChange={e => setTempRateFilter(e.target.value)}
                            >
                                <option disabled>
                                    Rate
                                </option>
                                <option>
                                    Lowest Rate
                                </option>
                                <option>
                                    Highest Rate
                                </option>
                            </Input>
                        </FormGroup>
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