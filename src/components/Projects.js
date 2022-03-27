import { db } from "../firebaseConf";
import {useEffect, useState} from "react"

function Projects(){
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjectsFromFirebase = [];

        const myPoject = db
        .collection("projets")
        .onSnapshot((querySnapshot) => {
            querySnapshot.forEach((doc) => {
            getProjectsFromFirebase.push({
                ...doc.data(), //spread operator
                key: doc.id, // `id` given to us by Firebase
            });
            });
            setProjects(getProjectsFromFirebase);
            setLoading(false);
        });
        return () => myPoject();
    }, [loading]);

    if (loading) {
        return <h1>Chargements de projets...</h1>;
    }

      return (
        <div>
            <h1 className="text-4xl">Projets</h1>
            <div className="flex flex-wrap">
                {projects.length > 0 ? (
                    projects.map((project) => 
                    <div className="border-2 bg-slate-200 m-10 p-4 rounded-xl w-1/5">
                        <h4 className="text-2xl p-2 font-bold">{project.name}</h4>
                        <h6 className="text-xl p-2 font-light">{project.tag}</h6>
                        <p className="p-2">{project.description}</p>
                        <a className="bg-blue-300 rounded-3xl py-2 px-4" href={project.github} target="_blank">Voir plus</a>
                    </div>
                )
                ) : (
                    <h1>Les projets arrivent prochainement !</h1>
                )}
            </div>
        </div>  
      );
}

export default Projects;