import React from 'react';
import { Router } from "@reach/router";
import Gallery from './Views/Gallery';
import Opportunities from './Views/Opportunities';
import { Layout } from 'antd';
import AppHeader from './Views/Header';
import styled from 'styled-components'
import { GalleryProvider } from './Context/Gallery';

const { Content } = Layout;

const StyledContent = styled(Content)`
  marginTop: 64;
  background: white;
`

function App() {
  return (
    <Layout>
      <AppHeader />
      <StyledContent>
        <GalleryProvider>
          <Router>
            <Opportunities path="/" />
            <Gallery path="gallery" />
          </Router>
        </GalleryProvider>
      </StyledContent>
    </Layout>
  );
}

export default App;
