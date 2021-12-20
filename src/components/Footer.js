import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Footer = ({
  home, feed, progress, settings,
}) => (
  <footer className="bg-footer bg-opacity-80 bottom-0 fixed w-full flex justify-between shadow-md border-t border-blue-900">
    <div className="border-r w-1/4 flex items-center justify-center py-3">
      <Link to={home}>
        <svg className="h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <line x1="18" y1="20" x2="18" y2="10" />
          <line x1="12" y1="20" x2="12" y2="4" />
          <line x1="6" y1="20" x2="6" y2="14" />
        </svg>
      </Link>
    </div>
    <div className="w-1/4 flex items-center justify-center border-r">
      <Link to={feed}>
        <svg className="h-8" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <polyline points="23 6 13.5 15.5 8.5 10.5 1 18" />
          <polyline points="17 6 23 6 23 12" />
        </svg>
      </Link>
    </div>
    <div className="w-1/4 flex items-center justify-center border-r">
      <Link to={progress}>
        <svg className="h-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21.21 15.89A10 10 0 1 1 8 2.83" />
          <path d="M22 12A10 10 0 0 0 12 2v10z" />
        </svg>
      </Link>
    </div>
    <div className="w-1/4 flex items-center justify-center">
      <Link to={settings}>
        <svg xmlns="http://www.w3.org/2000/svg" className="h-8" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <circle cx="12" cy="12" r="1" />
          <circle cx="19" cy="12" r="1" />
          <circle cx="5" cy="12" r="1" />
        </svg>
      </Link>
    </div>
  </footer>
);

export default Footer;

Footer.defaultProps = {
  home: '',
  feed: '',
  progress: '',
  settings: '',
};

Footer.propTypes = {
  home: PropTypes.string,
  feed: PropTypes.string,
  progress: PropTypes.string,
  settings: PropTypes.string,
};
