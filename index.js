const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyDUkqWKWWOGZ2emYVgaNoFSkRCZaGMDPwY",
    authDomain: "testing-3ff18.firebaseapp.com",
    projectId: "testing-3ff18",
    storageBucket: "testing-3ff18.appspot.com",
    messagingSenderId: "1032375860888",
    appId: "1:1032375860888:web:0e5ad8901fd680a28cdaed",
    measurementId: "G-ZMYHX3ZR46"
  });
  
  const auth = firebaseApp.auth();

  //checking if user is logged in or not
  auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in, allow access to the protected route
        console.log("User is signed in");
        window.location.href = "protected.html"; // Redirect to the protected page
    } else {
        // No user is signed in, redirect to the login page or show a message
        console.log("No user is signed in");
        window.location.href = "login.html"; // Redirect to the login page
    }
  });
