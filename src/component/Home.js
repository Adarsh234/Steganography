// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <div>
      <h2>Welcome to Your Steganography Website</h2>
      <p>Choose the option you want to perform:</p>
      <nav>
        <ul>
          <li><Link to="/encode">Encode</Link></li>
          <li><Link to="/decode">Decode</Link></li>
        </ul>
      </nav>
    </div>
  );
}

export default Home;
