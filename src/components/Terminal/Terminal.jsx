import { useEffect, useRef, useState } from 'react';
import {
  FiArrowLeft,
  FiArrowUpRight,
  FiCornerDownLeft,
  FiFolder,
} from 'react-icons/fi';
import { terminalCommands } from '../../data/profile';

const PROMPT_USER = 'adi@macbook';

const HELP = {
  id: 'help',
  title: 'Portfolio commands',
  lines: [
    'select       browse with ↑ ↓ and Return',
    'about        my background and approach',
    'experience   roles and responsibilities',
    'stack        languages, tools, and cloud',
    'ai           agents and AI development',
    'projects     the early project archive',
    'contact      start a conversation',
    'back         return to the main menu',
    'clear        clear the terminal',
    '',
    'Slash commands work too: /about, /experience, /stack.',
    'Backspace on an empty prompt or Esc returns home.',
    'Tab completes a command. ↑ ↓ recalls shell history.',
  ],
};

export default function Terminal() {
  const [screen, setScreen] = useState({ kind: 'idle' });
  const [query, setQuery] = useState('');
  const [selected, setSelected] = useState(0);
  const [stream, setStream] = useState('');
  const [invocation, setInvocation] = useState('');
  const input = useRef(null);
  const viewport = useRef(null);
  const history = useRef([]);
  const historyIndex = useRef(0);
  const runId = useRef(0);
  const followOutput = useRef(true);
  const response =
    screen.kind === 'output'
      ? [screen.command.title, '', ...screen.command.lines].join('\n')
      : '';
  const isStreaming =
    screen.kind === 'output' && stream.length < response.length;

  useEffect(() => {
    function focusTerminal(event) {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === 'k') {
        event.preventDefault();
        input.current?.focus();
      }
    }
    window.addEventListener('keydown', focusTerminal);
    return () => window.removeEventListener('keydown', focusTerminal);
  }, []);

  useEffect(() => {
    if (!response) return;
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      setStream(response);
      return;
    }
    let count = 0;
    const timer = window.setInterval(() => {
      count = Math.min(count + 7, response.length);
      setStream(response.slice(0, count));
      if (count === response.length) window.clearInterval(timer);
    }, 22);
    return () => window.clearInterval(timer);
  }, [response, screen.run]);

  useEffect(() => {
    if (followOutput.current && viewport.current)
      viewport.current.scrollTop = viewport.current.scrollHeight;
  }, [stream, screen.kind]);

  function focusInput() {
    input.current?.focus({ preventScroll: true });
  }
  function showMenu(command = 'select') {
    setQuery('');
    setStream('');
    setInvocation(command);
    setScreen({ kind: 'menu' });
    followOutput.current = true;
    focusInput();
  }
  function execute(command, typed = command.id) {
    setQuery('');
    setStream('');
    setInvocation(typed);
    setScreen({ kind: 'output', command, run: ++runId.current });
    followOutput.current = true;
    focusInput();
  }
  function submit(event) {
    event.preventDefault();
    const typed = query.trim();
    if (!typed && screen.kind === 'menu') {
      execute(terminalCommands[selected]);
      return;
    }
    if (!typed) return;
    history.current = [...history.current.slice(-39), typed];
    historyIndex.current = history.current.length;
    const command = typed.toLowerCase().replace(/^\/+|\/+$/g, '');
    if (
      [
        'select',
        'ls',
        'menu',
        './portfolio',
        'home',
        'back',
        'cd ..',
        'exit',
      ].includes(command)
    ) {
      showMenu(typed);
      return;
    }
    if (command === 'clear') {
      setScreen({ kind: 'idle' });
      setStream('');
      setQuery('');
      setInvocation('');
      return;
    }
    if (command === 'help') {
      execute(HELP, typed);
      return;
    }
    const found = terminalCommands.find(
      (item) => item.id === (command === 'whoami' ? 'about' : command),
    );
    if (found) {
      setSelected(terminalCommands.indexOf(found));
      execute(found, typed);
    } else
      execute(
        {
          id: 'unknown',
          title: `zsh: command not found: ${typed}`,
          lines: ['Type select to browse the portfolio, or help for commands.'],
        },
        typed,
      );
  }
  function handleKeys(event) {
    if (
      event.key === 'Escape' ||
      (event.key === 'Backspace' && !query && screen.kind === 'output')
    ) {
      event.preventDefault();
      showMenu('back');
      return;
    }
    if (event.ctrlKey && event.key.toLowerCase() === 'c' && isStreaming) {
      event.preventDefault();
      showMenu('^C');
      return;
    }
    if (event.ctrlKey && event.key.toLowerCase() === 'l') {
      event.preventDefault();
      setScreen({ kind: 'idle' });
      setQuery('');
      setStream('');
      setInvocation('');
      return;
    }
    if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
      if (screen.kind === 'menu') {
        event.preventDefault();
        const direction = event.key === 'ArrowDown' ? 1 : -1;
        setSelected(
          (current) =>
            (current + direction + terminalCommands.length) %
            terminalCommands.length,
        );
        focusInput();
      } else if (event.target === input.current && history.current.length) {
        event.preventDefault();
        historyIndex.current = Math.max(
          0,
          Math.min(
            history.current.length,
            historyIndex.current + (event.key === 'ArrowUp' ? -1 : 1),
          ),
        );
        setQuery(history.current[historyIndex.current] || '');
      }
    }
    if (event.key === 'Tab' && query && event.target === input.current) {
      const prefix = query.startsWith('/') ? '/' : '';
      const partial = query.toLowerCase().replace(/^\/+/, '');
      const match = [
        'select',
        ...terminalCommands.map((command) => command.id),
        'help',
        'back',
        'clear',
      ].find((command) => command.startsWith(partial));
      if (match) {
        event.preventDefault();
        setQuery(`${prefix}${match}`);
      }
    }
  }

  return (
    <div className="terminal-shell">
      <div
        className="terminal zsh-terminal"
        aria-label="Interactive zsh-style portfolio terminal"
        onKeyDown={handleKeys}
      >
        <div className="zsh-titlebar">
          <div className="zsh-traffic-lights" aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <span>
            <FiFolder aria-hidden="true" /> Adi — -zsh — 80×24
          </span>
          <span className="zsh-window-spacer" aria-hidden="true" />
        </div>
        <div
          ref={viewport}
          className="zsh-viewport"
          onScroll={(event) => {
            const el = event.currentTarget;
            followOutput.current =
              el.scrollHeight - el.scrollTop - el.clientHeight < 45;
          }}
        >
          <div className="zsh-welcome">
            <p>Adi Narayana Reddy</p>
            <p>Software Developer · web, mobile, backend & AI</p>
            <p>Building intuitive interfaces and the services behind them.</p>
            <p className="zsh-boot-hint">
              Type{' '}
              <button type="button" onClick={() => showMenu()}>
                select
              </button>{' '}
              to explore, or{' '}
              <button
                type="button"
                onClick={() => execute(terminalCommands[0], '/about')}
              >
                /about
              </button>{' '}
              for a full introduction.
            </p>
          </div>
          {invocation && (
            <p className="zsh-echo">
              <span>{PROMPT_USER}</span> ~ % {invocation}
            </p>
          )}
          {screen.kind === 'menu' && (
            <div className="zsh-menu">
              <p>
                Select a section <span>(↑ ↓ to move, Return to open)</span>
              </p>
              <ul aria-label="Portfolio sections">
                {terminalCommands.map((command, index) => (
                  <li key={command.id}>
                    <button
                      type="button"
                      data-selected={selected === index}
                      onFocus={() => setSelected(index)}
                      onClick={() => execute(command)}
                    >
                      <span aria-hidden="true" className="zsh-option-bullet">
                        {selected === index ? '●' : '○'}
                      </span>
                      <span>{command.label}</span>
                      <span className="zsh-option-hint">{command.hint}</span>
                    </button>
                  </li>
                ))}
              </ul>
              <span className="sr-only" role="status">
                Selected section: {terminalCommands[selected].label}
              </span>
            </div>
          )}
          {screen.kind === 'output' && (
            <div className="zsh-result">
              <pre className="zsh-output">
                {stream}
                {isStreaming && <span className="zsh-stream-cursor" />}
              </pre>
              <p className="sr-only" role="status">
                {isStreaming
                  ? `Loading ${screen.command.title}`
                  : `${screen.command.title}. Response complete.`}
              </p>
              {!isStreaming && (
                <div className="zsh-result-actions">
                  <button type="button" onClick={() => showMenu('back')}>
                    <FiArrowLeft aria-hidden="true" /> back
                  </button>
                  {screen.command.target && (
                    <a href={`#${screen.command.target}`}>
                      open section <FiArrowUpRight aria-hidden="true" />
                    </a>
                  )}
                </div>
              )}
            </div>
          )}
          <form className="zsh-prompt" onSubmit={submit}>
            <label className="sr-only" htmlFor="terminal-input">
              Terminal command
            </label>
            <div className="zsh-input-line">
              <div className="zsh-prompt-prefix" aria-hidden="true">
                <span className="zsh-prompt-user">{PROMPT_USER}</span>
                <span className="zsh-prompt-directory"> ~</span>
                <span> %</span>
              </div>
              <input
                ref={input}
                id="terminal-input"
                aria-label="Terminal command"
                autoComplete="off"
                autoCapitalize="none"
                spellCheck="false"
                value={query}
                onChange={(event) => setQuery(event.target.value)}
                aria-describedby="terminal-hint"
              />
              <button type="submit" aria-label="Run terminal command">
                <FiCornerDownLeft aria-hidden="true" />
              </button>
            </div>
          </form>
        </div>
        <div className="zsh-statusbar" id="terminal-hint">
          <span>select · ↑ ↓ · Enter</span>
          <span>⌫ / Esc home · ⌘ / Ctrl K focus</span>
        </div>
      </div>
      <p className="terminal-caption">Type a command. Explore a little.</p>
    </div>
  );
}
