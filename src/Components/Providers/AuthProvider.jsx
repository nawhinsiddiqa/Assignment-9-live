import React, { useState,createContext, useEffect } from "react";
import  { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth"; 
import { auth } from "../../firebase.init";


 export const AuthContext=createContext(null);
 const googleProvider=new GoogleAuthProvider();
 
const AuthProvider = ({children}) => {

    const[user,setUser]=useState(null)
    const createUser=(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password);
    }
     
         const signInUser=(email,password)=>{
            return signInWithEmailAndPassword(auth,email,password)
         }

         const signInWithGoogle=()=>{
            return signInWithPopup(auth,googleProvider);
         }
         
         const signOutUser=()=>{
            return signOut(auth);
         }

      useEffect(()=>{
  const unSubscribe =      onAuthStateChanged(auth,currentUser=>{
            if(currentUser){
                console.log('currently logged user',currentUser)
                setUser(currentUser)
            }
           else{
            setUser(null)
           }
          })

          return()=>{
            unSubscribe();
          }
      },[])




    const authInfo={
        user,
        createUser,
        signInUser,
        signOutUser,
        signInWithGoogle
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;