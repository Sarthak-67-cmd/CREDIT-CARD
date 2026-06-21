const CACHE_NAME = "cardzen-v1";

const FILES_TO_CACHE = [

  "./",
  "./index.html",
  "./dashboard.html",
  "./profile.html",
  "./dashboard.css",
  "./profile.css",
  "./dashboard.js",
  "./profile.js",
  "./firebase.js",

  "./images/logo.png",
  "./images/icon-192.png",
  "./images/icon-512.png"

];



self.addEventListener("install", (event) => {

    event.waitUntil(

        caches.open(CACHE_NAME)

        .then((cache) => {

            console.log("Caching App");

            return cache.addAll(FILES_TO_CACHE);

        })

    );

    self.skipWaiting();

});



self.addEventListener("activate", (event) => {

    event.waitUntil(

        caches.keys()

        .then((keys) => {

            return Promise.all(

                keys.map((key) => {

                    if (key !== CACHE_NAME) {

                        return caches.delete(key);

                    }

                })

            );

        })

    );

    self.clients.claim();

});



self.addEventListener("fetch", (event) => {

    if (event.request.method !== "GET") return;

    event.respondWith(

        caches.match(event.request)

        .then((response) => {

            return response || fetch(event.request)

            .then((networkResponse) => {

                return caches.open(CACHE_NAME)

                .then((cache) => {

                    cache.put(event.request, networkResponse.clone());

                    return networkResponse;

                });

            })

            .catch(() => {

                if (event.request.destination === "document") {

                    return caches.match("./index.html");

                }

            });

        })

    );

});
