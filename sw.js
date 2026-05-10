// fooendar service worker
// Bump CACHE_VERSION when you deploy a new version of the HTML
const CACHE_VERSION = 'fooendar-v3';
const ASSETS = [
  '/Dinner-Planner/index.html',
  '/Dinner-Planner/manifest.json',
  '/Dinner-Planner/fooendar192.png',
  '/Dinner-Planner/fooendar512.png',
  '/Dinner-Planner/fooendar180.png',
];

// Install: cache all assets
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then(cache => cache.addAll(ASSETS))
  );
  self.skipWaiting();
});

// Activate: delete old caches from previous versions
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(key => key !== CACHE_VERSION).map(key => caches.delete(key))
      )
    )
  );
  self.clients.claim();
});

// Fetch: serve from cache, fall back to network
self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(cached => {
      if (cached) return cached;
      return fetch(event.request).then(response => {
        // Cache fresh responses for our own assets
        if (response.ok && event.request.url.includes(self.location.origin)) {
          const clone = response.clone();
          caches.open(CACHE_VERSION).then(cache => cache.put(event.request, clone));
        }
        return response;
      }).catch(() => {
        // If both cache and network fail, return a simple offline message
        return new Response(
          '<h2 style="font-family:sans-serif;text-align:center;margin-top:3rem">You\'re offline — open fooendar while connected once to enable offline use.</h2>',
          { headers: { 'Content-Type': 'text/html' } }
        );
      });
    })
  );
});
