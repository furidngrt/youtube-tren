import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/App.css';
import TrendingVideos from './TrendingVideos';
import VideoDetail from './VideoDetail';
import SearchResults from './components/SearchResults';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';
import About from './components/navbar/About'; // Import About
import Contact from './components/navbar/Contact'; // Import Contact
import Privacy from './components/navbar/Privacy'; // Import Privacy

function App() {
  return (
    <Router>
      <div className="App">
        <Helmet>
          <title>YouTube Trending Videos</title>
          <meta name="description" content="Watch the latest trending videos on YouTube. Stay updated with the most popular content!" />
          <meta name="keywords" content="YouTube, trending videos, popular videos, latest videos" />
        </Helmet>
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<TrendingVideos />} />
            <Route path="/video/:id" element={<VideoDetail />} />
            <Route path="/search/:query" element={<SearchResults />} />
            <Route path="/about" element={<About />} /> {/* Add About route */}
            <Route path="/contact" element={<Contact />} /> {/* Add Contact route */}
            <Route path="/privacy" element={<Privacy />} /> {/* Add Privacy route */}
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
