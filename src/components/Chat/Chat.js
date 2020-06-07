import React, {useState, useEffect} from 'react';
import queryString from 'query-string';
import io from 'socket.io-client';
import {FontAwesomeIcon} from '@fortawesome/react-fontawesome';
import {faSignOutAlt, faPaperPlane} from '@fortawesome/free-solid-svg-icons';
import Button from 'react-bootstrap/Button';
import ScrollToBottom from 'react-scroll-to-bottom';
import Message from './Message';

import './Message.css';

import {Link} from 'react-router-dom';

let socket;

const Chat = ({location}) => {
  const [name, setName] = useState('');
  const [room, setRoom] = useState('');
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState([]);

  const ENDPOINT = 'https://deer-talks-application.herokuapp.com/';

  useEffect(() => {
    const {name, room} = queryString.parse(location.search);

    socket = io(ENDPOINT);

    setRoom(room);
    setName(name);

    socket.emit('join', {name, room}, () => {});

    return () => {
      socket.emit('disconnect');

      socket.off();
    };
  }, [ENDPOINT, location.search]);

  useEffect(() => {
    socket.on('message', (message) => {
      setMessages([...messages, message]);
    });
  }, [messages]);

  //Send messages
  const sendMessage = (event) => {
    event.preventDefault();
    if (message) {
      socket.emit('sendMessage', message, () => setMessage(''));
    }
  };

  return (
    <div
      style={{
        backgroundColor: 'rgb(166, 150, 110)',
        width: '100vw',
        height: '100vh',
        display: 'flex',
        justifyContent: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          height: '80vh',
          width: '50vw',
        }}
      >
        <div
          style={{
            backgroundColor: '#f4f4f4',
            width: '100%',
            height: '100%',
            borderRadius: '20px',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'space-between',
          }}
        >
          <div
            style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}
          >
            <p
              style={{
                width: '100%',
                textAlign: 'center',
              }}
            >
              {' '}
              {room}{' '}
            </p>
            <Link style={{textDecoration: 'none'}} to='/'>
              <FontAwesomeIcon
                style={{
                  marginTop: '10px',
                  marginRight: '10px',
                  cursor: 'pointer',
                }}
                title='Leave the chat'
                icon={faSignOutAlt}
              />
            </Link>{' '}
          </div>

          <div
            style={{
              backgroundColor: 'silver',
              height: '100%',
              overflow: 'scroll',
            }}
          >
            <ScrollToBottom className='css_root'>
              {messages.map((message, i) => (
                <div key={i}>
                  <Message message={message} name={name} />
                </div>
              ))}
            </ScrollToBottom>
          </div>

          <div style={{display: 'flex', flexDirection: 'row'}}>
            <input
              type='text'
              style={{
                display: 'flex',
                width: '100%',
              }}
              value={message}
              onChange={(event) => setMessage(event.target.value)}
              onKeyPress={(event) =>
                event.key === 'Enter' ? sendMessage(event) : null
              }
            />
            <Button style={{backgroundColor: 'silver'}}>
              <FontAwesomeIcon icon={faPaperPlane} />
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Chat;
