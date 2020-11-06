import React, { useState, useEffect } from 'react';
import useAxios from 'axios-hooks';
import { Card, Spin, Pagination } from 'antd';
import LazyLoad from 'react-lazyload';
import styled from 'styled-components';
import { useGlobal } from '../../Context/Global';
import Pagniate from '../../Components/Paginiation';

const { Meta } = Card;

const Spinner = styled(Spin)`
    position: absolute;
    top: 45%;
    left: 50%;
`

const Container = styled.div`
    display: grid;
    grid-template-columns: repeat(4, 300px);
    margin-left: 30px;
    grid-gap: 20px;
    margin-left: 17%;
    margin-top: 3%;
    margin-bottom: 20px;
`

function Gallery() {
    const maxPerPage = 12;
    const { totalImages, imagesLoading } = useGlobal();
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

                                            <LazyLoad key={img.id} height={200}>
                                                <Card
                                                    hoverable
                                                    style={{ width: 240 }}
                                                    cover={<img alt="example" src={img.url} />}
                                                >
                                                    <Meta title="Europe Street beat" description="www.instagram.com" />
                                                </Card>
                                            </LazyLoad>
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
