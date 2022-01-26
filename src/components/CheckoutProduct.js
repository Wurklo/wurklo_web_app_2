import React from 'react';
import { Button, Col, Row } from 'reactstrap';
import { useStateValue } from '../redux/StateProvider';

function CheckoutProduct({ id, image, title, price, hideButton }) {
    // eslint-disable-next-line
    const [{basket}, dispatch] = useStateValue();

    const removeFromBasket = () => {
        // remove item from basket
        dispatch({
            type: 'REMOVE_FROM_BASKET',
            id: id
        })
    }
    return (
        <>
            <Row className='mb-2 d-flex justify-content-between'>
                <Col xs={3} lg={2}>
                    <img src={image} alt="product item" className="product-img" />
                </Col>
                <Col xs={3} lg={5} className='g-0 '>
                    <h4 className='fs-5 mt-1'>{title}</h4>
                </Col>
                <Col xs={5} lg={5} className='text-end'>
                    <h4>${price}</h4>
                    {!hideButton && (
                        <Button onClick={removeFromBasket}>Remove</Button>
                    )}
                </Col>
                <hr className='mt-3'/>
            </Row>
        </>
    )
}

export default CheckoutProduct;
