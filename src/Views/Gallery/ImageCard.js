import React, { useState, useEffect } from 'react';
import { Card, Button, Input } from 'antd';
import LazyLoad from 'react-lazyload';

const { Meta } = Card;

const ImageCard = ({ img }) => {

    const [editMode, setEditMode] = useState({});

    return (
        <LazyLoad key={img.id} height={200}>
            <Card
                hoverable
                style={{ width: 300 }}
                cover={<img alt="example" src={img.url} />}
                actions={[
                    <Button
                        onClick={() => setEditMode({ ...editMode, [img.id]: img.title })}
                    >EDIT</Button>,
                    <Button>SAVE</Button>,
                    <Button>REVERT</Button>,
                ]}
            >
                <Meta title={
                    editMode[img.id]
                        ?
                        <Input
                            onChange={(value) => setEditMode({ ...editMode, [img.id]: value })}
                        />
                        :
                        img.title
                } description={img.id} />
            </Card>
        </LazyLoad>
    );
}

export default ImageCard;
