import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../styles/TrendingVideos.css';

const SearchResults = () => {
  const { query } = useParams();
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyCSLtSfo8dh4SU2WrlfLT0jiVQp8wkuB7s';

  useEffect(() => {
    const fetchSearchResults = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            q: query,
            type: 'video',
            maxResults: 10,
            key: API_KEY,
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching search results', error);
      }
    };

    fetchSearchResults();
  }, [query]);

  return (
    <div>
      <h1>Search Results for "{query}"</h1>
      <ul className="video-list">
        {videos.length > 0 ? (
          videos.map((video) => (
            <li key={video.id.videoId} className="video-item">
              <Link to={`/video/${video.id.videoId}`} className="video-link">
                <h2 className="video-title">{video.snippet.title}</h2>
                <div className="video-content">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="video-thumbnail"
                  />
                  <div className="video-stats">
                    <p>Channel: {video.snippet.channelTitle}</p>
                    <p>Published: {new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </div>
  );
};

export default SearchResults;
