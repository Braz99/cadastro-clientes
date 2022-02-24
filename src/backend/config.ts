import { getApps, initializeApp, getApp } from "firebase/app";

const app = () => {
  if (getApps().length <= 0) {
    let initialize = initializeApp({
      apiKey: process.env.NEXT_PUBLIC_FIREBASE_APP_KEY,
      authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
      projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
    });

    return initialize;
  }
};

export default app;
