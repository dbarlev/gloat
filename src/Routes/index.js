import React from 'react';
import { Router } from "@reach/router";
import Gallery from '../Views/Gallery';
import Opportunities from '../Views/Opportunities';

function MainRoutes() {
    return (
        <Router>
            <Opportunities path="/" />
            <Gallery path="gallery" />
        </Router>
    );
}

export default MainRoutes;
