import React, { useState } from 'react';
import styled from 'styled-components';
import { Tag, Card, Button } from 'antd';
import { LikeFilled, DislikeFilled, EllipsisOutlined, TagFilled } from '@ant-design/icons';
import {
    Container,
    CardHeading,
    Title,
    SubTitle,
    CoverImage,
    CardFooter,
    MoreDetails
} from './styles';

const ProjectCard = ({ item, addToWishlist }) => {

    return (
        <Container>
            <CardHeading>
                <span style={{ flex: 1 }}>
                    <Tag color="geekblue">{item.type.toUpperCase()}</Tag>
                </span>
                <TagFilled style={{ marginRight: 10, cursor: 'pointer' }} />
                <span><EllipsisOutlined style={{ fontSize: 20, cursor: 'pointer' }} /></span>
            </CardHeading>
            <Title>{item.title.toUpperCase()}</Title>
            <SubTitle>{item.project.name.toUpperCase()}</SubTitle>
            <div>
                <CoverImage src={item.project.coverImage} />
            </div>
            <CardFooter>
                <MoreDetails>MORE DETAILS</MoreDetails>
                <div>
                    <Button style={{ border: 'none' }}>
                        <DislikeFilled />
                    </Button>
                    <Button onClick={() => addToWishlist(item.id)} style={{ background: '#717BB6', borderRadius: 7 }} >
                        <LikeFilled style={{ color: 'white' }} />
                    </Button>
                </div>
            </CardFooter>
        </Container>
    )
}

export default ProjectCard;
