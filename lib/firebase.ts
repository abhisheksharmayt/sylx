import { initializeApp, getApps, FirebaseApp } from "firebase/app";

const firebaseConfig = {
  databaseURL: process.env.NEXT_PUBLIC_FIREBASE_URI,
};

let firebaseApp: FirebaseApp | null = null;

export function initFirebase(): FirebaseApp | null {
  // Check if Firebase URL is configured
  if (!firebaseConfig.databaseURL) {
    console.warn("Firebase Database URL not configured. Set NEXT_PUBLIC_FIREBASE_URI in .env.local");
    return null;
  }

  // Only initialize if not already initialized
  if (!getApps().length) {
    firebaseApp = initializeApp(firebaseConfig);
  } else {
    firebaseApp = getApps()[0];
  }

  return firebaseApp;
}

export { firebaseApp };

