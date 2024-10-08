import React from 'react';

const About = () => {
  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">About This Project</h1>
      <p className="text-gray-700 leading-relaxed mb-4">This project, YouTube Trending Videos, is designed to provide users with the latest trending videos on YouTube. We gather and display the most popular videos from various categories, including technology, music, gaming, sports, and news. Our goal is to make it easy for users to stay updated with the latest trends and enjoy the most popular content available on YouTube.</p>
      <p className="text-gray-700 leading-relaxed mb-4">Our platform is built using modern web technologies, including React.js for the front-end and the YouTube Data API for fetching video data. We strive to deliver a seamless and enjoyable experience for our users, ensuring that the content is always fresh and up-to-date.</p>
      <p className="text-gray-700 leading-relaxed">Whether you're looking for the latest viral video, popular music tracks, or trending gaming content, YouTube Trending Videos has you covered. We hope you enjoy using our platform and find it useful for discovering new and exciting videos.</p>
    </div>
  );
};

export default About;
