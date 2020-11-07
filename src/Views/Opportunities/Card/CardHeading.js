import React from 'react';
import { Tag } from 'antd';
import { EllipsisOutlined, TagFilled } from '@ant-design/icons';
import { StyledCardHeading } from './Cards/styles';

const CardHeading = ({ tagColor, tagText }) => {
    return (
        <StyledCardHeading>
            <span style={{ flex: 1 }}>
                <Tag color={tagColor}>{tagText}</Tag>
            </span>
            <TagFilled title="bookmark" style={{ marginRight: 10, cursor: 'pointer' }} />
            <span><EllipsisOutlined title="menu" style={{ fontSize: 20, cursor: 'pointer' }} /></span>
        </StyledCardHeading>
    )
}

export default CardHeading;