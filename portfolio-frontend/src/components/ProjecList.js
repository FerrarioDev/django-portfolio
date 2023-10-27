import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ProjectList() {
    const [projects, setProjects] = useState([]);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await api.get('projects/');
                setProjects(response.data);
            } catch (error) {
                console.error('Error fetching projects: ',error)
            }
        }

        fetchProjects();
    }, []); 

    return (
        <div>
            <h2>Projects</h2>
            <ul>
                {projects.map((project) => (
                    <li key={project.id}>{project.title}</li>
                ))}
            </ul>
        </div>
    );
}

export default ProjectList;
