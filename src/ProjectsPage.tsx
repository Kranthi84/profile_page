import React from 'react';
import { PROJECTS_PAGE_STRINGS } from './constants/strings';

const ProjectsPage: React.FC = () => {
    return (
        <div className="position-absolute top-0 start-0 mt-5 pt-5 ps-4 text-start">
            {PROJECTS_PAGE_STRINGS.projects.map((project, index) => (
                <div key={index} className="mb-5">
                    <h3>{project.name}</h3>
                    <p>{project.description}</p>
                    <p><strong>Technologies:</strong> {project.technologies.join(', ')}</p>
                    {project.pdf && (
                        <a href={project.pdf} download className="btn btn-primary btn-sm">
                            📄 Download PDF for more details
                        </a>
                    )}
                </div>
            ))}
        </div>
    );
};

export default ProjectsPage;
