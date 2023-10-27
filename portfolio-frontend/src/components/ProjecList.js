import React, { useEffect, useState } from 'react';
import api from '../services/api';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true); 

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await api.get('projects/');
                console.log('API Response:', response.data);
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects: ', error);
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            {Array.isArray(projects) && projects.length > 0 ? (
                    projects.map((project) => (
                        <li key={project.id}>{project.title}</li>
                    ))
                ) : (
                    <p>No projects available</p>
                )}
        </div>
    );
}

export default ProjectList;
