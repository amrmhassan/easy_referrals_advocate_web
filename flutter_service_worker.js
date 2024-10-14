'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "d404401c8c6495b206fc35c95e55a6d5",
".git/config": "5a6945334001e6ee899931a05b8fdd89",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "e199e8f232e51090cb30cc0081cf6897",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "c3f96662f3befc69d4f70521617fd2af",
".git/logs/refs/heads/main": "c3f96662f3befc69d4f70521617fd2af",
".git/logs/refs/remotes/origin/main": "7598e9acb1cb69a586e735172665da87",
".git/objects/00/8f1badb7d471263b9ab9b98db5e887bedf1446": "91f3751a3c14f7feaf5fc5cfde00a752",
".git/objects/02/ff008616658d40646dcd0616e7b2d9203900b0": "de430c180787ebe3bcd1be9c0bf0e9a2",
".git/objects/06/b98ea47c2477ae3601fd53bf8795edde26f9bb": "a715f3818ed9e1ec2bb5395e24d6cf98",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/0c/37594409355f44e27de8152dd5be76567012e6": "be6abe3ed5650c087848c03a14b2e9df",
".git/objects/14/8aff1ce51386a3d6c13863910b0cd96be41290": "388b1cbdbe42ffed794fe97c975e6fb0",
".git/objects/15/6d275fcc141543306bcd4b04b597353feae0d6": "99b7b2b69f1006be1b8cf243b0727eab",
".git/objects/16/b0d2ba354d3d2588d744499f0a483656a89e62": "6b3dab5859f1755fc5b45c6f5923a6b8",
".git/objects/18/56d9b7c41fb694c2490f47b64e66f0c34b4315": "b97a66545993bf2f15cf5f52cbe927a8",
".git/objects/18/665a4d18178137208b22f4942826b1e413d092": "333db1c455e3fbbe223f98e03cd13ab1",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/23/25fe67e961726be12ae14c6789f120f00f9271": "fa305caacc2a3331f4098e633a52ef32",
".git/objects/26/1b26948f2d31005701b593ee07234c5dbc7fd1": "bf175b8d3cf54607e163428d2ad30cef",
".git/objects/29/3084b3aa66055bbbf31b781c3e1d3463058752": "77521faa4fc8066474ec1e9cc8f736ab",
".git/objects/2c/8286b486dbd904efaf6a8e9aadf41930559c9b": "ff09f294d2755a2275fb2ffaf97783b5",
".git/objects/2c/a4adff5c0ed0332f69d135884e51ec64f391a6": "84091a7c5be3652a880811cb79e69993",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3c/1a9c961fe8f6e883a90749354ea6621da015f5": "359f5fcb4cd34f87b7540de751b8ced5",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/41/4754bf344a42cab5b5512c1bbce29e4eb23bf2": "4f04dbaf6966c4735799eb96ee57b582",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/7d5a9dc753066a19e494f33214b8d04b1c359a": "f6c79b6774638acff4e40c9808f0fef7",
".git/objects/4d/c6163238f10198372894e197a38d62e409254b": "a18f7f006db9166f9090fccf2bdfc46e",
".git/objects/53/221071271d03ae5e77e952339d63aa0444040e": "ddc026d949cd319a37c972afc0689c56",
".git/objects/57/826512cbb69745a6855df9e8621ead37b10e71": "8879f8c6826a69766ee85d71a295a261",
".git/objects/5f/d2bca3bb9b0fbb305839dbf900381660d9aa20": "da0c35795ce63d1226302eb330a16ef1",
".git/objects/60/eb6aabbc78fa55c5eb67d25b402d4ac5de7210": "8a8e6ea968ef0baed5d534ddb32de570",
".git/objects/66/af6a5025fde8b6fbd91820cd5b317007f5aa46": "0ec8a0fd85ca6589d3febd325d6e176a",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/80/6706334f1d1b13d07e7a15848802b8efa9760d": "94f6e23227e02ed4dceedc207e243965",
".git/objects/81/1d9a3a419f36a86535b8ac3c79f52cda2450f3": "703e66c307da4c90b3bff9b225207818",
".git/objects/82/dc9ae0200d84b3f043c4150b2b402854b1fee7": "c8c3d993a81d384d2e838a4d0513ab53",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/f8982a76d1aa0138636782ad9a60b3a0ae9439": "20d97c1e91448ff6523e96a06e370235",
".git/objects/8e/fcdabf749a0bdda69b01b8724466969234e62d": "179037d75b9a992840a0ae5333e18d2e",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/92/502052e916a063f4535784fde5d4bfcf618444": "ad54c5ff549e7de9e0d00ce8d66cee24",
".git/objects/92/9a8e14ccb0c2c4709a71b547963721412080b5": "e2a69291b7a62fab3982085117058153",
".git/objects/93/c83ab8ab7014d967807413fab4498754ff16ca": "888030767b0593816a12c0ac2069e934",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/99/2cd3b66aeb45e98adae4f98dbcd1af37db691b": "b13b8970d8d37039bf8ee81928b410bb",
".git/objects/ab/d02aef9ae4c4b7645f376772afd9d0cce77af9": "94b7c438cadd88717064c69e4d60204e",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/bb/579b92786157e24edb110a472c907bed4127bd": "e7c9856331360b86c4878a1c5dd3e235",
".git/objects/be/26a143771b29619a5240969f18fcf3322ca138": "25687b01bacf16f427d9fc1a3708cb10",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/1271b935ba81812dc2af79d01aa5c2b19a02f0": "0e28745aac7011906e64fbb6914400e7",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e3/49cd0d3de1368b6179d410207db8e70e00cf77": "8b67c6845f9062164811021d9744b3a1",
".git/objects/e6/9de29bb2d1d6434b8b29ae775ad8c2e48c5391": "c70c34cbeefd40e7c0149b7a0c2c64c2",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ef/19c0077ef06c1e3c62cf06b7a6f32f4c4e28a9": "1deb31c78fe16df209a8f960749857a5",
".git/objects/f0/44b961b2d1113bccc94b89eb6dafb1f9b22af1": "3b5144f526d19a7c3a7b7a9f40d705f4",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/c246a4faa988e196b95cbdf289b5d2b0b913f1": "5fb122b3dde8bbf0336810a7028fa6b6",
".git/objects/fe/c145ab6ff071861999329a814e9431585a31a3": "358978b38f53477b697515757b2da8f9",
".git/refs/heads/main": "5f7452dc0037ccdaa2cb07515b8923ca",
".git/refs/remotes/origin/main": "5f7452dc0037ccdaa2cb07515b8923ca",
"assets/AssetManifest.bin": "76023cfa9492b3cb383b7a9faefbdfec",
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
"flutter_bootstrap.js": "4ac6fc8997a6a25b1e9e935caf433025",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "4b5e42fff978a99f6689a9542e184806",
"/": "4b5e42fff978a99f6689a9542e184806",
"main.dart.js": "9ec6fdaadcf19313f9c0dc6562eb6193",
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
