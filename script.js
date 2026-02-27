alert("JS file connect");
import { auth } from "./firebase-config.js";

import {
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    onAuthStateChanged,
    signOut
} from "firebase/app";

// -------- REGISTER --------
window.register = async function () {
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await createUserWithEmailAndPassword(auth, email, password);
        alert("Registration Successful!");
        window.location.href = "dashboard.html";
        window.location.href = "login.html";
    } catch (error) {
        alert(error.message);
    }
};

// -------- LOGIN --------
window.login = async function () {
    
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    try {
        await signInWithEmailAndPassword(auth, email, password);
       window.location.href = "dashboard.html";
       window.location.href = "login.html";
    } catch (error) {
        alert(error.message);
    }
};

// -------- AUTO CHECK LOGIN --------
onAuthStateChanged(auth, (user) => {
    if (!user && !window.location.href.includes("login.html")) {
        window.location.href = "login.html";
    }
});

// -------- LOGOUT --------
window.logout = async function () {
    await signOut(auth);
    window.location.href = "login.html";
};

// -------- PAGE NAVIGATION --------
window.goToDashboard = () => window.location.href = "dashboard.html";
window.goToChart = () => window.location.href = "chart.html";
window.goToUpdate = () => window.location.href = "update.html";
window.goToHistory = () => window.location.href = "history.html";