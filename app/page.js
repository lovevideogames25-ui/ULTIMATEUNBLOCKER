'use client';

import { useState, useEffect } from 'react';

export default function Home() {
  const [isLoading, setIsLoading] = useState(true);
  const [progress, setProgress] = useState(0);
  const [showWelcome, setShowWelcome] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          setTimeout(() => setShowWelcome(true), 500);
          return 100;
        }
        return prevProgress + 2;
      });
    }, 30);

    return () => clearInterval(interval);
  }, []);

  const handleExploreCategories = () => {
    window.location.href = '/categories';
  };

  const handleComments = () => {
    window.location.href = '/comments';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-primary via-secondary to-accent flex items-center justify-center">
      {isLoading && (
        <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-64 h-2 bg-gray-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-text to-highlight transition-all duration-300 ease-out"
                  style={{ width: `${progress}%` }}
                ></div>
              </div>
            </div>
            <div className="text-4xl font-bold text-white mb-4">
              {progress}%
            </div>
          </div>
        </div>
      )}

      {showWelcome && (
        <div className="fixed inset-0 bg-black bg-opacity-95 flex items-center justify-center z-40 animate-fade-in">
          <div className="text-center animate-pulse">
            <h1 className="text-6xl md:text-8xl font-bold bg-gradient-to-r from-text via-highlight to-accent bg-clip-text text-transparent animate-scale-in">
              WELCOME TO<br />ULTIMATE UNBLOCKER
            </h1>
          </div>
        </div>
      )}

      {!isLoading && !showWelcome && (
        <div className="text-center animate-fade-in-up">
          <div className="mb-12">
            <h1 className="text-5xl md:text-7xl font-bold bg-gradient-to-r from-text via-highlight to-accent bg-clip-text text-transparent mb-8">
              ULTIMATE UNBLOCKER
            </h1>
            <p className="text-xl text-gray-300 mb-12">
              Your gateway to unlimited access
            </p>
          </div>

          <div className="space-y-6">
            <button
              onClick={handleExploreCategories}
              className="block w-full max-w-md mx-auto px-8 py-4 bg-gradient-to-r from-text to-highlight text-white text-xl font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl"
            >
              EXPLORE CATEGORIES
            </button>

            <button
              onClick={handleComments}
              className="block w-full max-w-md mx-auto px-8 py-4 bg-gradient-to-r from-accent to-secondary text-white text-xl font-bold rounded-lg hover:scale-105 transition-transform duration-300 shadow-lg hover:shadow-xl border-2 border-text"
            >
              COMMENTS
            </button>

            <div className="max-w-md mx-auto mt-8 p-4 bg-red-900 bg-opacity-50 rounded-lg border border-red-500">
              <p className="text-red-300 text-sm">
                ⚠ WARNING: Be careful what you message here. Everything you post is permanent and visible to everyone. Nothing is private.
              </p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
