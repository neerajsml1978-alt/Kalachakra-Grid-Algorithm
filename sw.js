// 1. यहाँ v1 को v2 करें
const CACHE_NAME = 'hwjh-calendar-v2'; 
const ASSETS = [
  './',
  './index.html',
  './manifest.json',
  './icon-192.png',
  './icon-512.png',
  './seo-pwa-tools.js',
  // अगर नक्षत्र वाला पेज अलग फाइल है, तो उसे यहाँ जरूर जोड़ें
  './NakshatraList.html',
  './nakshatras/ashwini.html',
  './nakshatras/ashwini.jpg'
];

// 2. इंस्टॉल इवेंट
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS);
    })
  );
});

// 3. एक्टिवेट इवेंट (यह पुराना कैश साफ़ करने के लिए अनिवार्य है)
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cache) => {
          if (cache !== CACHE_NAME) {
            return caches.delete(cache);
          }
        })
      );
    })
  );
});

// 4. फेच इवेंट
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});


