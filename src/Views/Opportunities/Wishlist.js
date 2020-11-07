import React, { useState } from 'react';
import Card from './Card/Card';
import { Row, Col } from 'antd';

function Wishlist({ addToWishlist, liked, data }) {

    return (
        <Row gutter={[16, 16]}>
            {
                data && data.map(item => (
                    <Col key={item.id} sm={24} md={12} lg={12} xxl={6} xl={8}>
                        {
                            liked.includes(item.id)
                                ?
                                <Card addToWishlist={addToWishlist} item={item} />
                                :
                                null
                        }
                    </Col>
                ))
            }
        </Row>
    );
}

export default Wishlist;
