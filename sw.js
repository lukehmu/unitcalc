importScripts('https://cdn.jsdelivr.net/npm/serviceworker-cache-polyfill@4.0.0/index.min.js');

self.addEventListener('install', function(e) {
 e.waitUntil(
   caches.open('unitcalc').then(function(cache) {
     return cache.addAll([
       '/',
       '/index.html'
     ]);
   })
 );
});

self.addEventListener('fetch', function(event) {
    console.log(event.request.url);
   });