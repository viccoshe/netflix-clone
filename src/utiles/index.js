import { initializeApp } from "firebase/app";
import { getAuth, 
        createUserWithEmailAndPassword, 
        signInWithEmailAndPassword, 
        signOut,
        GoogleAuthProvider,
        signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBXfSftR4ABCi7bt6iLCiHCDHa6w6XEzaQ",
  authDomain: "netflix-clone-b2f54.firebaseapp.com",
  projectId: "netflix-clone-b2f54",
  storageBucket: "netflix-clone-b2f54.appspot.com",
  messagingSenderId: "468624605349",
  appId: "1:468624605349:web:3f4de36616beea32d70d4c"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
const provider = new GoogleAuthProvider();


export const registerUser = async( email, password ) => {
  createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log('Error code is ' + error.code + ': ' + error.message)
  });
}

export const singInUser = async( email, password ) => {
  signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
  })
  .catch((error) => {
    console.log('Error code is ' + error.code + ': ' + error.message)
  });
}

export const signOutUser = async() => {
  signOut(auth).then((user) => {
  }).catch((err) => console.log(err));
}

export const logInViaGoogle = async() => {
  signInWithPopup(auth, provider)
  .then((result) => {
    const user = result.user;
  }).catch((error) => {
    console.log('Error code is ' + error.code + ': ' + error.message)
  });
}
