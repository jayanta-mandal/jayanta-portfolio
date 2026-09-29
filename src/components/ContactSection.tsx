import { useEffect, useRef, useState, type ReactNode } from 'react';
import { contact, conversationHref, person } from '../data/site';
import { DownloadCvLink } from './ui/DownloadCvLink';
import { Icon, type IconName } from './ui/Icon';
import { MagneticLink } from './ui/MagneticLink';
import { RevealText } from './ui/RevealText';
import { SectionFrame } from './ui/SectionFrame';
import './ContactSection.scss';

type CopyState = 'idle' | 'copied' | 'failed';

const COPY_MESSAGES: Record<CopyState, string> = {
  idle: '',
  copied: 'Email address copied to clipboard',
  failed: 'Copying is not available here; select the address to copy it',
};

function useCopyToClipboard(resetAfter = 2400) {
  const [state, setState] = useState<CopyState>('idle');
  const timer = useRef<number | undefined>(undefined);

  useEffect(() => () => window.clearTimeout(timer.current), []);

  const copy = async (text: string) => {
    window.clearTimeout(timer.current);
    try {
      if (!navigator.clipboard) throw new Error('Clipboard API unavailable');
      await navigator.clipboard.writeText(text);
      setState('copied');
    } catch {
      setState('failed');
    }
    timer.current = window.setTimeout(() => setState('idle'), resetAfter);
  };

  return { state, copy };
}

interface ChannelProps {
  icon: IconName;
  label: string;
  value: string;
  href: string | null;
  external?: boolean;
  action?: ReactNode;
}

/** Lets long addresses wrap at a sensible point (before "@" or "/") instead of mid-word. */
function withBreaks(value: string): ReactNode[] {
  return value.split(/(?=[@/])/).map((part, index) => (
    <span key={index}>
      {index > 0 ? <wbr /> : null}
      {part}
    </span>
  ));
}

function Channel({ icon, label, value, href, external, action }: ChannelProps) {
  return (
    <li className="channel">
      <span className="channel__icon" aria-hidden="true">
        <Icon name={icon} />
      </span>
      <div className="channel__body">
        <span className="channel__label">{label}</span>
        {href ? (
          <a
            className="channel__value"
            href={href}
            {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
          >
            {withBreaks(value)}
            {external ? (
              <>
                <Icon name="arrow-up-right" className="channel__external" />
                <span className="visually-hidden"> (opens in a new tab)</span>
              </>
            ) : null}
          </a>
        ) : (
          <span className="channel__value channel__value--pending">{value}</span>
        )}
      </div>
      {action}
    </li>
  );
}

export function ContactSection() {
  const { state, copy } = useCopyToClipboard();

  return (
    <SectionFrame id="contact" nav="contact" label="Contact" tone="inverse">
      <div className="contact">
        <div className="contact__intro">
          <p className="contact__eyebrow">
            <span className="status-dot" aria-hidden="true" />
            {person.current.role} · {person.experience}
          </p>
          <RevealText as="h2" id="contact-title" text="Have a project in mind?" className="contact__title" />
          <p className="contact__lead">Let’s build something thoughtful, responsive and built to last.</p>
          <div className="contact__actions">
            <MagneticLink href={conversationHref} variant="inverse" size="lg" icon="arrow-up-right">
              Start a conversation
            </MagneticLink>
            <DownloadCvLink variant="outline-inverse" size="lg" />
          </div>
        </div>

        <div className="contact__details">
          <ul className="contact__channels" aria-label="Contact details">
            <Channel
              icon="mail"
              label={contact.email.label}
              value={contact.email.value}
              href={contact.email.href}
              action={
                <button
                  type="button"
                  className="channel__action"
                  onClick={() => copy(contact.email.value)}
                >
                  <Icon name={state === 'copied' ? 'check' : 'copy'} />
                  <span className="visually-hidden">Copy email address</span>
                </button>
              }
            />
            <Channel icon="phone" label={contact.phone.label} value={contact.phone.value} href={contact.phone.href} />
            <Channel
              icon="linkedin"
              label={contact.linkedin.label}
              value={contact.linkedin.value}
              href={contact.linkedin.href}
              external
            />
            <Channel icon="github" label={contact.github.label} value={contact.github.value} href={contact.github.href} />
          </ul>

          <p className="contact__status" role="status">
            {COPY_MESSAGES[state]}
          </p>
        </div>
      </div>
    </SectionFrame>
  );
}
