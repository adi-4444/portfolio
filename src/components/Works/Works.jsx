import { useState } from 'react';
import {
  FiArrowDown,
  FiArrowUp,
  FiArrowUpRight,
  FiFolder,
} from 'react-icons/fi';
import projects from '../../data/projects.json';
import Work from './Work';
const categories = ['All projects', 'Web apps', 'Experiments'];

export default function Works() {
  const [category, setCategory] = useState('All projects');
  const [expanded, setExpanded] = useState(false);
  const filteredProjects =
    category === 'All projects'
      ? projects
      : projects.filter((project) => project.category === category);
  const visibleProjects = expanded
    ? filteredProjects
    : filteredProjects.slice(0, 4);
  return (
    <section
      className="work-section section-pad"
      id="works"
      aria-labelledby="work-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>02 /</span> PERSONAL PROJECTS
            </p>
            <h2 id="work-title">Where it started.</h2>
          </div>
          <p className="section-summary">
            Early builds, experiments, and lessons.
            <br />A small archive of learning by doing.
          </p>
        </div>
        <div className="archive-note">
          <FiFolder aria-hidden="true" />
          <p>
            These are projects from the beginning of my career. My recent
            product work is covered in the experience section above.
          </p>
          <span>ARCHIVE / 17 BUILDS</span>
        </div>
        <div className="project-toolbar">
          <div
            className="project-filters"
            role="group"
            aria-label="Filter projects"
          >
            {categories.map((item) => (
              <button
                key={item}
                aria-pressed={category === item}
                onClick={() => {
                  setCategory(item);
                  setExpanded(false);
                }}
              >
                {item}
                <span>
                  {item === 'All projects'
                    ? projects.length
                    : projects.filter((project) => project.category === item)
                        .length}
                </span>
              </button>
            ))}
          </div>
          <span className="project-range" aria-live="polite">
            Showing {visibleProjects.length} of {filteredProjects.length}
          </span>
        </div>
        <div className="projects-grid" id="project-gallery">
          {visibleProjects.map((project, index) => (
            <Work key={project.id} project={project} index={index} />
          ))}
        </div>
        <div className="work-footer">
          {filteredProjects.length > 4 && (
            <button
              className="button button-outline"
              aria-expanded={expanded}
              aria-controls="project-gallery"
              onClick={() => setExpanded(!expanded)}
            >
              {expanded
                ? 'Show fewer projects'
                : `Explore all ${filteredProjects.length} projects`}
              {expanded ? (
                <FiArrowUp aria-hidden="true" />
              ) : (
                <FiArrowDown aria-hidden="true" />
              )}
            </button>
          )}
          <a
            className="text-link"
            href="https://github.com/adi-4444"
            target="_blank"
            rel="noreferrer"
          >
            GitHub archive <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
