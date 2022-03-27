import { Component } from "react";
import { app } from "../firebaseConf";
import {getStorage, ref, getDownloadURL} from 'firebase/storage'

export class LinkStorage extends Component{

    state = {
        downloadURL: 'https://firebasestorage.googleapis.com/v0/b/myresume-d58e8.appspot.com/o/resume%2FCV_Lucas_Hochart2022.pdf?alt=media&token=92551a3a-2e04-4cdc-84cf-522f9bc25001'
    }

    setUrl = (url) => {
        this.setState({
            downloadURL: url
        })
    }

    render(){
        let downloadURL = this.state.downloadURL;
        let defaultStorage = getStorage(app);
        let fileRef = ref(defaultStorage, 'CV_Lucas_Hochart2022.pdf');

        if(downloadURL === '#' || downloadURL === ''){
            getDownloadURL(fileRef).then((downloadURL) => {
                console.log(downloadURL);
                const mylifebelike = document.getElementById('linkDownloadCv');
                if(mylifebelike != null){
                    mylifebelike.setAttribute('href', downloadURL);
                }
            })
        }

        return(
            <div className="m-auto"	>
                <a className="text-2xl bg-indigo-400 rounded-xl py-4 px-8" id="linkDownloadCv" href={downloadURL} target="_blank">
                    Télécharger le CV
                </a>
            </div>
        )
    }
}