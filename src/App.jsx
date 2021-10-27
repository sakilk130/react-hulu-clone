import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import Results from './components/Results';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      <Header />
      <Nav />
      <Results />
    </div>
  );
}

export default App;
