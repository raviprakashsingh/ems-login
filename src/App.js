import React, { useState } from 'react';
import './App.css';
import CompanyImage from './img/company.jpg';
import { Typography, Divider, TextField, Button } from '@material-ui/core';

const sectionStyle = {
  height: '100vh',
  background: `url('${CompanyImage}')`,
  backgroundRepeat: 'no-repeat',
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'center',
};

const style = {
  marginLeft: '10px',
  marginRight: '10px',
  marginTop: '150px',
  borderRadius: '10px',
  background: '#fff',
  color: 'rgba(35, 42, 61)',
  maxWidth: '400px',
  padding: '25px',
};

function App() {
  const [userName, setUserName] = useState('');
  const [userPassword, setUserPassword] = useState('');

  const login = (e) => {
    e.preventDefault();
    const data = { userName, userPassword };
  };

  return (
    <div style={sectionStyle}>
      <div style={style}>
        <Typography variant='h3' align='center'>
          User Login
        </Typography>
        <Divider
          variant='fullWidth'
          style={{
            height: '3px',
            background: 'rgba(35, 42, 61)',
            marginTop: '10px',
          }}
        />
        <form onSubmit={login}>
          <TextField
            label='Username'
            fullWidth={true}
            value={userName}
            onChange={(e) => {
              setUserName(e.target.value);
            }}
            style={{ marginTop: '30px' }}
          />
          <TextField
            label='Password '
            fullWidth={true}
            value={userPassword}
            onChange={(e) => {
              setUserPassword(e.target.value);
            }}
            style={{ marginTop: '10px' }}
          />
          <Button
            size='large'
            variant='contained'
            style={{
              marginTop: '30px',
              background: 'rgba(35, 42, 61)',
              fontSize: '1.2rem',
              color: '#fff',
              width: '100%',
            }}
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
}

export default App;
