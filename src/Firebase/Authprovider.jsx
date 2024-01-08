import { createContext, useEffect, useState } from "react";
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "./Firebase";

export const Authcontext =createContext(null)
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

  const Authinfo ={user,loading,createUser,signIn,logout}
    return (
        <Authcontext.Provider value={Authinfo}>
            {children}
        </Authcontext.Provider>
    );
};

export default Authprovider;