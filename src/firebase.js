import firebase from "firebase";
const firebaseConfig = {
    apiKey: "AIzaSyBs9PIXKI8qe6xsBm7hTRG1lXMXvU_omy0",
    authDomain: "linkedin-clone-d01ae.firebaseapp.com",
    projectId: "linkedin-clone-d01ae",
    storageBucket: "linkedin-clone-d01ae.appspot.com",
    messagingSenderId: "246727121895",
    appId: "1:246727121895:web:c928d2428297e85114fb42",
    measurementId: "G-XB6NEJ3VF0"
  };


  const firebaseApp=firebase.initializeApp(firebaseConfig);
  const db =firebaseApp.firestore();
  const auth=firebase.auth;
  const provider=new firebase.auth.GoogleAuthProvider();
  const storage=firebase.storage();
  export {auth,provider,storage};
  export default db;