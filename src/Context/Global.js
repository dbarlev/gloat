import React, { useEffect, createContext, useContext } from "react";
import useAxios from 'axios-hooks';

export const GlobalContext = createContext();

export const GlobalProvider = props => {

    const [{ data: totalImages, loading: imagesLoading, error }, getImages] = useAxios(
        {
            url: 'https://jsonplaceholder.typicode.com/photos',
            method: 'GET'
        },
        { manual: true }
    )

    useEffect(() => {
        getImages();
    }, [])

    return (
        <GlobalContext.Provider value={{ totalImages, imagesLoading }}>
            {props.children}
        </GlobalContext.Provider>
    );
};

export const useGlobal = () => {
    return useContext(GlobalContext);
}

