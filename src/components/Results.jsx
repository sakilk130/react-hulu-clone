import axios from '../helpers/axios';
import React, { useEffect, useState } from 'react';
import '../styles/Results.css';
import VideoCard from './VideoCard';
import requests from '../helpers/requests.js';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchActionMovies);
      setMovies(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, []);

  return (
    <div className="results">
      {movies.map((movie) => (
        <VideoCard key={movie.original_title} movie={movie} />
      ))}
    </div>
  );
}

export default Results;
