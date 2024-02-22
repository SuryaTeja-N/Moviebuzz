
import React from 'react';

import './App.css';
import SearchIcon from './search.svg';

import { useEffect , useState } from 'react';

import MovieCard from './MovieCard';

// api key for movies : c211aa0a

const API_URL = 'https://www.omdbapi.com/?apikey=c211aa0a';


function App() {

  const [movies, setMovies] = useState([]);

  const [searchTerm, setSearchTerm] = useState('');

  const searchMovies = async (title) => {
    const response = await fetch(`${API_URL}&s=${title}`);
    const data = await response.json();

    setMovies(data.Search);
  }

  useEffect(() => {
    searchMovies('spiderman');
  }, []);

  return (
     <div className="app">
       <h1>Moviebuzz</h1>

        {/* now lets add a search bar */}

        <div className="search">
          <input
            placeholder="Search for movies"
            value= {searchTerm}
            onChange={(event) => setSearchTerm(event.target.value)}
          />
          <img
            src={SearchIcon}
            alt="search"
            onClick={() => searchMovies(searchTerm)}
          />
        </div>

        {/* movies will be listed here */}
        
        { movies?.length >0 ? (
          <div className="container">
            {movies.map((movie) => (
              <MovieCard movie={movie} />
            ))}
          </div>
        ) : (
          <div className="empty">
            <h2>No movies found</h2>
          </div>
        )}

     </div>
  );
}

export default App;
