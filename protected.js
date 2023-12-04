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
  const db = firebaseApp.firestore();
  
  const name = document.getElementById("name");
  const addBtn = document.getElementById("addBtn");

  //checking if user is logged in or not
  auth.onAuthStateChanged(function(user) {
    if (user) {
        // User is signed in, allow access to the protected route
        console.log("User is signed in");
        //window.location.href = "protected.html"; // Redirect to the protected page
    } else {
        // No user is signed in, redirect to the login page or show a message
        console.log("No user is signed in");
        window.location.href = "login.html"; // Redirect to the login page
    }
  });

  // Sign up and Sign in event listeners
  signOutBtn.addEventListener("click", () => {
    auth.signOut().then(() => {
      alert("User signed out successfully");
        window.location.href = "login.html";
    });
  });

    // Add a new document with a generated id.
    addBtn.addEventListener("click", () => {
        db.collection("users").add({
            name: name.value
        })
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
            alert("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
            alert("Error adding document: ", error);
        });
    });

    // Read data from firestore
    /*db.collection("users").get().then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data().name}`);
        });
        //add data to ul element with id of usersList 
        const usersList = document.getElementById("usersList");
        usersList.innerHTML = "";

        querySnapshot.forEach((doc) => {
            usersList.innerHTML += `<li>${doc.data().name}</li>`;
        });

    });*/

    //get where clause
    /*db.collection("users").where("name", "==", "John Doe")
    .get()
    .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch((error) => {
        console.log("Error getting documents: ", error);
    });*/

    // Realtime listener
    db.collection("users").onSnapshot((querySnapshot) => {
        const usersList = document.getElementById("usersList");
        usersList.innerHTML = "";

        querySnapshot.forEach((doc) => {
            usersList.innerHTML += `<li>${doc.data().name}</li>`;
        });
    });

    



  