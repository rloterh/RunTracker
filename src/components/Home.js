import React from 'react';
import Footer from './Footer';
import Endpoints from '../endpoints';

const Home = () => (
  <>
    <main>
      <Endpoints />
    </main>
    <Footer home="/" feed="/feed" progress="/progress" settings="/settings" />
  </>
);

export default Home;
