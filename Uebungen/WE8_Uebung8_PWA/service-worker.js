import {precacheAndRoute} from 'workbox-precaching';
import {registerRoute} from 'workbox-routing';
import {CacheFirst} from 'workbox-strategies';

console.log("Hello from service-worker.js");

// Use the imported Workbox libraries to implement caching,
// routing, and other logic:
precacheAndRoute(self.__WB_MANIFEST);
registerRoute(
    ({request}) => request.destination === 'image',
    new CacheFirst({cacheName: 'images'}),
);

// Etc.

