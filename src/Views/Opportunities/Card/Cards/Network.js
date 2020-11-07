import React, { useState } from 'react';
import { Tag, Avatar } from 'antd';
import { COLORS } from '../../../../Shared/colors';
import { PushpinOutlined, EllipsisOutlined, TagFilled } from '@ant-design/icons';
import {
    Container,
    Title,
    Location,
    PersonContainer
} from './styles';
import CardFooter from '../CardFooter';
import CardHeading from '../CardHeading';
import Pending from '../Pending';

const ProjectCard = ({ item, addToWishlist }) => {

    return (
        <Container>
            <Pending isWishlist={!addToWishlist} />
            <div style={{ padding: 15, height: '100%', display: 'grid' }}>
                <CardHeading tagColor="gold" tagText={item.type.toUpperCase()} />
                <Title>Request a connection</Title>
                <Location>
                    <span><PushpinOutlined /></span>
                    <span>{item.location.name}</span>
                </Location>
                <PersonContainer>
                <Avatar style={{ backgroundColor: COLORS.PINK, justifySelf: 'center' }} size={60}>{item.firstName[0] + item.lastName[0]}</Avatar>
                    <span>{item.name}</span>
                    <span>{item.title}</span>
                </PersonContainer>
                <CardFooter isWishlist={!addToWishlist} addToWishlist={() => addToWishlist(item.id)} />
            </div>
        </Container>
    )
}

export default ProjectCard;
