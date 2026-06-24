const CACHE_NAME = 'hwjh-calendar-v1';
const ASSETS = [
  './',
  './index.html',
  './style.css',
  './script.js',
  './icon-192.png',
  './icon-512.png'
];

// 1. सर्विस वर्कर इंस्टॉल करना
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 2. फाइलों को कैश से सर्व करना
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
 // 3. पुराना कैश हटाना (Activation)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            console.log('पुराना कैश हटाया जा रहा है:', cache);
            return caches.delete(cache);
          }
        })
      );
    })
  );
});


