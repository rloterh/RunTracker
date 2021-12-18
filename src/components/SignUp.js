import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { signUserUp } from '../actions';

const SignUp = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    const userInfo = {
      username,
      password,
    };
    return dispatch(signUserUp(userInfo));
  };

  return (
    <div>
      <div>
        <h1>Run Tracker</h1>
      </div>
      <div>
        <form
          onSubmit={onSubmit}
        >
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <input
            type="submit"
            value="Sign Up"
          />
        </form>
      </div>
    </div>
  );
};

export default SignUp;
