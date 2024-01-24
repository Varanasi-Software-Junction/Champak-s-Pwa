self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('champak-cache').then(cache => {
            return cache.addAll([
                '/Champak-s-Pwa/',
                '/Champak-s-Pwa/index.html',
                '/Champak-s-Pwa/manifest.js',
                // Add more files you want to cache
            ]);
        })
    );
});

self.addEventListener('fetch', event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
