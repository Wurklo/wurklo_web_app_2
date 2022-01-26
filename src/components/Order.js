import React from 'react';
import { Col, Row } from 'reactstrap';
import moment from 'moment'; // handy for timestamps
import CheckoutProduct from './CheckoutProduct';

function Order({ order }) {
    // const [shipped, setShipped] = useState(true);

    if (order) {
        return (
            <div>
                {console.log('order: ', order.data)}
                <Row className='mb-2' >
                    <Col xs={12} lg={7}>
                        <strong>Order information</strong>
                        <h6 className='text-black m-0'>{moment.unix(order.data.created).format('MM/DD/YYYY, h:mma')}</h6>
                        <h6 className='text-black m-0'>Order ID: {order.id}</h6>
                        <h6 className='text-black m-0'>Order Total: ${order.data.amount / 100}</h6>
                    </Col>
                    <Col className='text-lg-end'>
                        <strong>Shipping address</strong>
                        <h6 className='text-black m-0'>{order?.data.name}</h6>
                        <h6 className='text-black m-0'>{order?.data.streetAddress}</h6>
                        <h6 className='text-black m-0'>{order?.data.cityStateZip}</h6>
                    </Col>
                </Row >
                {order.data.basket?.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        image={item.image}
                        price={item.price}
                        rating={item.rating}
                        hideButton
                    />
                ))}
            </div>
        )
    } else {
        return <div>You have no orders yet</div>
    }
}

export default Order;
