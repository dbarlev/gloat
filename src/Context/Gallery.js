import React, { useEffect, createContext, useContext, useReducer } from "react";
import useAxios from 'axios-hooks';

export const GalleryContext = createContext();

function editedImagesReducer(state, action) {
    switch (action.type) {
        case 'editState':
            return { ...state, [action.id]: { editState: action.state } };
        case 'title':
            return { ...state, [action.id]: { title: action.title } };
        case 'delete':
            delete state[action.id];
            return { ...state };
        default:
            return { ...state };
    }
}

export const GalleryProvider = props => {
    const [editedImages, dispatchEditedImages] = useReducer(editedImagesReducer, {});
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
        <GalleryContext.Provider value={{ totalImages, imagesLoading, editedImages, dispatchEditedImages }}>
            {props.children}
        </GalleryContext.Provider>
    );
};

export const useGallery = () => {
    return useContext(GalleryContext);
}

