import React, { useState } from 'react';
import { Button } from 'antd';
import { LikeFilled, DislikeFilled, FrownOutlined } from '@ant-design/icons';
import { StyledCardFooter, MoreDetails } from './Cards/styles';
import { ToastCustom } from '../../../Components/Toast';

const CardFooter = ({ isWishlist, addToWishlist }) => {
    const [unLiked, setUnliked] = useState(false);

    const onUnlike = () => {
        setUnliked(true)
        ToastCustom("Sorry for that, keep going!", <FrownOutlined />);
    }

    return (
        <StyledCardFooter isWishlist={isWishlist}>
            <MoreDetails role="link">MORE DETAILS</MoreDetails>
            {!isWishlist && !unLiked &&
                <div>
                    <Button style={{ border: 'none' }}>
                        <DislikeFilled onClick={onUnlike} />
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