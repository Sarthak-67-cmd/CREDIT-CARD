const CACHE_NAME = "cardzen-v1";

const FILES = [
  "./",
  "./index.html",
  "./dashboard.html",
  "./dashboard.css",
  "./dashboard.js",
  "./profile.html",
  "./profile.css",
  "./profile.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => cache.addAll(FILES))
  );
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});
