import { FiArrowUpRight, FiPlus } from 'react-icons/fi';
import { experience } from '../../data/profile';

export default function Experience() {
  return (
    <section
      className="experience-section section-pad"
      id="experience"
      aria-labelledby="experience-title"
    >
      <div className="container">
        <div className="section-heading">
          <div>
            <p className="eyebrow">
              <span>01 /</span> EXPERIENCE
            </p>
            <h2 id="experience-title">
              Real products.
              <br />
              Real responsibilities.
            </h2>
          </div>
          <p className="section-summary">
            From property services to trading platforms.
            <br />A few years of building what businesses run on.
          </p>
        </div>
        <ol className="experience-list">
          {experience.map((job, index) => (
            <li
              className={`experience-entry${job.current ? ' is-current' : ''}`}
              key={job.id}
            >
              <div className="experience-meta">
                <span className="experience-period">{job.period}</span>
                <div className="experience-company-line">
                  <span className="timeline-point" aria-hidden="true" />
                  <h3>{job.company}</h3>
                </div>
                <p>{job.role}</p>
                <span className="employment-type">
                  {job.current && <span className="status-dot" />}
                  {job.type}
                </span>
                <a
                  className="company-link"
                  href={job.url}
                  target="_blank"
                  rel="noreferrer"
                >
                  {job.domain} <FiArrowUpRight aria-hidden="true" />
                </a>
              </div>
              <div className="experience-body">
                <p className="job-category">
                  {String(index + 1).padStart(2, '0')} — {job.category}
                </p>
                <h4>{job.title}</h4>
                <p className="job-description">{job.description}</p>
                <ul className="contribution-list">
                  {job.contributions.map(([title, text]) => (
                    <li key={title}>
                      <span className="contribution-mark" aria-hidden="true">
                        ↳
                      </span>
                      <div>
                        <strong>{title}</strong>
                        <p>{text}</p>
                      </div>
                    </li>
                  ))}
                </ul>
                {job.modules && (
                  <div className="module-list" aria-label="iHub modules">
                    {job.modules.map((module) => (
                      <span key={module}>{module}</span>
                    ))}
                  </div>
                )}
                <ul className="job-tags" aria-label="Areas of work">
                  {job.tags.map((tag) => (
                    <li key={tag}>{tag}</li>
                  ))}
                </ul>
                <details className="experience-details">
                  <summary>
                    More about the work <FiPlus aria-hidden="true" />
                  </summary>
                  <div className="experience-detail-grid">
                    {job.detailSections.map((section) => (
                      <div key={section.title}>
                        <h5>{section.title}</h5>
                        <p>{section.text}</p>
                      </div>
                    ))}
                  </div>
                  {job.secondaryUrl && (
                    <a href={job.secondaryUrl} target="_blank" rel="noreferrer">
                      {job.secondaryLabel} <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </details>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
