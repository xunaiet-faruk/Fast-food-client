import { createContext, useEffect, useState } from "react";
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { app } from "./Firebase";
import UseaxiosPublic from "../Hooks/UseaxiosPublic";

export const Authcontext =createContext(null)
const provider = new GoogleAuthProvider();
const auth = getAuth(app);
const Authprovider = ({children}) => {
    const [user,setUser] =useState(null)
    const [loading,setloading] =useState(true)
    const Axiospublic =UseaxiosPublic()

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
        if(currentUser){
            const userInfo ={email : currentUser.email};
            Axiospublic.post('/jwt',userInfo)
            .then(res =>{
                if(res.data.token){
                    localStorage.setItem('access token',res.data.token)
                }
            })
            
        }
        else{

            localStorage.removeItem("access token")
        }
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