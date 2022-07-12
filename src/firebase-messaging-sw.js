importScripts(
  'https://www.gstatic.com/firebasejs/9.6.11/firebase-app-compat.js',
)
importScripts(
  'https://www.gstatic.com/firebasejs/9.6.11/firebase-messaging-compat.js',
)

firebase.initializeApp({
  apiKey: 'AIzaSyAt6h73rGsJ6aQ1A3ZAxyZttE9_BiTIhJw',
  authDomain: 'costco-rn-service.firebaseapp.com',
  projectId: 'costco-rn-service',
  storageBucket: 'costco-rn-service.appspot.com',
  messagingSenderId: '182156691966',
  appId: '1:182156691966:web:6a9ac0d519ea88755498af',
  measurementId: 'G-FN1G4ZZMZX',
  databaseURL: 'https://costco-rn-service.firebaseapp.com/',
})

const messaging = firebase.messaging()
