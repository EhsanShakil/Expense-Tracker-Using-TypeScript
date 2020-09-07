let cacheData = "Expense_Tracker";

this.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(cacheData).then((cache) => {
      cache.addAll([
        "/",
        "/index.html",
        "/static/js/main.chunk.js",
        "/static/js/0.chunk.js",
        "/static/js/bundle.js",
      ]);
    })
  );
});
this.addEventListener("fetch", (event) => {
  if (!navigator.onLine) {
    event.respondWith(
      cache.match(event.request).then((result) => {
        if (result) {
          return result;
        }
        let requestURL = event.request.clone();
        return fetch(requestURL);
      })
    );
  }
});
