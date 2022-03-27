import { db } from "../firebaseConf";
import {useEffect, useState} from "react"

function Projects(){
    const [loading, setLoading] = useState(true);
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        const getProjectsFromFirebase = [];

        const myPoject = db
        .collection("projects")
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
        return <h1>Chargements de mes réalisations...</h1>;
    }

      return (
        <div>
            <h1 className="text-4xl ">Jette un coup d'œil à mes réalisations :</h1>
            <div className="container mx-auto flex flex-wrap">
                
                <div className="flex flex-wrap  ">
                    {projects.length > 0 ? (
                        projects.map((project) => 
                        <div className="border-2 bg-neutral-400 m-8 p-4 rounded-xl w-1/5 ">
                            <h4 className="text-2xl p-2 font-bold">{project.name}</h4>
                            <h6 className="text-xl p-2 font-light">{project.tag}</h6>
                            <p className="p-2">{project.description}</p>
                            <a className="bg-indigo-400  rounded-3xl py-2 px-4" href={project.github} rel="noreferrer" target="_blank">Voir plus</a>
                        </div>
                    )
                    ) : (
                        <h1>Repasse me voir prochainement</h1>
                    )}
                </div>
            </div>
        </div>  
      );
}

export default Projects;