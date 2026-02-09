const CACHE_NAME = 'voter-app-v2';
const assets = [
  './',
  './index.html',
  './style.css',
  './app.js',
  './data.js',
  './utils.js',
  './manifest.json',
  'https://tse2.mm.bing.net/th/id/OIP.ZqhUYgY3v8O3Egh91HlhhgHaHa?rs=1&pid=ImgDetMain'
];


self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('Caching assets...');
      return cache.addAll(assets);
    })
  );
});

self.addEventListener('fetch', e => {
  e.respondWith(
    caches.match(e.request).then(res => {
      return res || fetch(e.request);
    })
  );
});


self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
      );
    })
  );

});







