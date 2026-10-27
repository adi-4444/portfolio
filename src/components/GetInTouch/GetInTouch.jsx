import { useState } from 'react';
import { FiArrowUpRight, FiCheck, FiCopy } from 'react-icons/fi';
import { email } from '../../data/profile';

export default function GetInTouch() {
  const [copyStatus, setCopyStatus] = useState('');
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(email);
      setCopyStatus('Email address copied.');
    } catch {
      setCopyStatus(
        'Couldn’t copy automatically. You can select the email address above.',
      );
    }
  }
  return (
    <section
      className="contact-section container"
      id="getintouch"
      aria-labelledby="contact-title"
    >
      <div className="contact-card">
        <div className="contact-topline">
          <p className="eyebrow">
            <span>07 /</span> HAVE SOMETHING IN MIND?
          </p>
          <span className="contact-mark" aria-hidden="true">
            {'{ / }'}
          </span>
        </div>
        <h2 id="contact-title">
          An idea, a product,
          <br />
          <span>or a system that needs building.</span>
        </h2>
        <div className="contact-bottom">
          <div>
            <p>
              Web applications, mobile apps, internal platforms,
              <br />
              backend services, and AI-enabled workflows. Let’s talk.
            </p>
            <a className="contact-email" href={`mailto:${email}`}>
              {email} <FiArrowUpRight aria-hidden="true" />
            </a>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${email}`}>
              Start a conversation <FiArrowUpRight aria-hidden="true" />
            </a>
            <button className="copy-button" onClick={copyEmail}>
              {copyStatus === 'Email address copied.' ? (
                <FiCheck aria-hidden="true" />
              ) : (
                <FiCopy aria-hidden="true" />
              )}
              {copyStatus === 'Email address copied.'
                ? 'Email copied'
                : 'Copy email address'}
            </button>
          </div>
        </div>
        <p className="copy-status" role="status">
          {copyStatus}
        </p>
      </div>
    </section>
  );
}
