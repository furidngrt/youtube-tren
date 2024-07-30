import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './styles/TrendingVideos.css';
import SearchBar from './components/navbar/SearchBar'; // Import SearchBar

const TrendingVideos = () => {
  const [videos, setVideos] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [videosPerPage] = useState(5); // Number of videos per page
  const API_KEY = 'AIzaSyCSLtSfo8dh4SU2WrlfLT0jiVQp8wkuB7s';

  useEffect(() => {
    const fetchTrendingVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet,contentDetails,statistics',
            chart: 'mostPopular',
            regionCode: 'ID',
            maxResults: 50,
            key: API_KEY,
          },
        });
        setVideos(response.data.items);
      } catch (error) {
        console.error('Error fetching trending videos', error);
      }
    };

    fetchTrendingVideos();
  }, []);

  // Get current videos
  const indexOfLastVideo = currentPage * videosPerPage;
  const indexOfFirstVideo = indexOfLastVideo - videosPerPage;
  const currentVideos = videos.slice(indexOfFirstVideo, indexOfLastVideo);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  return (
    <div>
      <SearchBar /> {/* Pindahkan SearchBar ke sini */}

      <ul className="video-list">
        {currentVideos.length > 0 ? (
          currentVideos.map((video) => (
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
                    <p>Uploaded: {new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
                  </div>
                </div>
              </Link>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
      <Pagination
        videosPerPage={videosPerPage}
        totalVideos={videos.length}
        paginate={paginate}
        currentPage={currentPage}
      />
    </div>
  );
};

const Pagination = ({ videosPerPage, totalVideos, paginate, currentPage }) => {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(totalVideos / videosPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''}`}>
            <a onClick={() => paginate(number)} href="#!" className="page-link">
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TrendingVideos;
