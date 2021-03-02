// everything based on this tutorial: https://morioh.com/p/3cefa4bd6d05
const CACHE_NAME = 'sw-cache-example';
const toCache = [
    '/',
    '/index.html',
    '/js/status.js',
];

self.addEventListener( 'install', function (event) {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then(function(cache) {
                return cache.addAll(toCache)
            })
            .then(self.skipWaiting())
    )
})

// based on this source: https://stackoverflow.com/questions/45467842/how-to-clear-cache-of-service-worker
self.addEventListener( 'activate', function (event) {
        event.waitUntil(
            caches.keys()
                .then((keyList) => {
                    return Promise.all(keyList.map((key) => {
                        if (key !== CACHE_NAME) {
                            console.log('[ServiceWorker] Removing old cache', key)
                            return caches.delete(key)
                        }
                    }))
                })
                .then(() => self.clients.claim())
        )
})

// based on this source: https://developers.google.com/web/ilt/pwa/caching-files-with-service-worker
self.addEventListener( 'fetch', function (event) {
    event.respondWith(
        fetch(event.request)
            .catch(() => {
                return caches.open(CACHE_NAME)
                    .then((cache) => {
                        return cache.match(event.request)
                    })
            })
    )
})