import { FiArrowUpRight, FiGithub } from 'react-icons/fi';

export default function Work({ project, index }) {
  return (
    <article className="project-card">
      <span className="project-number" aria-hidden="true">
        {String(index + 1).padStart(2, '0')}
      </span>
      <a
        className="project-thumbnail"
        href={project.demo}
        target="_blank"
        rel="noreferrer"
      >
        <span className="sr-only">Open live demo: </span>
        <img
          src={`${import.meta.env.BASE_URL}${project.image.replace(/^\//, '')}`}
          alt={`${project.name} application screenshot`}
          loading="lazy"
          width="160"
          height="110"
        />
      </a>
      <div className="project-info">
        <h3>
          <a href={project.demo} target="_blank" rel="noreferrer">
            {project.name} <FiArrowUpRight aria-hidden="true" />
          </a>
        </h3>
        <p>{project.description}</p>
        <ul className="project-tags" aria-label="Technologies">
          {project.tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <a
        className="source-link"
        href={project.source}
        target="_blank"
        rel="noreferrer"
        aria-label={`View ${project.name} source on GitHub`}
      >
        <FiGithub aria-hidden="true" />
        <span className="sr-only">View source on GitHub</span>
      </a>
    </article>
  );
}
