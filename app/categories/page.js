'use client';

import { useState, useEffect } from 'react';

const categories = [
  { id: 1, name: 'PROXY SITES', description: 'Access websites through secure proxies', dataFile: 'proxySites.json' },
  { id: 2, name: 'GAME LINKS', description: 'Play games from various sources', dataFile: 'gameLinks.json' },
  { id: 3, name: 'LIVE CHANNEL LINK', description: 'Watch live streaming channels', dataFile: 'liveChannel.json' },
  { id: 4, name: 'MOVIE WATCHER LINK', description: 'Stream movies and TV shows', dataFile: 'movieLinks.json' },
  { id: 5, name: 'AI LINK', description: 'Access AI tools and chatbots', dataFile: 'aiLinks.json' },
  { id: 6, name: 'MUSIC LINK', description: 'Listen to music and audio', dataFile: 'musicLinks.json' },
  { id: 7, name: 'RADIO LINK', description: 'Tune into online radio stations', dataFile: 'radioLinks.json' },
  { id: 8, name: 'SPORT WATCHER LINK', description: 'Watch live sports events', dataFile: 'sportsLinks.json' },
  { id: 9, name: 'ALTERNATIVE YOUTUBE', description: 'YouTube alternatives for privacy', dataFile: 'altYoutube.json' },
  { id: 10, name: 'SOUNDBOARDS', description: 'Fun sound effects and memes', dataFile: 'soundboards.json' },
];

export default function Categories() {
  const [searchTerm, setSearchTerm] = useState('');
  const [filteredCategories, setFilteredCategories] = useState(categories);

  useEffect(() => {
    const filtered = categories.filter(category =>
      category.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      category.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setFilteredCategories(filtered);
  }, [searchTerm]);

  const handleCategoryClick = (categoryId) => {
    window.location.href = `/category/${categoryId}`;
  };

  const handleBack = () => {
    window.location.href = '/';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent">
      {/* Header */}
      <header className="bg-black bg-opacity-50 backdrop-blur-sm sticky top-0 z-10 border-b border-gray-700">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={handleBack}
              className="px-4 py-2 bg-accent text-white rounded-lg hover:bg-opacity-80 transition-colors duration-300"
            >
              ← Back to Home
            </button>
            <h1 className="text-2xl font-bold text-white">EXPLORE CATEGORIES</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Search Bar */}
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-md mx-auto mb-8">
          <input
            type="text"
            placeholder="Search categories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full px-4 py-3 bg-gray-800 text-white rounded-lg border border-gray-600 focus:border-text focus:outline-none focus:ring-2 focus:ring-text transition-colors duration-300"
          />
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredCategories.map((category, index) => (
            <div
              key={category.id}
              onClick={() => handleCategoryClick(category.id)}
              className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 cursor-pointer hover:bg-opacity-70 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-text animate-fade-in-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-center">
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300 text-sm">{category.description}</p>
              </div>
            </div>
          ))}
        </div>

        {filteredCategories.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No categories found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
}
