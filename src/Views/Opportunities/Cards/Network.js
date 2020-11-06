import React, { useState } from 'react';
import styled from 'styled-components';
import { Tag } from 'antd';

const CardHeading = styled.div`
    display: flex;
    padding: 15px;
`

const ProjectCard = ({ item }) => {

    return (
        <>
            <CardHeading>
                <span style={{ flex: 1 }}>
                    <Tag color="magenta">{item.type.toUpperCase()}</Tag>
                </span>
                <span>MORE</span>
            </CardHeading>
            <div>Request a connection</div>
            <div>{item.location.name}</div>
        </>
    )
}

export default ProjectCard;
