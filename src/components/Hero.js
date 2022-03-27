import React from "react";
import { LinkStorage } from "./LinkStorage";

function Hero(){

    return(
        <>
        <div className="container mx-auto flex flex-col md:flex-row items-center my-12 md:my-24">
            <div className="flex flex-col w-full lg:w-1/2 justify-center items-start pt-12 pb-24 px-6">
                <p className="uppercase tracking-loose">Lucas Hochart</p>
                <h1 className="font-bold text-3xl my-4">Développeur Web et Mobile</h1>
                <p className="leading-normal mb-12">Je fais de mon métier ma passion. Mon but premier étant de concevoir et développeur des applications web et mobiles correspondant au maximum au besoin client.</p>
                <LinkStorage />
                   
            </div>
            <div className="w-full lg:w-1/2 lg:py-6 text-center">
                <svg className="fill-current text-gray-900 w-3/5 mx-auto" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M17 6V5h-2V2H3v14h5v4h3.25H11a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6zm-5.75 14H3a2 2 0 0 1-2-2V2c0-1.1.9-2 2-2h12a2 2 0 0 1 2 2v4a2 2 0 0 1 2 2v10a2 2 0 0 1-2 2h-5.75zM11 8v8h6V8h-6zm3 11a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/></svg>
            </div>
            <div id="#firebaseuimodal">

            </div>            
	    </div>
        </>
    )
}

export default Hero;