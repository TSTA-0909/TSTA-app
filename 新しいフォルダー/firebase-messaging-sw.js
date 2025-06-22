importScripts('https://www.gstatic.com/firebasejs/11.8.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/11.8.0/firebase-messaging.js');

firebase.initializeApp({
  apiKey: "...",
  authDomain: "...",
  projectId: "...",
  messagingSenderId: "...",
  appId: "..."
});

const messaging = firebase.messaging();

self.addEventListener('push', event => {
  // ...
});
