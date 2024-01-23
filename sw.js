self.addEventListener('install', event => {
    event.waitUntil(
        caches.open('champak-cache').then(cache => {
            return cache.addAll([
                '/champak/',
                '/champak/index.html',
                '/champak/manifest.json',
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
