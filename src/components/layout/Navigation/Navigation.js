import React from 'react';

//Bootstrap
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';

import classes from './Navigation.module.css';

const Navigation = () => {
  return (
    <Navbar className={classes.bg_brown} variant='dark'>
      <Navbar.Brand href='#home'>DeerTalks</Navbar.Brand>
      <Nav className='mr-auto'>
        <Nav.Link href='/about'>About</Nav.Link>{' '}
      </Nav>
    </Navbar>
  );
};

export default Navigation;
