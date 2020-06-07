import React, {Fragment, useState} from 'react';

//Bootstrap
import Form from 'react-bootstrap/Form';
import Dropdown from 'react-bootstrap/Dropdown';
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import Row from 'react-bootstrap/Row';

//react-router-dom
import {Link} from 'react-router-dom';

const Login = () => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');

  const Handle = (e) => {
    setRoom(e);
  };

  return (
    <Fragment>
      <Row className='d-flex justify-content-lg-end'>
        <Card style={{width: '25rem', marginTop: '100px', marginLeft: '50px'}}>
          <Card.Title style={{color: 'rgb(166, 150, 110)', fontWeight: 'bold'}}>
            {' '}
            Login and start to chat{' '}
          </Card.Title>
          <Card.Body>
            {' '}
            <Form>
              <Form.Group controlId='login'>
                <Form.Label> Username</Form.Label>
                <Form.Control
                  type='name'
                  placeholder='Enter username'
                  autoComplete='off'
                  onChange={(event) => setName(event.target.value)}
                />
              </Form.Group>

              <Form.Group>
                <Dropdown onSelect={Handle}>
                  <Dropdown.Toggle
                    id='dropdownbasic'
                    style={{
                      backgroundColor: 'rgb(166, 150, 110)',
                      borderColor: 'rgb(166, 150, 110)',
                    }}
                  >
                    Room
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    <Dropdown.Item eventKey='Room1'>Room 1</Dropdown.Item>
                    <Dropdown.Item eventKey='Room2'>Room 2</Dropdown.Item>
                    <Dropdown.Item eventKey='Room3'>Room 3</Dropdown.Item>
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>

              <Link
                onClick={(event) =>
                  !name || !room ? event.preventDefault() : null
                }
                to={`/chat?name=${name}&room=${room}`}
                style={{textDecoration: 'none'}}
              >
                <Button
                  style={{
                    backgroundColor: 'rgb(166, 150, 110)',
                    borderColor: 'rgb(166, 150, 110)',
                  }}
                  type='submit'
                >
                  Login
                </Button>
              </Link>
            </Form>
          </Card.Body>
        </Card>
      </Row>
    </Fragment>
  );
};

export default Login;
