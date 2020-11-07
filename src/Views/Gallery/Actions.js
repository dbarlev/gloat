import React, { useState, useEffect } from 'react';
import { Card, Button } from 'antd';
import { COLORS } from '../../Shared/colors';
import styled from 'styled-components';
import { UndoOutlined } from '@ant-design/icons';
import { ToastSuccess } from '../../Components/Toast';

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
    background: ${COLORS.BLUE} !important;
    color: white !important;
    height: 40px;
`

const Actions = ({ img, editedImages, dispatchEditedImages, newTitle }) => {
    const [imgState, setImgState] = useState(false);
    const [imgTitle, setImageTitle] = useState(false);

    useEffect(() => {
        if (editedImages[img.id]) {
            setImgState(editedImages[img.id].editState);
            setImageTitle(editedImages[img.id].title);
        }
        else {
            setImgState(false);
            setImageTitle(false);
        }
    }, [editedImages])

    const revert = () => {
        dispatchEditedImages({ type: 'delete', id: img.id })
    }

    const save = () => {
        const saveImage = img;
        saveImage.title = imgTitle || img.title;
        console.log(saveImage);
        ToastSuccess(`Image ${img.id} saved successfully!`);
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
                                    title="revert"
                                    onClick={revert}
                                >
                                    <UndoOutlined style={{ color: 'white', fontSize: 20 }} />
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
                            onClick={save}
                        >
                            SAVE
                        </StyledButton>
                    </>
            }
        </ButtonsContainer>
    )
}

export default Actions;
