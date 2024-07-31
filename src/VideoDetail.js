import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import { Helmet } from 'react-helmet';

const VideoDetail = () => {
  const { id } = useParams();
  const [video, setVideo] = useState(null);
  const [relatedVideos, setRelatedVideos] = useState([]);
  const API_KEY = 'AIzaSyCSLtSfo8dh4SU2WrlfLT0jiVQp8wkuB7s'; // Gantilah dengan API key Anda yang benar

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
        console.log('Video Details:', response.data.items[0]);
      } catch (error) {
        console.error('Error fetching video details', error);
      }
    };

    const fetchRelatedVideos = async () => {
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            relatedToVideoId: id,
            type: 'video',
            maxResults: 5,
            key: API_KEY,
          },
        });
        setRelatedVideos(response.data.items);
        console.log('Related Videos:', response.data.items);
      } catch (error) {
        console.error('Error fetching related videos', error);
      }
    };

    fetchVideoDetails();
    fetchRelatedVideos();
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
      <div className="mt-8">
        <h2 className="text-xl font-bold mb-4 text-gray-800">Related Videos</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {relatedVideos.map((relatedVideo) => (
            <Link key={relatedVideo.id.videoId} to={`/video/${relatedVideo.id.videoId}`} className="block bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <div className="relative pb-[56.25%] h-0 overflow-hidden rounded-t-lg">
                <img
                  className="absolute top-0 left-0 w-full h-full object-cover"
                  src={relatedVideo.snippet.thumbnails.medium.url}
                  alt={relatedVideo.snippet.title}
                />
              </div>
              <div className="p-4">
                <h3 className="text-md font-semibold text-gray-800">{relatedVideo.snippet.title}</h3>
                <p className="text-sm text-gray-600 mt-2">{relatedVideo.snippet.channelTitle}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoDetail;
