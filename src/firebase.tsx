import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyCr8NaeKBbzsK51c3aCZJPedG5EAgbFUm0",
  authDomain: "expense-tra-d845f.firebaseapp.com",
  databaseURL: "https://expense-tra-d845f.firebaseio.com",
  projectId: "expense-tra-d845f",
  storageBucket: "expense-tra-d845f.appspot.com",
  messagingSenderId: "956383724060",
  appId: "1:956383724060:web:37a8eacfc38005d9b455d9",
};
firebase.initializeApp(firebaseConfig);

export default firebase;
