import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "./Firebase";

export const Authcontext =createContext(null)
const provider = new GoogleAuthProvider();
const auth = getAuth(app);

const Authprovider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setloading] =useState(true)

    const createUser =(email,password) =>{
        setloading(true)
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signIn =(email,password) =>{
        setloading(true)
        return signInWithEmailAndPassword(auth,email,password)
    }

    const updateUserprofile =(name,photo) =>{
        setloading(true)
       return updateProfile(auth.currentUser,{
            displayName:name, photoURL:photo
        })
    }

  const googleSign = () =>{
    setloading(true)
    return signInWithPopup(auth,provider)

  }

    const logout = () =>{
        setloading(true)
        return signOut(auth)
    }

  useEffect(()=>{

   const unsubscribe = onAuthStateChanged(auth,currentUser =>{
        setUser(currentUser)
        console.log("current user is here",currentUser);
        setloading(false)
    })
    return () =>{
        return unsubscribe();
    }

  },[])

    const Authinfo = { user, loading, createUser, signIn, logout, updateUserprofile, googleSign }
    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;