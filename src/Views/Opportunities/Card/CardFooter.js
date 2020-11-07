import React, { useState } from 'react';
import { Button } from 'antd';
import { LikeFilled, DislikeFilled, FrownOutlined } from '@ant-design/icons';
import { StyledCardFooter, MoreDetails } from './Cards/styles';

const CardFooter = ({ isWishlist, addToWishlist }) => {
    const [unLiked, setUnliked] = useState(false);

    return (
        <StyledCardFooter isWishlist={isWishlist}>
            <MoreDetails>MORE DETAILS</MoreDetails>
            {!isWishlist && !unLiked &&
                <div>
                    <Button style={{ border: 'none' }}>
                        <DislikeFilled onClick={() => setUnliked(true)} />
                    </Button>
                    <Button onClick={addToWishlist} style={{ background: '#717BB6', borderRadius: 7 }} >
                        <LikeFilled style={{ color: 'white' }} />
                    </Button>
                </div>
            }
            {unLiked &&
                <div>
                    <FrownOutlined onClick={() => setUnliked(false)} style={{ fontSize: 20, cursor: 'pointer' }} />
                </div>
            }
        </StyledCardFooter>
    )
}

export default CardFooter;