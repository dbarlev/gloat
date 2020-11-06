import React, { useEffect, createContext, useContext } from "react";
import useAxios from 'axios-hooks';

export const GalleryContext = createContext();

export const GalleryProvider = props => {

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
        <GalleryContext.Provider value={{ totalImages, imagesLoading }}>
            {props.children}
        </GalleryContext.Provider>
    );
};

export const useGallery = () => {
    return useContext(GalleryContext);
}

