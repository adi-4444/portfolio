import { useRef, useState } from 'react';
import {
  FiArrowUpRight,
  FiMenu,
  FiTerminal,
  FiX,
  FiMoon,
  FiSun,
} from 'react-icons/fi';
import useTheme from '../../hooks/useTheme';
const links = [
  ['experience', 'Experience'],
  ['works', 'Projects'],
  ['myskills', 'Toolkit'],
  ['workflow', 'Approach'],
  ['ai-workflow', 'AI'],
  ['about', 'About'],
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const [isOpen, setIsOpen] = useState(false);
  const menuButton = useRef(null);
  function closeOnEscape(event) {
    if (event.key === 'Escape' && isOpen) {
      setIsOpen(false);
      menuButton.current?.focus();
    }
  }
  return (
    <header className="site-header" onKeyDown={closeOnEscape}>
      <div className="container header-inner">
        <a
          className="wordmark"
          href="#home"
          aria-label="adi. Software Developer — back to home"
        >
          adi<span className="wordmark-dot">.</span>
          <span className="wordmark-caption">
            SOFTWARE
            <br />
            DEVELOPER
          </span>
        </a>
        <nav
          className={`navigation${isOpen ? ' is-open' : ''}`}
          id="main-navigation"
          aria-label="Main navigation"
        >
          {links.map(([id, label]) => (
            <a key={id} href={`#${id}`} onClick={() => setIsOpen(false)}>
              {label}
            </a>
          ))}
        </nav>
        <div className="header-actions">
          <button
            className="theme-toggle"
            type="button"
            onClick={toggleTheme}
            aria-label={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
            title={
              theme === 'light' ? 'Switch to dark mode' : 'Switch to light mode'
            }
          >
            {theme === 'light' ? (
              <FiMoon aria-hidden="true" />
            ) : (
              <FiSun aria-hidden="true" />
            )}
          </button>
          <button
            className="terminal-shortcut"
            aria-label="Terminal"
            title="Explore the portfolio terminal — Cmd/Ctrl+K"
            onClick={() => {
              setIsOpen(false);
              document.getElementById('terminal-input')?.focus();
            }}
          >
            <FiTerminal aria-hidden="true" />
            <span>Terminal</span>
          </button>
          <a className="header-contact" href="#getintouch">
            Let’s talk <FiArrowUpRight aria-hidden="true" />
          </a>
          <button
            ref={menuButton}
            className="menu-toggle"
            aria-label={isOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={isOpen}
            aria-controls="main-navigation"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>
    </header>
  );
}
