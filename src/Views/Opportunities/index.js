import React, { useState, useEffect, useCallback } from 'react';
import { Tabs } from 'antd';
import styled from 'styled-components'
import Suggestions from './Suggestions';
import useAxios from 'axios-hooks';
import Wishlist from './Wishlist';
import { Spinner } from '../../Components/Spinner';

const { TabPane } = Tabs;

const Container = styled.div`
    width: 60%;
    margin-left: 20%;
    margin-top: 3%;
`

function Opportunities() {
    const [liked, setLiked] = useState([]);

    const addToWishlist = useCallback(
        (id) => {
            if (!liked.includes(id)) {
                setLiked([...liked, id]);
            }
        },
        [liked],
    )

    const [{ data, loading, error }, getSuggestions] = useAxios(
        {
            url: 'https://run.mocky.io/v3/541a339f-7f5d-48fc-9216-4ab0ee1d2be6',
            method: 'GET'
        },
        { manual: true }
    )

    useEffect(() => {
        getSuggestions();
    }, [])

    return (
        <Container>
            <Tabs defaultActiveKey="1" size="large" style={{ marginBottom: 32 }}>
                <TabPane tab="SUGGESTIONS" key="1">
                    {
                        loading
                            ?
                            <Spinner size="large" />
                            :
                            <Suggestions data={data} liked={liked} addToWishlist={addToWishlist} />
                    }
                </TabPane>
                <TabPane tab="WISHLIST" key="2">
                    <Wishlist data={data} liked={liked} />
                </TabPane>
            </Tabs>
        </Container>
    );
}

export default Opportunities;
