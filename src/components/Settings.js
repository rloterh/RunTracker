import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { logUserOut } from '../actions';

const Settings = () => {
  const users = useSelector((state) => state.user);
  const dispatch = useDispatch();

  return (
    <div className="bg-gray-200 bg-opacity-80 h-screen">
      <div className="p-4 bg-sblue text-white font-sans w-full text-center">
        <h1 className="text-2xl font-black">Settings</h1>
      </div>
      <div className="bg-white shadow-md borer-b p-5 text-center">
        <h2 className="text-2xl font-mono text-green-600">{users.data.user.username}</h2>
      </div>
      <button className="p-5 text-gray-500 border-b shadow-md w-full" type="button" onClick={() => dispatch(logUserOut())}>
        <div className="flex items-center space-x-2">
          <svg className="h-9" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><g data-name="Layer 2"><path d="M7 6a1 1 0 000-2H5a1 1 0 00-1 1v14a1 1 0 001 1h2a1 1 0 000-2H6V6zm13.82 5.42l-2.82-4a1 1 0 00-1.39-.24 1 1 0 00-.24 1.4L18.09 11H10a1 1 0 000 2h8l-1.8 2.4a1 1 0 00.2 1.4 1 1 0 00.6.2 1 1 0 00.8-.4l3-4a1 1 0 00.02-1.18z" data-name="log-out" /></g></svg>
          <p>Log out</p>
        </div>
      </button>
    </div>
  );
};

export default Settings;
