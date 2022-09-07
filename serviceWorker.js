const staticMediazone = "Mediazone-site-v1";
const assets = [
  "/",
  "/index.html",
  "/Stylesheets\main.css",
  "/js/bustider.js",
  "/js/kantinen.js",
  "/fredag/stylesheets/main.css",
  "/fredag/js/script.js",
  "/fredag/games/js/script.js",
  "/fredag/games/index.html",
  "/fredag/index.html",
  "/bustider/index.html",
  "/bustider/js/script.js",
  "/fredag/games/spil.txt",
  "/fredag/events.txt"

];

self.addEventListener("install", installEvent => {
  installEvent.waitUntil(
    caches.open(staticMediazone).then(cache => {
      cache.addAll(assets);
    })
  );
});

self.addEventListener("fetch", fetchEvent => {
  fetchEvent.respondWith(
    caches.match(fetchEvent.request).then(res => {
      return res || fetch(fetchEvent.request);
    })
  );
});