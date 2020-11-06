import React, { useState } from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';
import { LikeOutlined, DislikeOutlined } from '@ant-design/icons';

const CardHeading = styled.div`
    display: flex;
    padding: 15px;
`

const ProjectCard = ({ item, addToWishlist }) => {

    return (
        <>
            <CardHeading>
                <span style={{ flex: 1 }}>
                    <Tag color="magenta">{item.type.toUpperCase()}</Tag>
                </span>
                <span>MORE</span>
            </CardHeading>
            <div>{item.title.toUpperCase()}</div>
            <div>{item.project.name.toUpperCase()}</div>
            <div onClick={() => addToWishlist(item.id)}><LikeOutlined /></div>
        </>
    )
}

export default ProjectCard;
