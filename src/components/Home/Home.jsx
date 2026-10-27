import {
  FiArrowDown,
  FiArrowDownRight,
  FiArrowUpRight,
  FiGithub,
  FiLinkedin,
} from 'react-icons/fi';
import Terminal from '../Terminal/Terminal';

export default function Home() {
  return (
    <section className="hero container" id="home" aria-labelledby="hero-title">
      <div className="hero-intro">
        <span>ADI NARAYANA REDDY</span>
        <span className="hero-discipline">
          SOFTWARE DEVELOPER / 2023 — PRESENT
        </span>
      </div>
      <div className="hero-grid">
        <div className="hero-copy">
          <p className="hero-greeting">
            <span className="small-rule" /> FROM INTERFACE TO INFRASTRUCTURE
          </p>
          <h1 id="hero-title">
            I build web apps,
            <br />
            mobile apps, and
            <br />
            <span>what runs them.</span>
          </h1>
          <p className="hero-description">
            I’m Adi, a Software Developer working across the whole
            product—interfaces, APIs, real-time systems, and the infrastructure
            underneath.
          </p>
          <p className="hero-description hero-description-secondary">
            Currently building trading software at{' '}
            <a href="https://quantixtrade.ai" target="_blank" rel="noreferrer">
              QuantixTrade.ai <FiArrowUpRight aria-hidden="true" />
            </a>
            . Previously, real estate applications at JaaGa.ai and internal
            platforms at iSprout.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#experience">
              View experience <FiArrowDownRight aria-hidden="true" />
            </a>
            <a className="text-link" href="#getintouch">
              Let’s build something <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="hero-socials">
            <a
              href="https://github.com/adi-4444"
              target="_blank"
              rel="noreferrer"
            >
              <FiGithub aria-hidden="true" /> GitHub{' '}
              <FiArrowUpRight aria-hidden="true" />
            </a>
            <a
              href="https://www.linkedin.com/in/adi4444/"
              target="_blank"
              rel="noreferrer"
            >
              <FiLinkedin aria-hidden="true" /> LinkedIn{' '}
              <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
        </div>
        <Terminal />
      </div>
      <div className="hero-bottom">
        <a className="scroll-cue" href="#experience">
          <FiArrowDown aria-hidden="true" /> THE WORK, BELOW
        </a>
        <div className="hero-scope">
          <span>WEB</span>
          <i aria-hidden="true">/</i>
          <span>MOBILE</span>
          <i aria-hidden="true">/</i>
          <span>BACKEND</span>
          <i aria-hidden="true">/</i>
          <span>AI SYSTEMS</span>
        </div>
        <span className="hero-location">
          BASED IN INDIA · BUILDING FOR EVERYWHERE
        </span>
      </div>
    </section>
  );
}
