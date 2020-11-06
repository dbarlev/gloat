import React, { useState } from 'react';
import styled from 'styled-components';
import { Tag, Button, Avatar } from 'antd';
import { COLORS } from '../../../Shared/colors';
import { LikeFilled, DislikeFilled, PushpinOutlined, EllipsisOutlined, TagFilled } from '@ant-design/icons';
import {
    Container,
    CardHeading,
    Title,
    Location,
    CardFooter,
    MoreDetails
} from './styles';

const PersonContainer = styled.div`
    border: 1px solid #f0f0f0;
    width: 270px;
    height: 145px;
    display: grid;
    justify-content: center;
    align-items: center;
`

const ProjectCard = ({ item, addToWishlist }) => {

    return (
        <Container>
            <CardHeading>
                <span style={{ flex: 1 }}>
                    <Tag color="gold">{item.type.toUpperCase()}</Tag>
                </span>
                <TagFilled style={{ marginRight: 10, cursor: 'pointer' }} />
                <span>
                    <EllipsisOutlined style={{ fontSize: 20, cursor: 'pointer' }} />
                </span>
            </CardHeading>
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
            <CardFooter>
                <MoreDetails>MORE DETAILS</MoreDetails>
                <div>
                    <Button style={{ border: 'none' }}>
                        <DislikeFilled />
                    </Button>
                    <Button onClick={() => addToWishlist(item.userId)} style={{ background: '#717BB6', borderRadius: 7 }} >
                        <LikeFilled style={{ color: 'white' }} />
                    </Button>
                </div>
            </CardFooter>
        </Container>
    )
}

export default ProjectCard;
