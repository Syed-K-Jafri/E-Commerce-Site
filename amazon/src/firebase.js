import firebase from "firebase";

//this connects firebase to react frontend 

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyD3IzM2Xc3CDQmVIcZ1X8rPIgenYzg_ASE",
  authDomain: "clone-a126a.firebaseapp.com",
  projectId: "clone-a126a",
  storageBucket: "clone-a126a.appspot.com",
  messagingSenderId: "489023615865",
  appId: "1:489023615865:web:2ba9fc7233f0aa86d4b5a8",
  measurementId: "G-WJ3E48ZWGY",
});


const auth = firebase.auth();

export { auth };