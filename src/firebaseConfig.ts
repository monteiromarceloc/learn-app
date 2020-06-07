import * as firebase from 'firebase';

const config = {
  apiKey: "AIzaSyDmSWxiyJfdrB0nYIwUS8kfAK_9mXIrtVg",
  authDomain: "learn-project-16b94.firebaseapp.com",
  databaseURL: "https://learn-project-16b94.firebaseio.com",
  projectId: "learn-project-16b94",
  storageBucket: "learn-project-16b94.appspot.com",
  messagingSenderId: "572052001299",
  appId: "1:572052001299:web:905e4bfaf0ce64b1d3e5e6",
  measurementId: "G-9171BTNVWE"
};

firebase.initializeApp(config);

// Initialize analytcs later
// firebase.analytics();

export default firebase;