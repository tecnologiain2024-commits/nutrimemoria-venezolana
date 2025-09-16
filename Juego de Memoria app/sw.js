const CACHE_NAME = 'nutrimemoria-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/manifest.json',
  '/img/inn.png',
  '/img/fondo.png',
  '/img/4s.png',
  '/img/cambur.png',
  '/img/lechosa.png',
  '/img/aguacate.png',
  '/img/mango.png',
  '/img/pimenton.png',
  '/img/tomate.png',
  '/img/cebolla.png',
  '/img/yuca.png',
  '/img/ñame.png',
  '/img/auyama.png',
  '/img/parchita.png',
  '/img/guayaba.png',
  '/img/limon.png',
  '/img/piña.png',
  '/img/patilla.png',
  '/img/caraota.png',
  '/sounds/click.mp3',
  '/sounds/match.mp3',
  '/sounds/complete.mp3'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => {
        return response || fetch(event.request);
      })
  );
});