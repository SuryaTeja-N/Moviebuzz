
import React from 'react';

import { useEffect } from 'react';

// api key for movies : c211aa0a

const API_URL = 'https://www.omdbapi.com/?apikey=c211aa0a';


function App() {

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();
    console.log(data);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
     <h1>App </h1>
  );
}

export default App;
