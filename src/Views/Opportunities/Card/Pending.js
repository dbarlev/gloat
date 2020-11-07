import React from 'react';
import { PendingStyle } from './Cards/styles';

const Pending = ({ isWishlist }) => {
    return isWishlist ? <PendingStyle> PENDING </PendingStyle> : null;
}

export default Pending;