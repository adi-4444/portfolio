import { FiCpu } from 'react-icons/fi';
import { aiTools } from '../../data/profile';

export default function AI() {
  return (
    <section className="ai-section" id="ai-workflow" aria-labelledby="ai-title">
      <div className="container ai-compact">
        <div>
          <p className="eyebrow">
            <span>05 /</span> AI DEVELOPMENT
          </p>
          <h2 id="ai-title">Custom agents. Useful automation.</h2>
          <p className="ai-description">
            I build AI agents and assistants around your workflows—connecting
            tools, APIs, business context, and the applications they need to
            work with.
          </p>
        </div>
        <div className="ai-tools-compact">
          <span className="ai-tools-label">
            <FiCpu aria-hidden="true" /> Tools I use
          </span>
          <ul>
            {aiTools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
