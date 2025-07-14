
// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import {
    getFirestore,
    collection,
    addDoc,
    getDocs,
    deleteDoc,
    doc,
    updateDoc,
    setDoc,
    getDoc,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-firestore.js";
import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/11.10.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import { firebaseConfig } from "../config.js"

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app)
// console.log(app)

export {
    db, collection, addDoc, getDocs, deleteDoc, doc, createUserWithEmailAndPassword, signInWithEmailAndPassword, getAuth, updateDoc,
    setDoc,
    getDoc
};