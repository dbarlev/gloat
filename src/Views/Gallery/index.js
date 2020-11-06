import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useGallery } from '../../Context/Gallery';
import Pagniate from '../../Components/Paginiation';
import ImageCard from './ImageCard';
import { Spinner } from '../../Components/Spinner';
import { Row, Col } from 'antd';

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 300px);
    grid-gap: 20px;
    margin-left: 15%;
    margin-top: 3%;
    margin-bottom: 20px;
`

const Gallery = () => {
    const maxPerPage = 12;
    const { totalImages, imagesLoading } = useGallery();
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
                                <Container>
                                    {
                                        images.map(img => (
                                            <ImageCard img={img} />
                                        ))
                                    }

                                </Container>
                            </Pagniate>
                        }
                    </>
            }
        </Container>
    );
}

export default Gallery;
