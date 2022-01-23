'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "assets/AssetManifest.json": "df89850e6198ab8911e973fe18b90af9",
"assets/assets/fonts/Poppins/Poppins-Black.ttf": "0573b9231a8316427ad6e751b52e87a4",
"assets/assets/fonts/Poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/Poppins/Poppins-ExtraBold.ttf": "544fa4f2678a8285eb88b8dfe503c90c",
"assets/assets/fonts/Poppins/Poppins-ExtraLight.ttf": "86a2f13e91ac85080ebaeaab9463b9f1",
"assets/assets/fonts/Poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/fonts/Poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/Poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/Poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/Poppins/Poppins-Thin.ttf": "25cd0f688f815bc4f6ac2b71eb6278ba",
"assets/assets/icons/All%2520excercise%2520%2520option%25201.jpg": "2e204126dafa828c5053d4339f688c3b",
"assets/assets/icons/basketball.png": "df35ed5e55ffc0759f4fbdeae68478fc",
"assets/assets/icons/blackboard.png": "3096f02b9329e3a83a29e221f8e990d8",
"assets/assets/icons/calendar.svg": "1ece75e9fa3712d794cae900358ee2dd",
"assets/assets/icons/Camera%2520Icon.svg": "2632909ea0e70172501465411815b712",
"assets/assets/icons/english.png": "9eebf3ad7859ad903fbd1813929bc5fa",
"assets/assets/icons/Excrecises.svg": "d8d7428840411cbf681b72b75a2a3c57",
"assets/assets/icons/guitar.svg": "e0b5adab9f014aa8fb20bf62ec434f67",
"assets/assets/icons/guitar2.svg": "d37c1fbe592b33c465e5b1e8494ca820",
"assets/assets/icons/guitar32.png": "7a71fcd4ba7dec31b4a9529e6d70eb3c",
"assets/assets/icons/guitar322.png": "f54b9a8c7c8a0e939be346561d360266",
"assets/assets/icons/guitarll.png": "b87dd8efb63f76ee72d41a6ddf1b52b9",
"assets/assets/icons/guitarrasvg.png": "24bfea2a5e9a1e69763b3b7126383bdf",
"assets/assets/icons/gym.svg": "bbf09882a01dd1736991878f42891fbc",
"assets/assets/icons/Hamburger.svg": "97354a3dd3870f8060202ab41208e45b",
"assets/assets/icons/icono.png": "37d89f9c6518b7f6710e86362e291163",
"assets/assets/icons/Lock.svg": "b7b269fcc99033e8039e9bea1d3030ce",
"assets/assets/icons/logo.jpeg": "4da54437ff5c059f136bb6575c676437",
"assets/assets/icons/Meditation.svg": "4d7d8aba086040abd2086f149c399884",
"assets/assets/icons/meditation_bg.svg": "697278b74772ff3273694843a2df1458",
"assets/assets/icons/Meditation_women_small.svg": "bf396f41add5c53e7a7c094d42cc6d8a",
"assets/assets/icons/menu.svg": "0f2f28ec1e386f5bf957fdfb322f3759",
"assets/assets/icons/pilates_gpdb.svg": "eb661683b0267396cc4c8cef6cf1cd57",
"assets/assets/icons/programming.png": "4b629934f87aa478aa47eabdbfd01b80",
"assets/assets/icons/search.svg": "9d6d9f947059b2c3a2d22e5454c58f29",
"assets/assets/icons/Settings.svg": "58ecba815c8496b63207a919f64cef16",
"assets/assets/icons/tennis.png": "54bfb183f8fef44550958dfc61807c8b",
"assets/assets/icons/TimeIcon.svg": "f6dbdae68b4785d099a8752303f7439c",
"assets/assets/icons/yoga.svg": "bf05ddf814bdd23de06d639e8685cb8b",
"assets/assets/icons/yoga_women.svg": "80226b84c0043f65894da94deb2895fc",
"assets/assets/images/fondo.jpg": "a224c4ba32585154846745100469e2e2",
"assets/assets/images/luffy.jpg": "4b10cbd34ad2a4bfc8b0f1fd39370209",
"assets/assets/images/meditation_bg.png": "aa94331127b67abc08d5f0f80dd13018",
"assets/assets/images/perfilimage.jpg": "52ddbad0a792523b2e9f9b0a390da26b",
"assets/assets/images/undraw_pilates_gpdb.png": "a57e817e33a29b996813ec85d29065f0",
"assets/assets/logo.png": "ecb2336fa7640eb9caecde03b7a748e7",
"assets/FontManifest.json": "5135c43caf70164c22dc2a510e5d197f",
"assets/fonts/MaterialIcons-Regular.otf": "4e6447691c9509f7acdbf8a931a85ca1",
"assets/NOTICES": "af371a1d27dbcfc983bf7815b97470ea",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/material_design_icons_flutter/lib/fonts/materialdesignicons-webfont.ttf": "b62641afc9ab487008e996a5c5865e56",
"canvaskit/canvaskit.js": "43fa9e17039a625450b6aba93baf521e",
"canvaskit/canvaskit.wasm": "04ed3c745ff1dee16504be01f9623498",
"canvaskit/profiling/canvaskit.js": "f3bfccc993a1e0bfdd3440af60d99df4",
"canvaskit/profiling/canvaskit.wasm": "a9610cf39260f60fbe7524a785c66101",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b526d8f8010f5bb2ecb98d8ddd0f3784",
"/": "b526d8f8010f5bb2ecb98d8ddd0f3784",
"main.dart.js": "ee7507d2adaed62e7d17d7cdf6a0bb10",
"manifest.json": "fc62a68ea33a8ba5baaddd929fc9f304",
"version.json": "279b672320edaebc046d85fb892787f4"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
