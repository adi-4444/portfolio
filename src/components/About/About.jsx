import { FiArrowUpRight } from 'react-icons/fi';
import SystemDiagram from './SystemDiagram';

export default function About() {
  return (
    <section
      className="about-section section-pad container"
      id="about"
      aria-labelledby="about-title"
    >
      <div className="section-heading">
        <div>
          <p className="eyebrow">
            <span>06 /</span> A LITTLE ABOUT ME
          </p>
          <h2 id="about-title">I work across the whole product.</h2>
        </div>
      </div>
      <div className="about-grid">
        <div className="about-copy">
          <p className="about-lead">
            I like taking a business problem and turning it into software people
            can actually use.
          </p>
          <p>
            Sometimes that’s a mobile app. Sometimes it’s an internal tool, a
            custom trading terminal, an API, or a background service. Often,
            it’s a few of those working together.
          </p>
          <p>
            Since 2023, I’ve worked across real estate technology, workspace
            operations, and financial software. I’m comfortable moving between
            the interface, the data model, and the server when the work needs
            it.
          </p>
          <p>
            I care about understandable code, clear product decisions, and
            seeing a feature through to the system it runs on. I also use AI
            tools as part of that process, with the same expectation of review
            and verification.
          </p>
          <a
            className="text-link resume-link"
            href="https://drive.google.com/drive/folders/1aglzO7nh89nhBhmDwyCShDXNiALbge0w?usp=share_link"
            target="_blank"
            rel="noreferrer"
          >
            View my résumé <FiArrowUpRight aria-hidden="true" />
          </a>
        </div>
        <SystemDiagram />
      </div>
    </section>
  );
}
