import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/TrendingVideos.css';

const TrendingVideos = () => {
  const [videos, setVideos] = useState([]);
  const API_KEY = 'AIzaSyCSLtSfo8dh4SU2WrlfLT0jiVQp8wkuB7s';

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'ID',
            maxResults: 10,
            key: API_KEY,
          },
        });
        console.log(response.data.items); // Tambahkan ini untuk debug
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching trending videos', error);
      }
    };

    fetchTrendingVideos();
  }, []);

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div>
      <h1>Trending Videos</h1>
      <ul className="video-list">
        {videos.length > 0 ? (
          videos.map((video) => (
            <li key={video.id} className="video-item">
              <Link to={`/video/${video.id}`} className="video-link">
                <h2 className="video-title">{video.snippet.title}</h2>
                <div className="video-content">
                  <img
                    src={video.snippet.thumbnails.medium.url}
                    alt={video.snippet.title}
                    className="video-thumbnail"
                  />
                  <div className="video-stats">
                    <p>Views: {video.statistics.viewCount}</p>
                    <p>Likes: {video.statistics.likeCount}</p>
                    <p>Uploaded: {formatDate(video.snippet.publishedAt)}</p>
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

export default TrendingVideos;
