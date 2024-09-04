// src/components/Home.js
import React from 'react';
import { Link } from 'react-router-dom';
import { Button} from '@mui/material';


export default function Home() {
  return (
    <div className="text">
      <h2>Welcome to Your Steganography Website</h2>
      <p>Choose the option you want to perform:</p>
      <nav>
        <ul>
          <li><Button variant="contained" ><Link to="/encode">Encode</Link></Button></li>
          <li><Button variant="contained" ><Link to="/decode">Decode</Link></Button></li>
        </ul>
      </nav>
    </div>
  );
}
