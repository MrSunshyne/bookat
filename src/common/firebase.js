import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/database';
// import 'firebase/storage';

const config = {
  apiKey: 'AIzaSyBXzp0H4Cvi01jRkrjFwyJPI8z3N5dOTG0',
  authDomain: 'bookat-5e039.firebaseapp.com',
  databaseURL: 'https://bookat-5e039.firebaseio.com',
  projectId: 'bookat-5e039',
  storageBucket: 'bookat-5e039.appspot.com',
  messagingSenderId: '230769282985',
};
firebase.initializeApp(config);

// global.firebase = firebase;

export default firebase;
