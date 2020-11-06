import React, { useState } from 'react';
import styled from 'styled-components';
import ProjectCard from './Cards/Project';
import NetworkCard from './Cards/Network';

const TYPES = {
    PROJECT: "project",
    NETWORKING: "networking"
}

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(3, 300px);
    grid-gap: 20px;
`

const Card = styled.div`
    border: 1px solid #f0f0f0;
    border-radius: 5px;
    height: 355px;
`

function Suggestions({ data, addToWishlist, liked }) {

    const filter = item => !liked.includes(item.id) && (item.type == TYPES.PROJECT || item.type === TYPES.NETWORKING);

    return (
        <Container>
            {
                data && data.filter(filter).map(item => (
                    <Card key={item.id}>
                        {
                            item.type == TYPES.PROJECT
                                ?
                                <ProjectCard addToWishlist={addToWishlist} item={item} />
                                :
                                <NetworkCard addToWishlist={addToWishlist} item={item} />
                        }
                    </Card>
                ))
            }
        </Container>
    );
}

export default Suggestions;
