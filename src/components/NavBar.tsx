import React, { ReactElement } from 'react';
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
import { Link, useLocation } from 'react-router-dom';
import { useAppDispatch } from '../hooks/useAppDispatch';
import { removeUser } from '../store/slices/userSlice';

const NavBar = () => {
  const dispatch = useAppDispatch();

  const menuButton = [
    <Link className={'btn btn-lg'} to="register">
      Регистрация
    </Link>,
    <Link className={'btn btn-lg'} to="login">
      Логин
    </Link>,
    <Link onClick={() => dispatch(removeUser())} className={'btn btn-lg'} to="login">
      Выйти
    </Link>,
  ];

  const { pathname: path } = useLocation();
  let currentButton: ReactElement | string = '';

  switch (path) {
    case '/login':
      currentButton = (
        <Link className={'btn btn-lg'} to="register">
          Регистрация
        </Link>
      );
      break;
    case '/register':
      currentButton = (
        <Link className={'btn btn-lg'} to="login">
          Логин
        </Link>
      );
      break;
    case '/':
      currentButton = (
        <Link onClick={() => dispatch(removeUser())} className={'btn btn-lg'} to="login">
          Выйти
        </Link>
      );
      break;
    default:
      currentButton = '';
  }

  return (
    <Navbar expand="lg" style={{ background: 'rgba(221, 160, 221, 0.85)' }}>
      <Container className={'justify-content-center justify-content-md-between'}>
        <Link to="/" className={'text-decoration-none'}>
          <Navbar.Brand>React-Bootstrap</Navbar.Brand>
        </Link>
        {currentButton}
      </Container>
    </Navbar>
  );
};

export default NavBar;
