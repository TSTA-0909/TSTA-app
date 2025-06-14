// firebase-messaging-sw.js

importScripts('https://www.gstatic.com/firebasejs/11.8.0/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/11.8.0/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyC3pcdWqFwrvokCUyGGJlg_ruQ-6wUSZT8",
  authDomain: "tsta-reserve.firebaseapp.com",
  projectId: "tsta-reserve",
  storageBucket: "tsta-reserve.appspot.com",
  messagingSenderId: "242251329752",
  appId: "1:242251329752:web:f70718703ba8e35298a7ad"
});

const messaging = firebase.messaging();

// 通知を受け取ったときの処理
messaging.onBackgroundMessage((payload) => {
  console.log('[firebase-messaging-sw.js] 背景通知を受信:', payload);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
    icon: '/icon.png' // 任意のアイコン画像（PWA用と共有でOK）
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
