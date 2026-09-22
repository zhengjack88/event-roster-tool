const CACHE_NAME = 'roster-tool-v2.1';
const ASSETS_TO_CACHE = [
  './',
  './index.html',
  './index_zh.html',
  './manifest.json'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  // Ignore query string differences (e.g. ?group=...&pkg=...) when matching app shell
  const url = new URL(e.request.url);
  if (url.origin === location.origin) {
    e.respondWith(
      caches.match(e.request, { ignoreSearch: true }).then((cachedResponse) => {
        if (cachedResponse) {
          // Fetch update in background (stale-while-revalidate for static shell)
          fetch(e.request).then((networkResponse) => {
            if (networkResponse && networkResponse.status === 200) {
              caches.open(CACHE_NAME).then((cache) => cache.put(e.request, networkResponse));
            }
          }).catch(() => {});
          return cachedResponse;
        }
        return fetch(e.request).catch(() => {
          // If offline and accessing root or html, fallback to index
          if (e.request.destination === 'document') {
            return caches.match('./index.html', { ignoreSearch: true }) || caches.match('./index_zh.html', { ignoreSearch: true });
          }
        });
      })
    );
  }
});
