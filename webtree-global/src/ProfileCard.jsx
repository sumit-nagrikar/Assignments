import React, { useState, useEffect } from 'react';

const ProfileCard = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);

  // Fetch user data
  useEffect(() => {
    fetch('https://randomuser.me/api/?page=1&results=1&seed=abc')
      .then((response) => response.json())
      .then((data) => setUser(data.results[0]));
  }, []);

  if (!user)
    return (
      <div
        className={`flex justify-center items-center min-h-screen ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
        }`}
      >
        <div className="w-16 h-16 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
      </div>
    );

  return (
    <div
      className={`min-h-screen flex flex-col items-center justify-center ${
        darkMode ? 'bg-gray-900 text-white' : 'bg-gray-100 text-black'
      } transition-colors duration-300`}
    >
      {/* Dark Mode Toggle Button */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="absolute top-4 right-4 bg-gray-700 text-white px-3 py-1 rounded-md hover:bg-gray-800 transition-colors duration-300"
      >
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>

      {/* Profile Card */}
      <div
        className={`flex flex-col md:flex-row border rounded-lg shadow-xl p-6 ${
          darkMode
            ? 'bg-gray-800 text-white'
            : 'bg-gradient-to-r from-white to-blue-50 text-black'
        } hover:shadow-2xl hover:scale-105 transition-all duration-300`}
      >
        <img
          src={user.picture.large}
          alt={`${user.name.first} ${user.name.last}`}
          className="w-32 h-32 rounded-lg shadow-md"
        />
        <div className="ml-4 flex flex-col justify-center space-y-2">
          <h2 className="font-semibold text-2xl">
            {user.name.title} {user.name.first} {user.name.last}
          </h2>
          <p className="text-sm font-medium">
            <span className="font-semibold">Gender:</span> {user.gender}
          </p>
          <p className="text-sm font-medium">
            <span className="font-semibold">Phone:</span> {user.phone}
          </p>
          <p className="text-sm font-medium">
            <span className="font-semibold">Email:</span> {user.email}
          </p>
          <p className="text-sm font-medium">
            <span className="font-semibold">Location:</span>{' '}
            {user.location.city}, {user.location.state}, {user.location.country}
          </p>
        </div>
      </div>

      {/* Refresh Profile Button */}
      <button
        onClick={() => window.location.reload()}
        className="mt-4 px-4 py-2 bg-blue-500 text-white font-semibold rounded-lg shadow-md hover:bg-blue-600 transition-all duration-300"
      >
        Refresh Profile
      </button>
    </div>
  );
};

export default ProfileCard;
