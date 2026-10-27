import { FiArrowUp, FiArrowUpRight } from 'react-icons/fi';

export default function Footer() {
  return (
    <footer className="site-footer container">
      <div className="footer-main">
        <a className="wordmark" href="#home" aria-label="Adi, back to home">
          adi<span className="wordmark-dot">.</span>
        </a>
        <p>Web. Mobile. The systems behind them.</p>
        <div className="footer-links">
          <a
            href="https://github.com/adi-4444"
            target="_blank"
            rel="noreferrer"
          >
            GitHub <FiArrowUpRight aria-hidden="true" />
          </a>
          <a
            href="https://www.linkedin.com/in/adi4444/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn <FiArrowUpRight aria-hidden="true" />
          </a>
          <a className="back-to-top" href="#home" aria-label="Back to top">
            <FiArrowUp aria-hidden="true" />
            <span className="sr-only">Back to top</span>
          </a>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© {new Date().getFullYear()} Adi Narayana Reddy</p>
        <span>DESIGNED & BUILT BY ADI / INDIA</span>
      </div>
    </footer>
  );
}
