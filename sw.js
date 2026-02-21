/* Service Worker - ULTIMATE UNBLOCKER */

const CACHE_NAME = 'ultimate-unblocker-v2.0.0';
const urlsToCache = [
  '/',
  '/index.html',
  '/app.js',
  '/styles/main.css',
  '/styles/animations.css',
  '/styles/components.css',
  '/styles/enhanced.css',
  '/utils/main.js',
  '/utils/animations.js',
  '/utils/data.js',
  '/utils/storage.js',
  '/public/logo.svg',
  '/public/logo-text.svg',
  '/public/favicon.ico',
  '/manifest.json'
];

// Install event - cache resources
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
      .then(() => {
        return self.skipWaiting();
      })
  );
});

// Activate event - clean up old caches
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(cacheNames => {
      return Promise.all(
        cacheNames.map(cacheName => {
          if (cacheName !== CACHE_NAME) {
            console.log('Deleting old cache:', cacheName);
            return caches.delete(cacheName);
          }
        })
      );
    }).then(() => {
      return self.clients.claim();
    })
  );
});

// Fetch event - serve from cache, fallback to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // Clone the request
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(response => {
          // Check if valid response
          if (!response || response.status !== 200 || response.type !== 'basic') {
            return response;
          }

          // Clone the response
          const responseToCache = response.clone();

          // Cache successful responses
          if (shouldCache(event.request)) {
            caches.open(CACHE_NAME)
              .then(cache => {
                cache.put(event.request, responseToCache);
              });
          }

          return response;
        }).catch(() => {
          // Return cached version if network fails
          return caches.match(event.request);
        });
      })
  );
});

// Determine if request should be cached
function shouldCache(request) {
  // Only cache GET requests
  if (request.method !== 'GET') {
    return false;
  }

  // Don't cache external API calls
  if (request.url.includes('http://') || request.url.includes('https://')) {
    const url = new URL(request.url);
    if (url.hostname !== window.location.hostname) {
      return false;
    }
  }

  // Cache static assets and pages
  return request.url.includes('.') || 
         request.url.endsWith('/') ||
         request.url.includes('/index.html');
}

// Background sync for offline functionality
self.addEventListener('sync', event => {
  if (event.tag === 'background-sync') {
    event.waitUntil(doBackgroundSync());
  }
});

function doBackgroundSync() {
  // Handle background sync tasks
  console.log('Background sync completed');
}

// Push notifications (future feature)
self.addEventListener('push', event => {
  const options = {
    body: event.data ? event.data.text() : 'New update available!',
    icon: '/public/logo.svg',
    badge: '/public/favicon.ico',
    vibrate: [100, 50, 100],
    data: {
      dateOfArrival: Date.now(),
      primaryKey: 1
    }
  };

  event.waitUntil(
    self.registration.showNotification('ULTIMATE UNBLOCKER', options)
  );
});

// Notification click handler
self.addEventListener('notificationclick', event => {
  console.log('Notification click received.');
  
  event.notification.close();
  
  event.waitUntil(
    clients.openWindow('/')
  );
});
