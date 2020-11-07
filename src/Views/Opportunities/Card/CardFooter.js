import React from 'react';
import { Button } from 'antd';
import { LikeFilled, DislikeFilled } from '@ant-design/icons';
import { StyledCardFooter, MoreDetails } from './Cards/styles';

const CardFooter = ({ addToWishlist }) => {
    return (
        <StyledCardFooter>
            <MoreDetails>MORE DETAILS</MoreDetails>
            <div>
                <Button style={{ border: 'none' }}>
                    <DislikeFilled />
                </Button>
                <Button onClick={addToWishlist} style={{ background: '#717BB6', borderRadius: 7 }} >
                    <LikeFilled style={{ color: 'white' }} />
                </Button>
            </div>
        </StyledCardFooter>
    )
}

export default CardFooter;