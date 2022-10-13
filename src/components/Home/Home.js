import React, { useState } from 'react';

import BigImage from '../../components/BigImage';

import logo from '../../logo.svg';
import '../../App.css';

const Home = () => {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className='App'>
      <header className='App-header'>
        <img src={logo} className='App-logo' alt='logo' />
        <button onClick={() => setIsActive(true)}>Show Big Image</button>
        {isActive && <BigImage />}
      </header>
    </div>
  );
};

export default Home;
