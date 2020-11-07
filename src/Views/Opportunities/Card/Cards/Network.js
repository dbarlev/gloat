import React, { useState } from 'react';
import { Tag, Avatar } from 'antd';
import { COLORS } from '../../../../Shared/colors';
import { PushpinOutlined, EllipsisOutlined, TagFilled } from '@ant-design/icons';
import {
    Container,
    StyledCardHeading,
    Title,
    Location,
    PersonContainer
} from './styles';
import CardFooter from '../CardFooter';
import CardHeading from '../CardHeading';

const ProjectCard = ({ item, addToWishlist }) => {

    return (
        <Container>
            <CardHeading tagColor="gold" tagText={item.type.toUpperCase()} />
            <Title>Request a connection</Title>
            <Location>
                <span><PushpinOutlined /></span>
                <span>{item.location.name}</span>
            </Location>
            <PersonContainer>
                <Avatar style={{ backgroundColor: COLORS.PINK }} size={60}>DB</Avatar>
                <span>{item.name}</span>
                <span>{item.title}</span>
            </PersonContainer>
            <CardFooter addToWishlist={() => addToWishlist(item.id)} />
        </Container>
    )
}

export default ProjectCard;
