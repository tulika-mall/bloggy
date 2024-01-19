// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import {
    getAuth,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signInWithPopup,
    sendPasswordResetEmail,
    GoogleAuthProvider,
    signOut,
  } from "firebase/auth";


  import {
    getFirestore,
    query,
    getDocs,
    collection,
    where,
    addDoc,
  } from "firebase/firestore";

  const swal = require("sweetalert2");

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyClOq585On0AXREtXHWcXc4AdoguIK7LQY",
  authDomain: "bloggy-1511.firebaseapp.com",
  projectId: "bloggy-1511",
  storageBucket: "bloggy-1511.appspot.com",
  messagingSenderId: "593059992082",
  appId: "1:593059992082:web:7fb58c54be22f24528becb",
  measurementId: "G-0CT4QMVBPB"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

const auth = getAuth(app);
const db = getFirestore(app);

// Gauth
const googleProvider = new GoogleAuthProvider();
const signInWithGoogle = async () => {
  try {
    const res = await signInWithPopup(auth, googleProvider);
    const user = res.user;
    const q = query(collection(db, "users"), where("uid", "==", user.uid));
    const docs = await getDocs(q);
    if (docs.docs.length === 0) {
      await addDoc(collection(db, "users"), {
        uid: user.uid,
        name: user.displayName,
        authProvider: "google",
        email: user.email,
      });
    }
  } catch (err) {
    console.error(err);
    alert(err.message);
  }
};

// Email Password SignIn
const logInWithEmailAndPassword = async (email, password) => {
  try {
    await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    console.error(err);
    swal.fire({
      title: err.message,
      icon: "error",
      toast: true,
      timer: 5000,
      position: "top-right",
      timerProgressBar: false,
      showConfirmButton: false,
    });
  }
};

// Email Password SignUp
const registerWithEmailAndPassword = async (name, email, password) => {
  try {
    console.log("name: "+ name,"email: "+  email, "password: "+  password)
    const res = await createUserWithEmailAndPassword(auth, email, password);
    const user = res.user;
    await addDoc(collection(db, "users"), {
      uid: user.uid,
      name,
      authProvider: "local",
      email,
    });
  } catch (err) {
    console.error(err);
    swal.fire({
      title: err.message,
      icon: "error",
      toast: true,
      timer: 5000,
      position: "top-right",
      timerProgressBar: false,
      showConfirmButton: false,
    });
  }
};

// Reset Password
const sendPasswordReset = async (email) => {
  try {
    await sendPasswordResetEmail(auth, email);
    swal.fire({
      title: "Reset Link Sent",
      icon: "success",
      toast: true,
      timer: 5000,
      position: "top-right",
      timerProgressBar: false,
      showConfirmButton: false,
    });
  } catch (err) {
    console.error(err);
    swal.fire({
      title: err.message,
      icon: "error",
      toast: true,
      timer: 5000,
      position: "top-right",
      timerProgressBar: false,
      showConfirmButton: false,
    });
  }
};

// Logout
const logout = () => {
  signOut(auth);
  swal.fire({
    title: "Logout Successfull",
    icon: "success",
    toast: true,
    timer: 5000,
    position: "top-right",
    timerProgressBar: false,
    showConfirmButton: false,
  });
};

//   Export Functions
export {
  auth,
  db,
  signInWithGoogle,
  logInWithEmailAndPassword,
  signInWithEmailAndPassword,
  registerWithEmailAndPassword,
  sendPasswordReset,
  logout,
};