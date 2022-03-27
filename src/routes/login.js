import React from "react";
import { useState } from "react";
import { StyledFirebaseAuth } from "react-firebaseui";
import firebase from "firebase/compat/app";
import 'firebase/compat/auth';
import { app, configUi} from "../firebaseConf";
import Navbar from "../components/Navbar";

export default function Login(){

    return(
        <div>
            <h2 className="text-center my-10">
                Connexion
            </h2>            
            <StyledFirebaseAuth 
                uiConfig={configUi}
                firebaseAuth={firebase.auth()}
            />
            
        </div>
        
    )
}