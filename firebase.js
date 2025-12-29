import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "TU",
  authDomain: "TU",
  projectId: "TU",
  storageBucket: "TU",
  messagingSenderId: "TU",
  appId: "TU"
};

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
