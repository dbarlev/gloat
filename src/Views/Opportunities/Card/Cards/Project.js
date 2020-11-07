import React, { useState } from 'react';
import {
    Container,
    Title,
    SubTitle,
    CoverImage
} from './styles';
import CardFooter from '../CardFooter';
import CardHeading from '../CardHeading';

const ProjectCard = ({ item, addToWishlist }) => {

    return (
        <Container>
            <CardHeading tagColor="geekblue" tagText={item.type.toUpperCase()}/>
            <Title>{item.title.toUpperCase()}</Title>
            <SubTitle>{item.project.name.toUpperCase()}</SubTitle>
            <div>
                <CoverImage src={item.project.coverImage} />
            </div>
            <CardFooter addToWishlist={() => addToWishlist(item.id)} />
        </Container>
    )
}

export default ProjectCard;
