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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const userSnapshot = await userRef.get();

    //Check if this Google Auth user is there in our system, if not create a new user profile for that user

    if (!userSnapshot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        }
        catch (error) {
            console.log('error creating error', error.message);
        }
    }

    return userRef;
}

export const createUserAddress = async (userid, userAddress) => {
    const addressRef = firestore.collection('address');
    try {
        const addressSnapshot = await addressRef.where('linkedUser', '==', userid).get();

        if (addressSnapshot.empty) {
            await addressRef.add({
                linkedUser: userid,
                address: [{
                    ...userAddress
                }]
            })
        }
        else {
            let docToUpdate;
            addressSnapshot.forEach(doc => {
                docToUpdate = doc.id;
            });
            const docRef = firestore.doc(`address/${docToUpdate}`);
            await docRef.update({
                address: firebase.firestore.FieldValue.arrayUnion(userAddress)
            });
        }


    }
    catch (error) {
        console.log('error creating address', error.message)
    }
}

export const getAddressForUser = async (userId) => {

    const addressRef = firestore.collection('address');
    try {
        const addressSnapshot = await addressRef.where('linkedUser', '==', userId).get();
        return addressSnapshot;
    }
    catch (error) {
        console.error(error);
    }

}


firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// for google auth
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);



export default firebase;