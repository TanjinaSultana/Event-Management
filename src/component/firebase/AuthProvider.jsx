/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React, {  createContext, useEffect } from 'react';
import app from './firebase.config';
import {
    createUserWithEmailAndPassword,
    getAuth,
    GoogleAuthProvider,
    onAuthStateChanged,
    signInWithEmailAndPassword,
    signInWithPopup
} from "firebase/auth";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider()
const AuthProvider = ({children}) => {
    const googleSignIn = (value)=>{
        return signInWithPopup(auth,googleProvider)
    } ;
    const signIn = (email,password) =>{
        return signInWithEmailAndPassword(auth,email,password)
    }
    const signUp = (email,password) =>{
        return createUserWithEmailAndPassword(auth,email,password)
    }
    useEffect(() =>{
 const unsubscribe  = onAuthStateChanged(auth,(currentUser)  =>{
    
 })
    },[])
    const AuthInfo = {
        googleSignIn,
        signUp,
        signInWithEmailAndPassword,
        signIn
    }
    return (
        <AuthContext.Provider value={AuthInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;