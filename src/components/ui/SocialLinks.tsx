import { contact } from '../../data/site';
import { cx } from '../../utils/cx';
import { Icon, type IconName } from './Icon';
import './SocialLinks.scss';

const ITEMS: Array<{ key: keyof typeof contact; icon: IconName; description: string }> = [
  { key: 'linkedin', icon: 'linkedin', description: 'LinkedIn profile' },
  { key: 'github', icon: 'github', description: 'GitHub profile' },
  { key: 'email', icon: 'mail', description: 'Send an email' },
];

export function SocialLinks({ className }: { className?: string }) {
  return (
    <ul className={cx('social-links', className)}>
      {ITEMS.map(({ key, icon, description }) => {
        const item = contact[key];
        const external = item.href?.startsWith('http');

        return (
          <li key={key}>
            {item.href ? (
              <a
                className="social-links__item"
                href={item.href}
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon name={icon} />
                <span className="visually-hidden">
                  {description}
                  {external ? ' (opens in a new tab)' : ''}
                </span>
              </a>
            ) : (
              <span className="social-links__item social-links__item--pending" title={`${item.label}: ${item.value}`}>
                <Icon name={icon} />
                <span className="visually-hidden">
                  {description}: {item.value}
                </span>
              </span>
            )}
          </li>
        );
      })}
    </ul>
  );
}
