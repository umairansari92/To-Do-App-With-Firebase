
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyB2ysNQLsh16tAlpWokJj9L7oXN5pjipnQ",
    authDomain: "to-do-app-dc044.firebaseapp.com",
    projectId: "to-do-app-dc044",
    storageBucket: "to-do-app-dc044.firebasestorage.app",
    messagingSenderId: "247900712018",
    appId: "1:247900712018:web:9ebfc83ed1bc163e6f038b",
    measurementId: "G-9JENPEXLDZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// console.log(app)

export { db, collection, addDoc, getDocs, deleteDoc, doc };