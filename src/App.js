import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Helmet } from 'react-helmet';
import './styles/App.css';
import TrendingVideos from './TrendingVideos';
import VideoDetail from './VideoDetail';
import SearchResults from './components/SearchResults';
import Navbar from './components/navbar/Navbar';
import Footer from './components/navbar/Footer';

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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
