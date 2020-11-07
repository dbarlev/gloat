import React from 'react';
import { PushpinOutlined } from '@ant-design/icons';
import {
    Container,
    Title,
    SubTitle,
    CoverImage,
    Location,
    ContentContainer
} from './styles';
import CardFooter from '../CardFooter';
import CardHeading from '../CardHeading';
import Pending from '../Pending';


const ProjectCard = ({ item, addToWishlist }) => {

    return (
        <Container>
            <Pending isWishlist={!addToWishlist} />
            <ContentContainer style={{ gridTemplateRows: !addToWishlist ? '10% 7% 6% 12% 50%' : '10% 9% 7% 13% 10%' }}>
                <CardHeading tagColor="geekblue" tagText={item.type.toUpperCase()} />
                <Title>{item.title.toUpperCase()}</Title>
                <SubTitle>{item.project.name.toUpperCase()}</SubTitle>
                <Location>
                    <span style={{ marginRight: 5 }}><PushpinOutlined /></span>
                    <span>{`${item.location ? item.location.name : 'Not available'}`}</span>
                </Location>
                <div>
                    <CoverImage src={item.project.coverImage} />
                </div>
                <CardFooter isWishlist={!addToWishlist} addToWishlist={() => addToWishlist(item.id)} />
            </ContentContainer>
        </Container>
    )
}

export default ProjectCard;
