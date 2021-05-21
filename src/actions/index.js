import { auth, provider, storage } from "../firebase";
import firebase from "firebase";
//import {SET_USER} from "./actionType";
import { SET_USER, SET_LOADING_STATUS, GET_ARTICLES } from "./actionType";
import db from "../firebase";

export const setUser = (payload) => ({
  type: SET_USER,
  user: payload,
});

export const setLoading = (status) => ({
  type: SET_LOADING_STATUS,
  status: status,
});

export const getArticles = (payload) => ({
  
  type:GET_ARTICLES,
  payload: payload,
});
export function signInAPI() {
  //auth is a function coming from firebase
  return (dispatch) => {
    firebase
      .auth()
      .signInWithPopup(provider)
      .then((payload) => {
        dispatch(setUser(payload.user));
        console.log(payload.user);
      })
      .catch((error) => {
        alert(error.message);
      });
  };
}

export function getUserAuth() {
  return (dispatch) => {
    firebase.auth().onAuthStateChanged(async (user) => {
      if (user) {
        // User is signed in.
        dispatch(setUser(user));
      } else {
        // User is signed out.
      }
    });
  };
}

export function signOutAPI() {
  debugger;
  return (dispatch) => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        dispatch(setUser(null));
      })
      .catch((error) => {
        // An error happened.
        console.log(error.message);
      });
  };
}

export function postArticleAPI(payload) {
  console.log("payload image ", payload);
  return (dispatch) => {
    if (payload.image != "") {
      const upload = storage
        .ref(`images/${payload.image.name}`)
        .put(payload.image);
      upload.on(
        "state_changed",
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;

          console.log(`Progress: ${progress}%`);

          if (snapshot.state === "RUNNING") {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => console.log(error.code),
        async () => {
          const downloadURL = await upload.snapshot.ref.getDownloadURL();
          //ddb collection
          db.collection("articles").add({
            actor: {
              description: payload.user.email,
              title: payload.user.displayName,
              date: payload.timestamp,
              image: payload.user.photoURL,
            },
            video: payload.video,
            sharedImg: downloadURL,
            comments: 0,
            description: payload.description,
          });
          dispatch(setLoading(false));
        }
      );
    } else if (payload.video) {
      db.collection("articles").add({
        actor: {
          description: payload.user.email,
          title: payload.user.displayName,
          date: payload.timestamp,
          image: payload.user.photoURL,
        },
        video: payload.video,
        sharedImg: "",
        comments: 0,
        description: payload.description,
      });
      dispatch(setLoading(false));
    }
  };
}

export function getArticlesAPI() {
  return (dispatch) => {
    let payload;
    db.collection("articles").orderBy("actor.date", "desc")
      .onSnapshot((snapshot) => {
        //allos to read data from my firebase
        payload = snapshot.docs.map((doc) => doc.data());
        console.log("articles payload ", payload.length);
        console.log("articles payload ", payload);
        dispatch(getArticles(payload));
      });
  };
}
