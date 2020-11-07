import React, { useState, useEffect } from 'react';
import { Card, Input } from 'antd';
import LazyLoad from 'react-lazyload';
import Actions from './Actions';

const { Meta } = Card;

const ImageCard = ({ img, editedImages, dispatchEditedImages }) => {

    const [newTitle, setNewTitle] = useState(img.title);

    useEffect(() => {
        if (editedImages[img.id] && editedImages[img.id].title) {
            setNewTitle(editedImages[img.id].title)
        }
        else {
            setNewTitle(img.title)
        }
    }, [editedImages])

    return (
        <LazyLoad height={200}>
            <Card
                bodyStyle={{ padding: 0 }}
                hoverable
                cover={<img alt="example" src={img.url} />}
            >
                <Meta
                    style={{ padding: 10 }}
                    title={
                        editedImages[img.id] && editedImages[img.id].editState
                            ?
                            <Input
                                value={newTitle}
                                onChange={(e) => setNewTitle(e.target.value)}
                            />
                            :
                            editedImages[img.id] && editedImages[img.id].title || img.title
                    }
                    description={img.id}
                />
                <Actions
                    newTitle={newTitle}
                    img={img}
                    editedImages={editedImages}
                    dispatchEditedImages={dispatchEditedImages}
                />
            </Card>
        </LazyLoad>
    );
}

export default ImageCard;
