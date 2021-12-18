import axios from 'axios';

const setUser = (payload) => ({ type: 'SET_USER', payload });

export const logUserOut = () => ({ type: 'LOG_OUT' });

export const getUser = (userInfo) => (dispatch) => {
  axios
    .post('http://localhost:3000/api/v1/login', userInfo)
    .then((response) => response)
    .then((data) => {
      localStorage.setItem('token', data.token);
      return dispatch(setUser(data.data));
    })
    .catch((error) => error);
};

export const signUserUp = (userInfo) => (dispatch) => {
  axios
    .post('http://localhost:3000/api/v1/users', userInfo)
    .then((response) => response)
    .then((data) => {
      localStorage.setItem('token', data.token);
      return dispatch(setUser(data.data));
    })
    .catch((error) => error);
};
