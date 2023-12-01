import { useState, useEffect } from 'react';
import 'firebase/compat/auth';
import firebase from './firebase';

export const signUp = (email, password) => {
  console.log(email, password);
  return firebase.auth().createUserWithEmailAndPassword(email, password);
};

export const signIn = (email, password) => {
  return firebase.auth().signInWithEmailAndPassword(email, password);
};

export const signOut = () => {
  return firebase.auth().signOut();
};

export const useAuth = () => {
  const [currentUser, setCurrentUser] = useState(null);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged(user => {
      console.log('user', user)
      setCurrentUser(user);
    });
    return unsubscribe;
  }, []);

  return currentUser;
};
