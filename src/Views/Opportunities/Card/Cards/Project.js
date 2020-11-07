import React, { useState } from 'react';
import {
    Container,
    Title,
    SubTitle,
    CoverImage,
} from './styles';
import CardFooter from '../CardFooter';
import CardHeading from '../CardHeading';
import Pending from '../Pending';

const ProjectCard = ({ item, addToWishlist }) => {

    return (
        <Container>
            <Pending isWishlist={!addToWishlist} />
            <div style={{ padding: 15, height: '100%', display: 'grid' }}>
                <CardHeading tagColor="geekblue" tagText={item.type.toUpperCase()} />
                <Title>{item.title.toUpperCase()}</Title>
                <SubTitle>{item.project.name.toUpperCase()}</SubTitle>
                <div>
                    <CoverImage src={item.project.coverImage} />
                </div>
                <CardFooter isWishlist={!addToWishlist} addToWishlist={() => addToWishlist(item.id)} />
            </div>
        </Container>
    )
}

export default ProjectCard;
