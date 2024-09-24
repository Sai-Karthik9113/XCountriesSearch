import React, { useEffect, useState } from 'react';
import axios from 'axios';
import './App.css';
import Navbar from './Components/Search/Search';

function App() {
  const [countryData, setCountryData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get('https://restcountries.com/v3.1/all');
        setCountryData(res.data);
      } catch (error) {
        console.error("Error: ", error);
        setCountryData([]);
      }
    }

    fetchData();
  }, []);

  return (
    <div className="App">
      <Navbar data={countryData} />
    </div>
  );
}

export default App;
