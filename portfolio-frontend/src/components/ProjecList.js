import React, { useState, useEffect } from 'react';
import api from '../services/api';

function ProjectList() {
    const [projects, setProjects] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        async function fetchProjects() {
            try {
                const response = await api.get('projects/');
                setProjects(response.data);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching projects: ', error);
                setError(error);
                setLoading(false);
            }
        }

        fetchProjects();
    }, []);

    return (
        <div>
            <h2>Projects</h2>
            {loading ? (
                <p>Loading projects...</p>
            ) : error ? (
                <p>Error fetching projects: {error.message}</p>
            ) : Array.isArray(projects) && projects.length > 0 ? (
                <ul>
                    {projects.map((project) => (
                        <li key={project.id}>{project.title}</li>
                    ))}
                </ul>
            ) : (
                <p>No projects available</p>
            )}
        </div>
    );
}

export default ProjectList;
