import React from 'react';
import { Avatar } from 'antd';
import { COLORS } from '../../../../Shared/colors';
import { PushpinOutlined } from '@ant-design/icons';
import {
    Container,
    Title,
    Location,
    PersonContainer,
    ContentContainer
} from './styles';
import CardFooter from '../CardFooter';
import CardHeading from '../CardHeading';
import Pending from '../Pending';

const ProjectCard = ({ item, addToWishlist }) => {

    return (
        <Container>
            <Pending isWishlist={!addToWishlist} />
            <ContentContainer style={{ gridTemplateRows: !addToWishlist ? '10% 7% 18% 50%' : '10% 7% 22% 10%' }}>
                <CardHeading tagColor="gold" tagText={item.type.toUpperCase()} />
                <Title>Request a connection</Title>
                <Location>
                    <span style={{ marginRight: 5 }}><PushpinOutlined /></span>
                    <span>{item.location.name}</span>
                </Location>
                <PersonContainer>
                    <Avatar style={{ backgroundColor: COLORS.PINK, justifySelf: 'center' }} size={60}>{item.firstName[0] + item.lastName[0]}</Avatar>
                    <span>{item.name}</span>
                    <span>{item.title}</span>
                </PersonContainer>
                <CardFooter isWishlist={!addToWishlist} addToWishlist={() => addToWishlist(item.id)} />
            </ContentContainer>
        </Container>
    )
}

export default ProjectCard;
