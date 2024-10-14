'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "76023cfa9492b3cb383b7a9faefbdfec",
"assets/AssetManifest.bin.json": "601d898a7b2dde52ef70549daa911818",
"assets/AssetManifest.json": "48d1cca288a6f12833fa713ea7dc7d57",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e89b163364d65fb647919e415c0164c0",
"assets/icons/arrow.png": "a12b3d2c98603c16abdd5df842153cf6",
"assets/icons/check.png": "e67a5555da8879cc43a96b384313273a",
"assets/icons/clock.png": "f1133787d53a32d2ef430461fd2ca2df",
"assets/icons/doc.png": "32e4fc9d3d1cc88e9a51dc30aa79a76e",
"assets/icons/facebook.png": "ba803196d3b7644ffb2576efd1500b6b",
"assets/icons/logo-small.png": "0806586b933001006d965a7af3cd13aa",
"assets/icons/logo.png": "0806586b933001006d965a7af3cd13aa",
"assets/icons/menu.png": "f7d52f077cd38ceb3a960375c1a01aa9",
"assets/icons/money.png": "00af76026d946b475cabe2cde9d85b6b",
"assets/icons/paid.png": "cc0223fba9a402890fc359ffb5105554",
"assets/icons/person.png": "0418a773b669c62d58d84c3fce3e6125",
"assets/icons/whatsapp.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/NOTICES": "3b2fb64f81a879d70763072166d40ddc",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/shared_code_new/assets/icons/push.txt": "d41d8cd98f00b204e9800998ecf8427e",
"assets/packages/shared_code_new/assets/svg/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/packages/shared_code_new/assets/svg/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/svgs/add-circle.svg": "da846b21b3922f8895bd958eaa2cd7b4",
"assets/svgs/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/svgs/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/svgs/login.svg": "87ff9bb2e5f57830c103488caa33b5d7",
"assets/svgs/person-add.svg": "8d021f79fcfd2e16cff6d3adbbe0ff20",
"assets/web/assets/icons/arrow.png": "a12b3d2c98603c16abdd5df842153cf6",
"assets/web/assets/icons/check.png": "e67a5555da8879cc43a96b384313273a",
"assets/web/assets/icons/clock.png": "f1133787d53a32d2ef430461fd2ca2df",
"assets/web/assets/icons/doc.png": "32e4fc9d3d1cc88e9a51dc30aa79a76e",
"assets/web/assets/icons/facebook.png": "ba803196d3b7644ffb2576efd1500b6b",
"assets/web/assets/icons/logo-small.png": "0806586b933001006d965a7af3cd13aa",
"assets/web/assets/icons/logo.png": "0806586b933001006d965a7af3cd13aa",
"assets/web/assets/icons/menu.png": "f7d52f077cd38ceb3a960375c1a01aa9",
"assets/web/assets/icons/money.png": "00af76026d946b475cabe2cde9d85b6b",
"assets/web/assets/icons/paid.png": "cc0223fba9a402890fc359ffb5105554",
"assets/web/assets/icons/person.png": "0418a773b669c62d58d84c3fce3e6125",
"assets/web/assets/icons/whatsapp.png": "1da1618b88bbbb6a0aa49985c76f71c8",
"assets/web/assets/svgs/add-circle.svg": "da846b21b3922f8895bd958eaa2cd7b4",
"assets/web/assets/svgs/eye-closed.svg": "04aeebc66f85e729b233953362515949",
"assets/web/assets/svgs/eye-open.svg": "1fb248fb908a50b57f0a8c889c6979e1",
"assets/web/assets/svgs/login.svg": "87ff9bb2e5f57830c103488caa33b5d7",
"assets/web/assets/svgs/person-add.svg": "8d021f79fcfd2e16cff6d3adbbe0ff20",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "2a295f3b43644a89582447378912d314",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4b5e42fff978a99f6689a9542e184806",
"/": "4b5e42fff978a99f6689a9542e184806",
"main.dart.js": "8313b6e7d0a2e41d2b5a36a588f16f68",
"manifest.json": "f7678fcc2f8eea932626c03f3922dff9",
"version.json": "1b7ec3691a6d8295129d17fcefbb2555"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
