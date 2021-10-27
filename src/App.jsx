import React from 'react';
import Header from './components/Header';
import Nav from './components/Nav';
import './styles/App.css';

function App() {
  return (
    <div className="app">
      {/* Header */}
      <Header />

      {/* Navigation */}
      <Nav />
      {/* Results */}
    </div>
  );
}

export default App;
