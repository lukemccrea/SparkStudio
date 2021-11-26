self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open('SparkCode').then((cache) => cache.addAll([
      'index.html',
      'editor.html',
      'learn.html',
      'about.html',
      'Icons/SparkCodeLogo.svg',
      'Icons/326650_fullscreen_icon.png',
      'Icons/favicon.ico',
    ])),
  );
});

self.addEventListener('fetch', (e) => {
  console.log(e.request.url);
  e.respondWith(
    caches.match(e.request).then((response) => response || fetch(e.request)),
  );
});
