import React from 'react';
import { BrowserRouter as Router, Route, Routes,} from 'react-router-dom';
import Encode from './component/Encoder';
import Decode from './component/Decoder';
import Header from './component/Header';
import Home from './component/Home';
import Login from './component/Login'
import Register from './component/Register'
import UploadImage from './component/ImageUpload'

function App() {
  return (
    <Router>
      <Header />
      <div className="container">
        <Routes>
          <Route path='/' exact element={<Home/>}/>
          <Route path='/login' Component={Login}/>
          <Route path='/register' element={<Register/>}/>
          <Route path='/upload-image' Component={UploadImage}/>
          <Route className='btn' path="/encode" element={<Encode />} />
          <Route className='btn' path="/decode" element={<Decode />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
