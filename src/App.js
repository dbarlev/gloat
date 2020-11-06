import React from 'react';
import { Router } from "@reach/router";
import Gallery from './Views/Gallery';
import Opportunities from './Views/Opportunities';
import { Layout } from 'antd';
import AppHeader from './Views/Header';
import styled from 'styled-components'
import { GlobalProvider } from './Context/Global';

const { Content } = Layout;

const StyledContent = styled(Content)`
  marginTop: 64;
  background: white;
`

function App() {
  return (
    <Layout>
      <GlobalProvider>
        <AppHeader />
        <StyledContent>
          <Router>
            <Opportunities path="/" />
            <Gallery path="gallery" />
          </Router>
        </StyledContent>
      </GlobalProvider>
    </Layout>
  );
}

export default App;
