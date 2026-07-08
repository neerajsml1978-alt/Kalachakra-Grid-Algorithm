const CACHE_NAME = 'hwjh-calendar-v3'; // वर्जन बदलें जब भी मेजर अपडेट हो

// 1. इंस्टॉल के समय सिर्फ मुख्य फाइलें रखें (जो बहुत जरूरी हैं)
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(['./', './index.html', './style.css', './script.js']);
    })
  );
  self.skipWaiting();
});

// 2. रनटाइम कैशिंग (जो फाइल खुलेगी, वो अपने आप कैश हो जाएगी)
self.addEventListener('fetch', (event) => {
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      // अगर कैश में है तो वापस करें, वरना नेटवर्क से लाएं
      return cachedResponse || fetch(event.request).then((networkResponse) => {
        // नेटवर्क से आई फाइल को कैश में सेव करें
        return caches.open(CACHE_NAME).then((cache) => {
          cache.put(event.request, networkResponse.clone());
          return networkResponse;
        });
      });
    })
  );
});

// 3. पुराना कैश डिलीट करना (ताकि मेमोरी न भरे)
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
