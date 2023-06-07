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

export  const addToFavourites = ( movie ) => {
  let favourites = JSON.parse(localStorage.getItem('favourites'));
  if(favourites && favourites.length > 0){
      if(favourites.some((item, i) => item[0] === movie.id)){
          alert(`"${movie.name}" is already in your watchlist!`)
      }else{
          localStorage.setItem('favourites', JSON.stringify([...favourites, [movie.id]])); 
          alert(`"${movie.name}" is in your watchlist now!`)    
      }
  }else{
      localStorage.setItem('favourites', JSON.stringify([[movie.id]])); 
      alert(`"${movie.name}" is in your watchlist now!`)   
  }
}

export const toggleFavourites = ( movie ) => {
  let favourites = JSON.parse(localStorage.getItem('favourites'));
  if(favourites && favourites.length > 0){
    if(favourites.some((item, i) => item[0] === movie.id)){
        removeFromFavourites(movie);
    }else{
      addToFavourites(movie); 
    }
}else{
    addToFavourites(movie);    
}

}

export  const removeFromFavourites = ( movie ) => {
  let favourites = JSON.parse(localStorage.getItem('favourites'));
  if(favourites && favourites.length > 0){
      if(favourites.some((item) => item[0] === movie.id)){
        const elem = favourites.find((item, i) => item[i] === movie.id);
          favourites = favourites.filter(i => i !== favourites.find((item, i) => item[0] === movie.id));
          localStorage.setItem('favourites', JSON.stringify(favourites));
          alert(`"${movie.name}" is removed from your watchlist!`);
      }else{ 
          alert(`"${movie.name}" is not in your watchlist :(`)    
      }
  }
}

