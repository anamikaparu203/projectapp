import React, { useState } from 'react';
import TextField from '@mui/material/TextField';
import { Button } from '@mui/material';

const Login = () => {
  const [user, setUser] = useState({
    Username: '',
    password: ''
  });

  const updateUser = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const sendData = () => {
    if (user.Username === 'admin' && user.password === '123') {
      alert('Login successful!');
      // You can add further actions here, like redirecting the user
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <>
      <div>Login</div>
      <TextField
        required
        id="outlined-helperText"
        label="Username"
        name="Username"
        value={user.Username}
        onChange={updateUser}
      />
      <br />
      <br />
      <TextField
        required
        id="outlined-required"
        label="password"
        type="password"
        name="password"
        value={user.password}
        onChange={updateUser}
      />
      <br />
      <Button variant="text" onClick={sendData}>Submit</Button>
    </>
  );
};

export default Login;

