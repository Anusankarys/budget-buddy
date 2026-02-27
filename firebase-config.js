import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/analytics";


const firebaseConfig = {
  apiKey: "AIzaSyA5TN-eYivG1DqTbhaB2YmCBOfTL_YQziY",
  authDomain: "budget-buddy-8e685.firebaseapp.com",
  projectId: "budget-buddy-8e685",
  storageBucket: "budget-buddy-8e685.firebasestorage.app",
  messagingSenderId: "560151973355",
  appId: "1:560151973355:web:f97a23edd5c1d6edb95dae"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);