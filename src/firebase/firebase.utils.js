import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBBwX_YGr1ez7TLOgjAf7qdUqflTpkQzKo",
  authDomain: "ecommerce-db-1bc89.firebaseapp.com",
  databaseURL: "https://ecommerce-db-1bc89.firebaseio.com",
  projectId: "ecommerce-db-1bc89",
  storageBucket: "ecommerce-db-1bc89.appspot.com",
  messagingSenderId: "881454576606",
  appId: "1:881454576606:web:72d3fbf06aad3e01c0634f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: "select_account"
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
