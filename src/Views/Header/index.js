import React, { useEffect } from 'react';
import { Layout, Menu } from 'antd';
import { Link } from "@reach/router";
import styled from 'styled-components'
import { COLORS } from '../../Shared/colors';

const { Header } = Layout;

const StyledHeader = styled(Header)`
  z-index: 1;
  width: 100%;
  background: ${COLORS.PINK};
`

const StyledMenu = styled(Menu)`
  text-align: center;
  background: transparent !important;

  .ant-menu-item:hover{
    background-color: ${COLORS.ORANGE} !important;
  }

  .ant-menu-item-selected{
    background-color: ${COLORS.ORANGE} !important;
  }
`

function AppHeader() {

  const defaultKey = window.location.pathname === "/" ? "1" : "2";

  return (
    <StyledHeader>
      <StyledMenu theme="dark" mode="horizontal" defaultSelectedKeys={[defaultKey]}>
        <Menu.Item key="1"><Link to="/">OPPORTUNITIES</Link></Menu.Item>
        <Menu.Item key="2"><Link to="/gallery">GALLERY</Link></Menu.Item>
      </StyledMenu>
    </StyledHeader>
  );
}

export default AppHeader;
