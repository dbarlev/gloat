import React from 'react';
import { Layout } from 'antd';
import AppHeader from './Views/Header';
import styled from 'styled-components'
import { GalleryProvider } from './Context/Gallery';
import MainRoutes from './Routes';

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
          <MainRoutes />
        </GalleryProvider>
      </StyledContent>
    </Layout>
  );
}

export default App;
