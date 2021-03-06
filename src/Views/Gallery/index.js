import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGallery } from '../../Context/Gallery';
import Pagniate from '../../Components/Paginiation';
import ImageCard from './ImageCard';
import { Spinner } from '../../Components/Spinner';
import { Row, Col } from 'antd';

const Container = styled.div`
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 3%;
    margin-bottom: 20px;
`

const Gallery = () => {
    const maxPerPage = 12;
    const { totalImages, imagesLoading, editedImages, dispatchEditedImages } = useGallery();
    const [images, setImages] = useState([]);

    useEffect(() => {
        if (totalImages) {
            setImages(totalImages.slice(0, maxPerPage));
        }
    }, [totalImages])

    return (
        <Container>
            {
                imagesLoading
                    ?
                    <Spinner size="large" />
                    :
                    <>
                        {!!images.length &&
                            <Pagniate dataCollection={totalImages} setCurrentData={setImages} maxPerPage={maxPerPage}>
                                <Row justify="center" gutter={[16, 16]}>
                                    {
                                        images.map(img => (
                                            <Col key={img.id} sm={24} md={12} lg={10} xxl={8} xl={8}>
                                                <ImageCard editedImages={editedImages} dispatchEditedImages={dispatchEditedImages} img={img} />
                                            </Col>
                                        ))
                                    }
                                </Row>
                            </Pagniate>
                        }
                    </>
            }
        </Container>
    );
}

export default Gallery;
