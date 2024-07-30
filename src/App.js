import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import TrendingVideos from './TrendingVideos';
import VideoDetail from './VideoDetail';
import About from './components/navbar/About';
import Contact from './components/navbar/Contact';
import Privacy from './components/navbar/Privacy';
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
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/privacy" element={<Privacy />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
