import { getApp, getApps, initializeApp } from 'firebase/app';
import { getAuth } from 'firebase/auth';
import {
    doc,
    getDoc,
    getFirestore,
    updateDoc,
} from 'firebase/firestore';
import { Orders } from "../services/interfaces";

const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: process.env.REACT_APP_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.REACT_APP_FIREBASE_PROJECT_ID,
    storageBucket: process.env.REACT_APP_FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.REACT_APP_FIREBASE_APP_ID,
    measurementId: process.env.REACT_APP_MEASUREMENT_ID,
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();
const auth = getAuth(app);
const firestore = getFirestore(app);
const firebaseID = process.env.REACT_APP_FIREBASE_ID!;

const getUserDocument = async ( userUid: string ) => {
    if (!userUid) return;

    const userRef = doc(firestore, 'users', userUid);

    const snapshot = await getDoc(userRef);

    return snapshot.data();
};
const getOrdersDocument = async () => {
    const orderRef = doc(firestore, 'orders', "7RgrTZ3Cv2wVD0wcNUQr");

    const snapshot = await getDoc(orderRef);

    // @ts-ignore
    return snapshot.data().orders;
};

const updateOrdersDocument = async (
    newData: Orders,
) => {
    const orderDoc = doc(firestore, 'orders', "7RgrTZ3Cv2wVD0wcNUQr");
    const snapshot = await getDoc(orderDoc);
    let array = [];

    if (snapshot.data()) {
        // @ts-ignore
        array = snapshot.data().orders
    }

    array.push(newData);

    if (orderDoc) {
        await updateDoc(orderDoc, {
            orders: array,
        });
    }
};

export {
    auth,
    firestore,
    app,
    getUserDocument,
    getOrdersDocument,
    updateOrdersDocument
};
