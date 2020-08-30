import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyDz00MpOZGa--vcLpdoZJJHZn-UNM7s85k",
  authDomain: "facebook-clone-arif.firebaseapp.com",
  databaseURL: "https://facebook-clone-arif.firebaseio.com",
  projectId: "facebook-clone-arif",
  storageBucket: "facebook-clone-arif.appspot.com",
  messagingSenderId: "407529370430",
  appId: "1:407529370430:web:971dbf2324ff2a58b7b26f",
  measurementId: "G-N81JYXXYCP"
};

// initialize our app
const firebaseApp = firebase.initializeApp(firebaseConfig);

// initial database
const db = firebaseApp.firestore();

// set auth
const auth = firebase.auth();

// set provider
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;