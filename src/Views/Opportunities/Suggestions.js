import React, { useState } from 'react';
import { Row, Col } from 'antd';
import Card from './Card/Card';

const TYPES = {
    PROJECT: "project",
    NETWORKING: "networking"
}

function Suggestions({ data, addToWishlist, liked }) {

    const filter = item => !liked.includes(item.id) && (item.type == TYPES.PROJECT || item.type === TYPES.NETWORKING);

    return (
        <Row gutter={[16, 16]}>
            {
                data && data.filter(filter).map(item => (
                    <Col key={item.id} xs={24} sm={24} md={12} lg={12} xxl={6} xl={8}>
                        <Card addToWishlist={addToWishlist} item={item} />
                    </Col>
                ))
            }
        </Row>
    );
}

export default Suggestions;
