import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ToastContainer } from 'react-toastify';
import Login from './Login';
import SignUp from './SignUp';
import { fetchSprint } from '../actions';
import Home from './Home';

const App = () => {
  const users = useSelector((state) => state.user);
  const sprints = useSelector((state) => state.sprint);
  const [showLogin, setShowLogin] = useState(false);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchSprint(sprints));
  }, []);

  return (
    <div className="h-screen w-full">
      <ToastContainer />
      {!users.loggedIn ? (
        <section>
          <div>{showLogin === false ? <Login /> : <SignUp />}</div>
          <div className="fixed bottom-3 text-center font-sans w-full">
            {showLogin === false ? (
              <button type="button" onClick={() => setShowLogin(true)}>
                <p className="mx-auto hover:underline font-bold text-blue-400">
                  Don&apos;t have an account? Sign Up
                </p>
              </button>
            ) : (
              <button type="button" onClick={() => setShowLogin(false)}>
                <p className="mx-auto hover:underline font-bold text-blue-400">
                  Have an account? Login
                </p>
              </button>
            )}
          </div>
        </section>
      ) : (
        <Home />
      )}
    </div>
  );
};

export default App;
