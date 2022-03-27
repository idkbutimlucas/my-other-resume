import React from "react";
import { LinkStorage } from "./LinkStorage";

function Hero(){

    return(
        <>
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24 ">
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
                <p className="uppercase tracking-loose">Lucas Hochart</p>
                <h1 className="font-bold text-3xl my-4">Freelance Fullstack Developpeur.</h1>
                <p className="leading-normal mb-12">Je réaliserais votre site vitrine ou plateforme d'achat afin de convertir vos clients potentiels.</p>
                <LinkStorage />
                   
            </div>
            <img
                className="w-full lg:w-1/2 lg:py-6"
                src="https://firebasestorage.googleapis.com/v0/b/myresume-d58e8.appspot.com/o/pp%2FIMG_2288.JPG?alt=media&token=81bce403-d29e-4dcf-bb36-1be3b5e02b01"
                alt="Me"
                />            
            </div>          
        </>
    )
}

export default Hero;