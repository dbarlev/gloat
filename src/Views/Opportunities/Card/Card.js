import React, { useState } from 'react';
import ProjectCard from './Cards/Project';
import NetworkCard from './Cards/Network';
import styled from 'styled-components';

const TYPES = {
    PROJECT: "project",
    NETWORKING: "networking"
}

const Container = styled.div`
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    height: 375px;
`

function Card({ addToWishlist, item }) {

    return (
        <Container>
            {
                item && item.type == TYPES.PROJECT
                    ?
                    <ProjectCard addToWishlist={addToWishlist} item={item} />
                    :
                    <NetworkCard addToWishlist={addToWishlist} item={item} />
            }
        </Container>
    );
}

export default Card;
