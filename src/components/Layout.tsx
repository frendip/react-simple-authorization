import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from './NavBar';
import Container from 'react-bootstrap/Container';

const Layout = () => {
  return (
    <div>
      <NavBar />
      <Container style={{ maxWidth: '50%', margin: '20px auto' }}>
        <Outlet />
      </Container>
    </div>
  );
};

export default Layout;
