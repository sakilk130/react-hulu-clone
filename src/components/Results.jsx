import axios from '../helpers/axios';
import React, { useEffect, useState } from 'react';
import '../styles/Results.css';
import VideoCard from './VideoCard';
import FlipMove from 'react-flip-move';

function Results({ selectedOption }) {
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(selectedOption);
      setMovies(request.data.results);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [selectedOption]);

  return (
    <div className="results">
      {movies.map((movie) => (
        <FlipMove>
          <VideoCard key={movie.id} movie={movie} />
        </FlipMove>
      ))}
    </div>
  );
}

export default Results;
