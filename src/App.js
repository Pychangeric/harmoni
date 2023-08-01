import { Button } from 'react-bootstrap';
import './App.css';
import Footer from './Components/Footer';
import React, { useState, useEffect } from 'react';
import Share from './Components/Share'

function App() {
  const [songData, setsongData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/musics")
      .then(response => response.json())
      .then(data => setsongData(data))
      .catch(error => console.error(error));
  }, []);
  console.log(songData);
  return (
<>
<Share />
<Footer />
</>
  );
}

export default App;
