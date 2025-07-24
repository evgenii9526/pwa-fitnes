self.addEventListener('install', function(e) {
  e.waitUntil(
    caches.open('fitness-cache').then(function(cache) {
      return cache.addAll(['index.html', 'manifest.json', 'icons/dumbbell-icon.png']);
    })
  );
});

self.addEventListener('fetch', function(e) {
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});