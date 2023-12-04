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
  
  const email = document.getElementById("emailInput");
  const password = document.getElementById("passwordInput");
  const signUpBtn = document.getElementById("signUpBtn");
  const signInBtn = document.getElementById("signInBtn");

  //checking if user is logged in or not
  auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in, allow access to the protected route
        console.log("User is signed in");
        window.location.href = "protected.html"; // Redirect to the protected page
    } else {
        // No user is signed in, redirect to the login page or show a message
        console.log("No user is signed in");
    }
  });

  // Sign up and Sign in event listeners
  signUpBtn.addEventListener("click", () => {
    console.log(email.value);
    auth
      .createUserWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        console.log(res.user);
        alert("New user created successfully !");
      })
      .catch((err) => {
        alert(err.message);
      });
  });
  
  signInBtn.addEventListener("click", () => {
    auth
      .signInWithEmailAndPassword(email.value, password.value)
      .then((res) => {
        console.log(res.user);
        alert("Log in successfull !");
      })
      .catch((err) => {
        alert(err.message);
      });
  });