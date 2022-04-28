import { initializeApp } from "firebase/app";
import { getAuth } from"firebase/auth";
import { getStorage } from "firebase/storage"


const firebaseConfig = {
    apiKey: "AIzaSyBTkIT-02K9xk8-O5O3YBquT71dO31NkVw",
    authDomain: "disneyclone-fd507.firebaseapp.com",
    projectId: "disneyclone-fd507",
    storageBucket: "disneyclone-fd507.appspot.com",
    messagingSenderId: "88799472328",
    appId: "1:88799472328:web:9ea267061482fed3eb13fd",
    measurementId: "G-83XEHQL3ND"
  };

  const app = initializeApp(firebaseConfig);
  const authentication = getAuth(app);
  const storage = getStorage(app)

   
 export{ authentication, storage};