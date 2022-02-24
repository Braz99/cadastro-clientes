import * as firebase from "firebase/app";

import {
  QueryDocumentSnapshot,
  getDoc,
  setDoc,
  updateDoc,
  deleteDoc,
  getFirestore,
} from "firebase/firestore";

if (firebase.getApps().length <= 0) {
  firebase.initializeApp({
    apiKey: process.env.NEXT_PUBLIC_FIREBASE_APP_KEY,
    authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
    projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  });
}

export default firebase;
