import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBFe5QdESWOkpx3no_h6qphKbPB7g5Cr3M",
    authDomain: "react-ecomm-db-a0ed9.firebaseapp.com",
    projectId: "react-ecomm-db-a0ed9",
    storageBucket: "react-ecomm-db-a0ed9.appspot.com",
    messagingSenderId: "760847745395",
    appId: "1:760847745395:web:f8b79c01c84839c2454506",
    measurementId: "G-PB48YG90HQ"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;