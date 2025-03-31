import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyArmFCU11tslrpG4KlF7qIJ5SbSuyQIJdc",
    authDomain: "my-portfolio-547ab.firebaseapp.com",
    projectId: "my-portfolio-547ab",
    storageBucket: "my-portfolio-547ab.firebasestorage.app",
    messagingSenderId: "1035270189228",
    appId: "1:1035270189228:web:694e66965c2ebb0f126f09",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);