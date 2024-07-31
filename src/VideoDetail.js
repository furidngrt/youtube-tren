import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const API_KEY = 'AIzaSyCSLtSfo8dh4SU2WrlfLT0jiVQp8wkuB7s';

  useEffect(() => {
    const fetchVideoDetails = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/videos', {
          params: {
            part: 'snippet,contentDetails,statistics',
            id: id,
            key: API_KEY,
          },
        });
        setVideo(response.data.items[0]);
      } catch (error) {
        console.error('Error fetching video details', error);
      }
    };

    fetchVideoDetails();
  }, [id]);

  if (!video) return <div className="text-center text-gray-500">Loading...</div>;

  return (
    <div className="max-w-4xl mx-auto p-4">
      <Helmet>
        <title>{video.snippet.title} - YouTube Trending Videos</title>
        <meta name="description" content={video.snippet.description} />
        <meta name="keywords" content={video.snippet.tags ? video.snippet.tags.join(', ') : video.snippet.title} />
      </Helmet>
      <h1 className="text-2xl font-bold mb-4 text-gray-800">{video.snippet.title}</h1>
      <div className="video-player mb-4">
        <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-lg shadow-md">
          <iframe
            className="absolute top-0 left-0 w-full h-full"
            src={`https://www.youtube.com/embed/${id}`}
            frameBorder="0"
            allowFullScreen
            title={video.snippet.title}
          ></iframe>
        </div>
      </div>
      <div className="bg-white p-6 rounded-lg shadow-md">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-4">
          <div className="text-left mb-4 sm:mb-0">
            <p className="text-gray-700 mb-2"><strong>Views:</strong> {parseInt(video.statistics.viewCount).toLocaleString()}</p>
            <p className="text-gray-700 mb-2"><strong>Likes:</strong> {parseInt(video.statistics.likeCount).toLocaleString()}</p>
          </div>
          <div className="text-gray-500 text-left sm:text-right">
            <p>{parseInt(video.statistics.viewCount).toLocaleString()} people have watched this video.</p>
          </div>
        </div>
        <div className="text-left">
          <p className="text-gray-800 mb-2"><strong>Channel:</strong> {video.snippet.channelTitle}</p>
          <p className="text-gray-600"><strong>Description:</strong> {video.snippet.description}</p>
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
