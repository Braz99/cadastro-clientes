import { initializeApp, getApps } from "firebase/app";
import "firebase/firestore";


const createFirebase = () => {
  if (getApps().length <= 0) {
    const app = initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_APP_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });

    return app;
  }
};

export default createFirebase;
