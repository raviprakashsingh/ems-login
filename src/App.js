import React, { useState } from 'react';
import './App.css';
import CompanyImage from './img/company.jpg';
import {
  Typography,
  Divider,
  TextField,
  Button,
  Grid,
} from '@material-ui/core';
import Person from '@material-ui/icons/Person';
import Lock from '@material-ui/icons/Lock';

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
  background: 'rgba(255,255,255,.7)',
  color: 'rgba(35, 42, 61)',
  minWidth: '400px',
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
        <form onSubmit={login} style={{ width: '100%' }}>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
              <Person />
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <TextField
                label='Username'
                fullWidth={true}
                value={userName}
                onChange={(e) => {
                  setUserName(e.target.value);
                }}
                style={{ marginTop: '30px' }}
              />
            </Grid>
          </Grid>
          <Grid container spacing={1} alignItems='flex-end'>
            <Grid item>
              <Lock />
            </Grid>
            <Grid item style={{ flexGrow: 1 }}>
              <TextField
                label='Password '
                fullWidth={true}
                value={userPassword}
                onChange={(e) => {
                  setUserPassword(e.target.value);
                }}
                style={{ marginTop: '10px' }}
              />
            </Grid>
          </Grid>
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
