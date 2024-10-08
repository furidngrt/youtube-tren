import React from 'react';

const Privacy = () => {
  return (
    <div className="container mx-auto p-8 bg-white shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold mb-6 text-gray-800">Privacy Policy</h1>
      <p className="text-gray-700 leading-relaxed mb-4">Your privacy is important to us. This Privacy Policy outlines how we collect, use, and protect your personal information when you use our website, YouTube Trending Videos.</p>
      
      <h2 className="text-2xl font-bold mb-4 text-gray-800">Information We Collect</h2>
      <p className="text-gray-700 leading-relaxed mb-4">We collect information to provide better services to our users. This includes:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Personal information you provide when you register or interact with our website, such as your name, email address, and preferences.</li>
        <li>Usage data, such as the pages you visit, the videos you watch, and other actions you take on our website.</li>
        <li>Technical data, such as your IP address, browser type, and operating system.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">How We Use Your Information</h2>
      <p className="text-gray-700 leading-relaxed mb-4">We use the information we collect to:</p>
      <ul className="list-disc list-inside mb-4 text-gray-700">
        <li>Provide and improve our services.</li>
        <li>Personalize your experience on our website.</li>
        <li>Communicate with you, including sending you updates and notifications.</li>
        <li>Analyze usage patterns to enhance our website's functionality and user experience.</li>
      </ul>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Data Protection</h2>
      <p className="text-gray-700 leading-relaxed mb-4">We are committed to protecting your personal information. We implement appropriate security measures to prevent unauthorized access, disclosure, alteration, or destruction of your data. We do not share your personal information with third parties except as necessary to provide our services or comply with legal obligations.</p>

      <h2 className="text-2xl font-bold mb-4 text-gray-800">Your Rights</h2>
      <p className="text-gray-700 leading-relaxed mb-4">You have the right to access, update, and delete your personal information. If you have any questions or concerns about our Privacy Policy, please contact us at privacy@youtube-trending.com.</p>
      
      <p className="text-gray-700 leading-relaxed">By using our website, you consent to the collection and use of your information as described in this Privacy Policy. We may update this policy from time to time, and we will notify you of any significant changes.</p>
    </div>
  );
};

export default Privacy;
