'use client';

import { useState, useEffect } from 'react';

export default function Comments() {
  const [comments, setComments] = useState([]);
  const [newComment, setNewComment] = useState('');
  const [author, setAuthor] = useState('');

  useEffect(() => {
    // Load comments from localStorage
    const savedComments = localStorage.getItem('ultimateUnblockerComments');
    if (savedComments) {
      setComments(JSON.parse(savedComments));
    }
  }, []);

  const saveComments = (updatedComments) => {
    localStorage.setItem('ultimateUnblockerComments', JSON.stringify(updatedComments));
    setComments(updatedComments);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newComment.trim() || !author.trim()) return;

    const comment = {
      id: Date.now(),
      author: author.trim(),
      content: newComment.trim(),
      timestamp: new Date().toISOString(),
    };

    const updatedComments = [...comments, comment];
    saveComments(updatedComments);
    setNewComment('');
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
            <h1 className="text-2xl font-bold text-white">COMMENTS</h1>
            <div className="w-24"></div> {/* Spacer for centering */}
          </div>
        </div>
      </header>

      {/* Warning */}
      <div className="container mx-auto px-4 py-6">
        <div className="max-w-4xl mx-auto mb-8 p-6 bg-red-900 bg-opacity-50 rounded-lg border border-red-500">
          <p className="text-red-300 text-lg font-bold mb-2">
            ⚠ WARNING: Be careful what you message here.
          </p>
          <p className="text-red-200">
            Everything you post is permanent and visible to everyone. Nothing is private.
          </p>
        </div>

        {/* Comment Form */}
        <div className="max-w-4xl mx-auto mb-8">
          <form onSubmit={handleSubmit} className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700">
            <div className="mb-4">
              <label htmlFor="author" className="block text-white text-sm font-bold mb-2">
                Your Name/Alias:
              </label>
              <input
                type="text"
                id="author"
                value={author}
                onChange={(e) => setAuthor(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-text focus:outline-none focus:ring-2 focus:ring-text"
                placeholder="Enter your name or alias"
                required
              />
            </div>

            <div className="mb-4">
              <label htmlFor="comment" className="block text-white text-sm font-bold mb-2">
                Your Comment:
              </label>
              <textarea
                id="comment"
                value={newComment}
                onChange={(e) => setNewComment(e.target.value)}
                className="w-full px-3 py-2 bg-gray-700 text-white rounded border border-gray-600 focus:border-text focus:outline-none focus:ring-2 focus:ring-text h-24 resize-none"
                placeholder="Share your thoughts..."
                required
              />
            </div>

            <button
              type="submit"
              className="px-6 py-2 bg-gradient-to-r from-text to-highlight text-white font-bold rounded hover:scale-105 transition-transform duration-300"
            >
              Post Comment
            </button>
          </form>
        </div>

        {/* Comments List */}
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold text-white mb-6">Recent Comments</h2>

          {comments.length === 0 ? (
            <div className="text-center py-12">
              <p className="text-gray-400 text-lg">No comments yet. Be the first to share your thoughts!</p>
            </div>
          ) : (
            <div className="space-y-4">
              {comments.slice().reverse().map((comment) => (
                <div
                  key={comment.id}
                  className="bg-gray-800 bg-opacity-50 backdrop-blur-sm rounded-lg p-6 border border-gray-700 animate-fade-in-up"
                >
                  <div className="flex items-start justify-between mb-2">
                    <h3 className="text-text font-bold">{comment.author}</h3>
                    <span className="text-gray-400 text-sm">
                      {new Date(comment.timestamp).toLocaleDateString()} {new Date(comment.timestamp).toLocaleTimeString()}
                    </span>
                  </div>
                  <p className="text-gray-200 whitespace-pre-wrap">{comment.content}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
