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
    border: 1px solid lightgray;
    height: 300px;
`

function Wishlist({ addToWishlist, liked, data }) {

    return (
        <Container>
            {
                data && data.map(item => (
                    <>
                        {
                            liked.includes(item.id)
                                ?
                                <Card key={item.id}>
                                    {
                                        item.type == TYPES.PROJECT
                                            ?
                                            <ProjectCard addToWishlist={addToWishlist} item={item} />
                                            :
                                            <NetworkCard item={item} />
                                    }
                                </Card>
                                :
                                null
                        }
                    </>
                ))
            }
        </Container>
    );
}

export default Wishlist;
