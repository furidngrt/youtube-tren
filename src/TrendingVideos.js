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
    <div className="container mx-auto p-4">
      <div className="mb-8">
        <SearchBar /> {/* Pindahkan SearchBar ke sini */}
      </div>
      <ul className="video-list">
        {currentVideos.length > 0 ? (
          currentVideos.map((video) => (
            <li key={video.id} className="video-item mb-4 p-4 bg-white rounded-lg shadow-lg transform transition-transform duration-300 hover:scale-105">
              <Link to={`/video/${video.id}`} className="video-link">
                <h2 className="text-xl font-bold mb-2 text-gray-800">{video.snippet.title}</h2>
                <div className="video-content flex flex-col sm:flex-row items-center">
                  <div className="thumbnail-wrapper w-full sm:w-48 h-28 mb-4 sm:mb-0 sm:mr-4">
                    <img
                      src={video.snippet.thumbnails.medium.url}
                      alt={video.snippet.title}
                      className="video-thumbnail w-full h-full object-cover rounded-lg"
                    />
                  </div>
                  <div className="video-stats text-gray-700 text-center sm:text-left">
                    <p className="mb-1"><strong>Views:</strong> {video.statistics.viewCount}</p>
                    <p className="mb-1"><strong>Likes:</strong> {video.statistics.likeCount}</p>
                    <p><strong>Uploaded:</strong> {new Date(video.snippet.publishedAt).toLocaleDateString()}</p>
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
      <ul className="pagination flex justify-center mt-8 flex-wrap">
        {pageNumbers.map(number => (
          <li key={number} className={`page-item ${number === currentPage ? 'active' : ''} mx-1 my-1`}>
            <button onClick={() => paginate(number)} className="page-link px-4 py-2 border border-gray-300 rounded-lg text-gray-800 transition-transform transform hover:scale-110 focus:outline-none focus:ring-2 focus:ring-blue-500">
              {number}
            </button>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default TrendingVideos;
