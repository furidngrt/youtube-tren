import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import TrendingVideos from './TrendingVideos';
import VideoDetail from './VideoDetail';
import SearchResults from './components/SearchResults'; // Tambahkan ini
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<TrendingVideos />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/search/:query" element={<SearchResults />} /> {/* Tambahkan ini */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
