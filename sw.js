//serviceworker

const cacheName = 'digitarchy-files';
const assets = ['/','index.html','img/arrow.svg','css/styles.css','css/normalize.css','img/carrito.svg','img/closed.svg','img/menu.svg','img/banner.jpg','img/autocad.svg','img/before.svg','img/computer.png','img/face01.jpg','img/face02.jpg','img/face03.jpg','img/face04.jpg','img/facebook.svg','img/instagram.svg','img/next.svg','img/revit.svg','img/sketchup.svg','img/twitter.svg','js/slider.js','js/questions.js','js/menu.js','js/app.js'];


self.addEventListener('install', event => {
    self.skipWaiting();
    event.waitUntil(
        caches.open(cacheName)
        .then(cache => {cache.addAll(assets);
        })
    )
});

self.addEventListener('activate', event => {
    console.log('El service worker se activo correctamente.');
});

