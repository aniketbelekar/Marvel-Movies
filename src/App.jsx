import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './Component/Navbar';
import Movies from './Component/Movies';
import MoviesName from './MoviesName';
import Webseries from './Component/Webseries';
import Webseriesmovies from './Component/Webseries'; // Ensure this path is correct
import About from './Component/About';
import Footer from './Component/Footer';
import MovieDetail from './Component/MoviesdDetails'; // Import the MovieDetail component

function App() {
  return (
    <Router>
      <div className="app-container">
        <Navbar />
        <div className="content">
          <Routes>
            <Route path="/" element={<Movies />} />
            <Route path="/about" element={<About />} />
            <Route path="/favourite" element={<MoviesName />} />
            <Route path="/webseries" element={<Webseries />} />
            <Route path="/webseriesmovies" element={<Webseriesmovies />} />
            <Route path="/:movieName" element={<MovieDetail />} /> {/* Dynamic route for movie details */}
          </Routes>
        </div>
        <Footer /> {/* Footer stays at the bottom */}
      </div>
    </Router>
  );
}

export default App;
