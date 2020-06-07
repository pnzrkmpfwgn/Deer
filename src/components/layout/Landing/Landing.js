import React from 'react';

//Image
import Deer from '../../../assets/deer.png';

//Components
import Login from '../../login/Login';
import UselessFact from '../../Useless';

//Redux

//Bootstrap
import Container from 'react-bootstrap/Container';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

//utils
import randomGreeting from '../../../utils/RandomGreeting';

const greeting = randomGreeting();

const Landing = () => {
  return (
    <Container>
      <Row className='align-items-center'>
        <Col className='d-flex justify-content-end'>
          <img
            style={{height: '60%', width: '40%', marginTop: '20px'}}
            src={Deer}
            alt='deer'
          />
        </Col>
        <Col>
          <h1> {greeting} </h1>
          <h3> Did you know ? </h3>
          <UselessFact />
        </Col>

        <Login />
      </Row>
    </Container>
  );
};

export default Landing;
