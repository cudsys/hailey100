// hailey 100 offline support: keeps a copy of the game so it opens without internet.
// it only clears its own old caches, so other sites on the same github.io address are left alone.
// it always tries the network first, so a new version shows up as soon as you're online.
const CACHE = 'hailey100-v2';
const FILES = ['./', './index.html', './manifest.webmanifest', './icon.svg', './icon-192.png', './icon-512.png', './icon-180.png', './icon-maskable.png'];
self.addEventListener('install', (e) => { e.waitUntil(caches.open(CACHE).then((c) => c.addAll(FILES).catch(() => {}))); self.skipWaiting(); });
self.addEventListener('activate', (e) => { e.waitUntil(caches.keys().then((ks) => Promise.all(ks.filter((k) => k.startsWith('hailey100-') && k !== CACHE).map((k) => caches.delete(k)))).then(() => self.clients.claim())); });
self.addEventListener('fetch', (e) => {
  const u = new URL(e.request.url);
  if (e.request.method !== 'GET' || u.origin !== location.origin) return;
  e.respondWith(fetch(e.request).then((r) => { if (r.ok) { const copy = r.clone(); caches.open(CACHE).then((c) => c.put(e.request, copy)); } return r; })
    .catch(() => caches.match(e.request, { ignoreSearch: true }).then((r) => r || caches.match('./index.html'))));
});
