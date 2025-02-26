import { useContext, useState, useEffect } from 'react';
import './ProjectList.css';

// ASSETS
import LikeFilled from '../../assets/LikeFilled.svg'; // Caminho corrigido
import LikeUnfilled from '../../assets/LikeUnfilled.svg'; // Correto

// COMPONENTS
import Button from '../Button/Button';

// UTILS
import { getApiData } from '../../services/apiServices';

// CONTEXT
import { AppContext } from '../../contexts/AppContext';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [favProjects, setFavProjects] = useState([]); // Correto
    const appContext = useContext(AppContext);

    const handleSavedProjects = (id) => {
        setFavProjects((prevFavProjects) => { // Correto
            if (prevFavProjects.includes(id)) {
                const filterArray = prevFavProjects.filter((projectId) => projectId !== id);
                sessionStorage.setItem('favProjects', JSON.stringify(filterArray));
                return filterArray;
            } else {
                sessionStorage.setItem('favProjects', JSON.stringify([...prevFavProjects, id]));
                return [...prevFavProjects, id];
            }
        });
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const projectsResponse = await getApiData('projects');
                setProjects(projectsResponse);
            } catch {
                setProjects([]);
            }
        };
        fetchData();
    }, []);

    useEffect(() => {
        const savedFavProjects = JSON.parse(sessionStorage.getItem('favProjects'));
        if (savedFavProjects) {
            setFavProjects(savedFavProjects); // Correto
        }
    }, []);

    return (
        <div className="projects-section">
            <div className="projects-hero">
                <h2>{appContext.languages[appContext.language].projects.title}</h2>
                <p>{appContext.languages[appContext.language].projects.subtitle}</p>
            </div>
            <div className="projects-grid">
                {projects.length > 0 ? (
                    projects.map((project) => (
                        <div className='project-card d-flex jc-center al-center fd-column' key={project.id}>
                            <div
                                className='thumb tertiary-background'
                                style={{ backgroundImage: `url(${project.thumb})`}}
                            >
                            </div>
                            <h3>{project.title}</h3>
                            <p>{project.subtitle}</p>
                            <Button buttonStyle='unstyled' onClick={() => handleSavedProjects(project.id)}> {/* Corrigir onClick */}
                                <img src={favProjects.includes(project.id) ? LikeFilled : LikeUnfilled} height="20px" /> {/* Corrigir alternância da imagem */}
                            </Button>
                        </div>
                    ))
                ) : (
                    <p>No projects found.</p>
                )}
            </div>
        </div>
    );
}

export default ProjectList;
