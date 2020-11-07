import React, { useState, useEffect } from 'react';
import { Card, Button, Input } from 'antd';
import LazyLoad from 'react-lazyload';
import { COLORS } from '../../Shared/colors';
import styled from 'styled-components';

const { Meta } = Card;
const { Grid } = Card;

const ButtonsContainer = styled(Grid)`
    display: flex;
    box-shadow: none;
    width: 100%;
    padding: 0px;
    margin-top: 10px;
`

const StyledButton = styled(Button)`
    width: 100%;
    background: ${COLORS.BLUE};
    color: white;
    height: 40px;
`

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
        <LazyLoad key={img.id} height={200}>
            <Card
                bodyStyle={{ padding: 0 }}
                hoverable
                cover={<img alt="example" src={img.url} />}
            >
                <Meta title={
                    editedImages[img.id] && editedImages[img.id].editState
                        ?
                        <Input
                            value={newTitle}
                            onChange={(e) => setNewTitle(e.target.value)}
                        />
                        :
                        editedImages[img.id] && editedImages[img.id].title || img.title
                } description={img.id} />
                <Actions newTitle={newTitle} img={img} editedImages={editedImages} dispatchEditedImages={dispatchEditedImages} />
            </Card>
        </LazyLoad >
    );
}

const Actions = ({ img, editedImages, dispatchEditedImages, newTitle }) => {
    const [imgState, setImgState] = useState(false);
    const [imgTitle, setImageTitle] = useState(false);

    useEffect(() => {
        if (editedImages[img.id]) {
            setImgState(editedImages[img.id].editState);
            setImageTitle(editedImages[img.id].title);
        }
    }, [editedImages])

    const revert = () => {
        dispatchEditedImages({ type: 'delete', id: img.id })
    }

    return (
        <ButtonsContainer>
            {
                imgState
                    ?
                    <StyledButton
                        onClick={() => dispatchEditedImages({ type: 'title', title: newTitle, id: img.id })}
                    >
                        UPDATE
                            </StyledButton>
                    :
                    <>
                        {
                            imgTitle
                                ?
                                <StyledButton
                                    onClick={revert}
                                >
                                    REVERT
                                </StyledButton>
                                :
                                <StyledButton
                                    onClick={() => dispatchEditedImages({ type: 'editState', state: true, id: img.id })}
                                >
                                    EDIT
                            </StyledButton>
                        }

                        <StyledButton
                            disabled={imgState}
                            onClick={() => console.log(img)}
                        >
                            SAVE
                        </StyledButton>
                    </>
            }
        </ButtonsContainer>
    )
}

export default ImageCard;
