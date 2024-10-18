import React, { useState } from 'react';
import WeatherNavbar from './components/navbar/WeatherNavbar';
import { Route, Router, Routes } from 'react-router-dom';
import Home from './pages/Home';


const App = () => {
  const [city, setCity] = useState('Bhopal');

  const handleSearch = (e) => {
    e.preventDefault();
    // Handle city search logic here
    console.log(`Searching for weather in ${city}`);
  };

  return (
    <div>
      <WeatherNavbar  city={city} setCity={setCity} handleSearch={handleSearch} />
      <Routes>
         <Route path='/' element={<Home></Home>}></Route>
      </Routes>
      {/* Other components like weather display will go here */}
    </div>
  );
};

export default App;
