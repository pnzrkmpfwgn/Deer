import React, {Fragment} from 'react';

//Bootstrap
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from 'react-bootstrap/Button';

//react-router-dom
import {Link} from 'react-router-dom';

//Image
import deer from '../../assets/deer.png';

import DeerTalks from '../DeerTalks';

const About = () => {
  return (
    <Fragment>
      <Container>
        <Jumbotron style={{height: '100vh'}}>
          <h1
            style={{
              color: 'rgb(166, 150, 110)',
              fontWeight: 'bold',
              fontSize: '48px',
            }}
          >
            {' '}
            About website{' '}
          </h1>

          <p style={{fontSize: '22px'}}>
            {' '}
            I know the concept may look weird but, in Turkey we use the phrase
            "making a deer talk" which means talking about useless things for
            fun. Moreover, website's main objective is to make people chat with
            each other. Maybe chat about very useless things and relieve stress.{' '}
          </p>
          <Row className='align-items-center'>
            <Col className='d-flex justify-content-end'>
              {' '}
              <img
                style={{width: '30%', height: '100%'}}
                src={deer}
                alt='deer'
              />{' '}
            </Col>
            <Col>
              <DeerTalks />{' '}
              <Link style={{textDecoration: 'none'}} to='/'>
                <Button
                  style={{
                    backgroundColor: 'rgb(166, 150, 110)',
                    borderColor: 'rgb(166, 150, 110)',
                  }}
                >
                  {' '}
                  Back{' '}
                </Button>{' '}
              </Link>
            </Col>
          </Row>
        </Jumbotron>
      </Container>
    </Fragment>
  );
};

export default About;
