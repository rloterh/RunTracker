import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Login from './Login';
import SignUp from './SignUp';
import Home from './Home';

const App = () => {
  const users = useSelector((state) => state.user);
  const [showLogin, setShowLogin] = useState(false);
  return (
    <div>
      {!users.loggedIn ? (
        <section>
          <div>{showLogin === false ? <Login /> : <SignUp />}</div>
          <div>
            {showLogin === false ? (
              <button type="button" onClick={() => setShowLogin(true)}>
                <p>
                  Don&apos;t have an account? Sign Up
                </p>
              </button>
            ) : (
              <button type="button" onClick={() => setShowLogin(false)}>
                <p>
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
