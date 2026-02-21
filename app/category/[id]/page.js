'use client';

import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

const categoryData = {
  1: { name: 'PROXY SITES', dataFile: 'proxySites.json' },
  2: { name: 'GAME LINKS', dataFile: 'gameLinks.json' },
  3: { name: 'LIVE CHANNEL LINK', dataFile: 'liveChannel.json' },
  4: { name: 'MOVIE WATCHER LINK', dataFile: 'movieLinks.json' },
  5: { name: 'AI LINK', dataFile: 'aiLinks.json' },
  6: { name: 'MUSIC LINK', dataFile: 'musicLinks.json' },
  7: { name: 'RADIO LINK', dataFile: 'radioLinks.json' },
  8: { name: 'SPORT WATCHER LINK', dataFile: 'sportsLinks.json' },
  9: { name: 'ALTERNATIVE YOUTUBE', dataFile: 'altYoutube.json' },
  10: { name: 'SOUNDBOARDS', dataFile: 'soundboards.json' },
};

export default function CategoryPage() {
  const params = useParams();
  const categoryId = parseInt(params.id);
  const category = categoryData[categoryId];

  const [links, setLinks] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (category) {
      fetch(`/data/${category.dataFile}`)
        .then(response => response.json())
        .then(data => {
          setLinks(data);
          setLoading(false);
        })
        .catch(error => {
          console.error('Error loading category data:', error);
          setLoading(false);
        });
    }
  }, [category]);

  const handleBack = () => {
    window.location.href = '/categories';
  };

  const handleLinkClick = (url, warning) => {
    if (warning) {
      const proceed = confirm(warning + '\n\nDo you want to continue?');
      if (!proceed) return;
    }
    window.open(url, '_blank');
  };

  if (!category) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-white mb-4">Category Not Found</h1>
          <button
            onClick={handleBack}
            className="px-6 py-3 bg-accent text-white rounded-lg hover:bg-opacity-80 transition-colors duration-300"
          >
            Back to Categories
          </button>
        </div>
      </div>
    );
  }

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
              ← Back to Categories
            </button>
            <h1 className="text-2xl font-bold text-white">{category.name}</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Content */}
      <div className="container mx-auto px-4 py-8">
        {loading ? (
          <div className="flex items-center justify-center py-12">
            <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-text"></div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {links.map((link, index) => (
              <div
                key={index}
                onClick={() => handleLinkClick(link.url, link.warning)}
                className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 cursor-pointer hover:bg-opacity-70 hover:scale-105 transition-all duration-300 border border-gray-700 hover:border-text animate-fade-in-up"
                style={{ animationDelay: `${index * 0.05}s` }}
              >
                <div className="text-center">
                  <h3 className="text-lg font-bold text-white mb-2">{link.name}</h3>
                  {link.warning && (
                    <div className="text-yellow-400 text-xs mb-2">
                      ⚠ Warning
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}

        {links.length === 0 && !loading && (
          <div className="text-center py-12">
            <p className="text-gray-400 text-lg">No links available in this category.</p>
          </div>
        )}
      </div>
    </div>
  );
}
