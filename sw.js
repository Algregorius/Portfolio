const CACHE_NAME = "menu-cache-v1";
const urlsToCache = [
  "index.html",
  "favicon.png",
  "manifest.json",
  "img/placeholder.jpg",
  "img/nasi-goreng.jpg"
];
self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(urlsToCache);
    })
  );
});
self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((response) => {
      return response || fetch(event.request);
    })
  );
});
