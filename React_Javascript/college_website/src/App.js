import logo from './logo.svg';

import 'bootstrap/dist/css/bootstrap.min.css';

import { BrowserRouter, Routes, Route } from 'react-router-dom';
import CampusFacilites from './pages/CampusFacilites';
import './App.css';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<CampusFacilites />} />
        <Route path='/home' element={<HomePage />} />

        <Route path='/aboutus' element={<AboutUs />} />


      </Routes>


    </BrowserRouter>
  );
}

export default App;
