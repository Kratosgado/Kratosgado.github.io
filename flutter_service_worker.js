'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"index.html": "2e1d77740684fb986cd808e6ffe1f110",
"/": "2e1d77740684fb986cd808e6ffe1f110",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"flutter.js": "383e55f7f3cce5be08fcf1f3881f585c",
"canvaskit/canvaskit.js": "738255d00768497e86aa4ca510cce1e1",
"canvaskit/skwasm.js.symbols": "c3c05bd50bdf59da8626bbe446ce65a3",
"canvaskit/skwasm.js": "5d4f9263ec93efeb022bb14a3881d240",
"canvaskit/chromium/canvaskit.js": "901bb9e28fac643b7da75ecfd3339f3f",
"canvaskit/chromium/canvaskit.wasm": "399e2344480862e2dfa26f12fa5891d7",
"canvaskit/chromium/canvaskit.js.symbols": "ee7e331f7f5bbf5ec937737542112372",
"canvaskit/skwasm.wasm": "4051bfc27ba29bf420d17aa0c3a98bce",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03",
"canvaskit/canvaskit.wasm": "9251bb81ae8464c4df3b072f84aa969b",
"canvaskit/canvaskit.js.symbols": "74a84c23f5ada42fe063514c587968c6",
"assets/NOTICES": "3d1f3a52bd9f3e951c0b81e74501be70",
"assets/AssetManifest.bin": "373234d664ffe656d0fb4039a86ad513",
"assets/FontManifest.json": "5a32d4310a6f5d9a6b651e75ba0d7372",
"assets/fonts/MaterialIcons-Regular.otf": "a8dc7723d1a86d701bae949e081faedd",
"assets/AssetManifest.bin.json": "4446c963dde6091a6b6de4cb1ae02947",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.json": "801125fca546f506babac9af4ec061ba",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "eeefad5512dfbffba365ff0cde4d6e6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "f3307f62ddff94d2cd8b103daf8d1b0f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "04f83c01dded195a11d21c2edf643455",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "088d57bc5172ba21afd70fcd83429955",
"version.json": "2534f244d19539e2e2882f31b05faeec",
"manifest.json": "44b8e586076dcf76f379c636a8023c76",
"main.dart.js": "6281c486c314bb8ba69ac82f8a3022fa",
".git/config": "26b87ac2eec2b48a2d1cd3d99474ae79",
".git/logs/refs/remotes/origin/main": "c331ee6cb5f72fdd04a8b705423b88b7",
".git/logs/refs/heads/main": "98d5365efce9de6617dff1a6baa87971",
".git/logs/HEAD": "3927249325ac676235286c8bdb7e726d",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/refs/remotes/origin/main": "f9e1cf96de6c71a4af9b7d43c6feb972",
".git/refs/heads/main": "989d285d76d93d3684c0eebfd70db902",
".git/index": "44b21508e75a170c81695d5dc6988e11",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/objects/62/2d91e403d70a9aa24d6868e6533643a5a1fa8c": "13a019ddc8980804e4f976ff94cc004d",
".git/objects/62/c89ee094658c7a9465824fdb42793a64ea557b": "133cd5da638f245b079d9e9cdc29ae38",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/76/47d430659d41bd996080f01aec757e6a4fd3f9": "c35449f23d5ac44ebb23ea80f1a368c8",
".git/objects/78/784dfcf442678fb957c96df46ede8a20ccedb5": "3a278c07836fc87b87a84ffc143dbf48",
".git/objects/de/f5187f9a3672910fb7cb4ea6d4735fcdb4730c": "ec147c47d79d62e8c6fa096dc0be87e3",
".git/objects/44/a29719facc9a9651c409fb04d615e870d572ba": "4ce113ff2f81e93ae6972b0c5c6c322b",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/1d/4314c9ec244627f1f19c74cf468cbf52db04bf": "d76d39e3c384653833cc43dec49bf7b2",
".git/objects/2e/c0a3d542f89823d4d2a1e8f513f2fe217cf01d": "5258e6daae8d29ba6a188b7c194793c0",
".git/objects/9f/8355a050415ac5e7697d792e3b85053fa22b3a": "fc5211223cf72a091ce562db693606de",
".git/objects/a0/3af107076fd4b3a179ffb5651e50118e05c11c": "9936b9e4ff46c4c2bff0dad63e935cb3",
".git/objects/b2/37be1df9bba5557a3a6b60a7df38b86b768865": "928a4b395e58fa2177cf61252b6a39cf",
".git/objects/e7/34aca4d5f2fc7aca32ecd3eda51a053af6d464": "4477c8b3fdb294fb2614f5c42f0ae49f",
".git/objects/f7/44108d81c6825a6742d587270e0932db3190ba": "e45af91527281d7a3099d16303d7b7be",
".git/objects/9e/8d648f93b9340e099fae3adba41d5a4b4f10cf": "b2b090fdadfa330d3cbd28b18ca15bb2",
".git/objects/73/57d91dc3873864b7c09dbba3cfe72bb7d24e46": "adf111a776ea8889639719e6712a8c2e",
".git/objects/e3/35e8f7fe37571035b0f38e5a6b0885e78c4b88": "be2a32295f298a7de351bb4ab6bcfbd6",
".git/objects/2a/0154c2ae72dd931230d83b70908728cc1bda2b": "dad9d6be4bde4f09d8dd3b78c8beb743",
".git/objects/b3/ebbd38f666d4ffa1a394c5de15582f9d7ca6c0": "23010709b2d5951ca2b3be3dd49f09df",
".git/objects/71/3f932c591e8f661aa4a8e54c32c196262fd574": "66c6c54fbdf71902cb7321617d5fa33c",
".git/objects/88/75b4040365ba6428fe9e5b621a2cd8aae6c142": "9bd7aa5127c70a5ea1725de01e58f83f",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/fb/56fe3981b404c91df4b0749bdd8a6dfae21c36": "8d71dc2673ea5cabbde1ae2ae011fef2",
".git/objects/f2/f7e77fe37670c46f241d37d13e04f44e7dd935": "ebcf0095260eb267cd86171ecf860d74",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/94/f7d06e926d627b554eb130e3c3522a941d670a": "77a772baf4c39f0a3a9e45f3e4b285bb",
".git/objects/55/bc6fc58db0e3d7533c05a49daaf9a0d81898b0": "f5885b3e7f44b4ef7c0a2294e24ccd55",
".git/objects/55/a68d9d09bd6b39b9db8712296f8d7fc62b0ebb": "40415baa9e194a881d715452c09a8271",
".git/objects/49/adebdb511c8c293b28db3f6792e5bac28cdc32": "ba6a3971e7f06834fd6ec3844372ce17",
".git/objects/6f/7b0cd48521d6de4ad388bdd615ad32b6d2fd15": "64e70c9da6f1a223a6a6ec7b393764d7",
".git/objects/18/eb401097242a0ec205d5f8abd29a4c5e09c5a3": "4e08af90d04a082aab5eee741258a1dc",
".git/objects/8c/c348517458135641c17abe903b47be5f6c0162": "23e30c9e733563abd5683ab39de9f6f2",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/45/6a2be198ed688dc1135628f40787f3a8f4fd02": "1b070886f30c00e1728d070c86677cb4",
".git/objects/f0/f5ad8c496d45420427c122290ea983d6808624": "cf0007281ee381ee848443f5c04fdde2",
".git/objects/0f/c344c7e8b9e32ea1ad91f30ded22556352d7bf": "a8a30f28869f7378465338066f34d80d",
".git/objects/23/637bc3573701e2ad80a6f8be31b82926b4715f": "5f84f5c437bb2791fdc8411523eae8ff",
".git/objects/f1/03fac58b3cb932ad6a61d46ff7b4518dd60d06": "f8a85e6942907206c535bc972e895d46",
".git/objects/21/d9ad116eb8baf8ef7ce7bfae2cd7d1cb244db9": "e6f48b54daadbe1038a829d644ace590",
".git/objects/21/6717d4773f177a2d2742e0c3ae2de783c9e2b2": "e970e6e3181d5f657d916395ac25b1ca",
".git/objects/b1/f5f7c19c5b20f1fa72b33b91605a22638e2b48": "c8a513afcb9fe0f475109321810b86ed",
".git/objects/19/c9f7bb0ba68f75411841ee265e8303973acf4a": "0db5e2b594d57fb24c69c802c72f5a5c",
".git/objects/d1/186554e4c5b39d043841975316e87547afdd0f": "83bf34991bfd179c35cfb9fa33e78622",
".git/objects/d1/098e7588881061719e47766c43f49be0c3e38e": "f17e6af17b09b0874aa518914cfe9d8c",
".git/objects/27/0bfa977964725f03fb572c74d05716fe2b55ea": "2490b0c3e2cba67b7b989cc1a709bf3b",
".git/objects/c9/bf8af1b92c723b589cc9afadff1013fa0a0213": "632f11e7fee6909d99ecfd9eeab30973",
".git/objects/58/b007afeab6938f7283db26299ce2de9475d842": "6c6cbea527763bb3cdff2cecfee91721",
".git/objects/58/356635d1dc89f2ed71c73cf27d5eaf97d956cd": "f61f92e39b9805320d2895056208c1b7",
".git/objects/20/1afe538261bd7f9a38bed0524669398070d046": "82a4d6c731c1d8cdc48bce3ab3c11172",
".git/objects/20/cb2f80169bf29d673844d2bb6a73bc04f3bfb8": "b807949265987310dc442dc3f9f492a2",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/COMMIT_EDITMSG": "3c19d6a620e96333607780ebd171f1d4",
"flutter_bootstrap.js": "df7630affef1d7274ff0ce207d9d7226"};
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
