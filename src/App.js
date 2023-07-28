import { Button } from 'react-bootstrap';
import './App.css';
import Footer from './Components/Footer';
import Share from './Components/Share';
import React, { useState, useEffect } from 'react';

function App() {
  const [songData, setsongData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/shares")
      .then(response => response.json())
      .then(data => setsongData(data))
      .catch(error => console.error(error));
  }, []);
  return (
<>
<Share />
<Footer />
</>
  );
}

export default App;
