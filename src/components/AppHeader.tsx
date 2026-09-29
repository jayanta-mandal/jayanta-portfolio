import { useCallback, useEffect, useLayoutEffect, useRef, useState, type CSSProperties } from 'react';
import { contact, navItems, person } from '../data/site';
import { useScrolled } from '../hooks/useScrolled';
import { cx } from '../utils/cx';
import { Icon } from './ui/Icon';
import './AppHeader.scss';

interface AppHeaderProps {
  activeSection: string;
  gridVisible: boolean;
  onToggleGrid: () => void;
}

interface IndicatorState {
  x: number;
  width: number;
  visible: boolean;
}

export function AppHeader({ activeSection, gridVisible, onToggleGrid }: AppHeaderProps) {
  const scrolled = useScrolled(24);
  const [menuOpen, setMenuOpen] = useState(false);
  const [indicator, setIndicator] = useState<IndicatorState>({ x: 0, width: 0, visible: false });
  const navRef = useRef<HTMLElement>(null);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  const closeMenu = useCallback((restoreFocus = false) => {
    setMenuOpen(false);
    if (restoreFocus) toggleRef.current?.focus();
  }, []);

  // Slide the underline to the active link.
  useLayoutEffect(() => {
    const update = () => {
      const link = navRef.current?.querySelector<HTMLAnchorElement>(`a[href="#${activeSection}"]`);
      if (!link || link.offsetWidth === 0) {
        setIndicator((previous) => ({ ...previous, visible: false }));
        return;
      }
      setIndicator({ x: link.offsetLeft + 12, width: link.offsetWidth - 24, visible: true });
    };

    update();
    window.addEventListener('resize', update);
    let cancelled = false;
    document.fonts?.ready.then(() => {
      if (!cancelled) update();
    });
    return () => {
      cancelled = true;
      window.removeEventListener('resize', update);
    };
  }, [activeSection]);

  // Mobile menu: lock scrolling, close on Escape, move focus into the menu.
  useEffect(() => {
    if (!menuOpen) return;
    const root = document.documentElement;
    root.style.overflow = 'hidden';
    firstMobileLinkRef.current?.focus();

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') closeMenu(true);
    };
    const desktop = window.matchMedia('(min-width: 1024px)');
    const onBreakpoint = () => {
      if (desktop.matches) closeMenu();
    };

    window.addEventListener('keydown', onKeyDown);
    desktop.addEventListener('change', onBreakpoint);
    return () => {
      root.style.overflow = '';
      window.removeEventListener('keydown', onKeyDown);
      desktop.removeEventListener('change', onBreakpoint);
    };
  }, [menuOpen, closeMenu]);

  const indicatorStyle = {
    '--x': `${indicator.x}px`,
    '--w': `${indicator.width}px`,
    opacity: indicator.visible ? 1 : 0,
  } as CSSProperties;

  return (
    <header className={cx('site-header', scrolled && 'is-scrolled', menuOpen && 'is-open')}>
      <div className="container site-header__bar">
        <a className="brand" href="#home" onClick={() => closeMenu()}>
          <span className="brand__mark" aria-hidden="true">
            JM
          </span>
          <span className="brand__name">{person.name}</span>
          <span className="visually-hidden">, back to top</span>
        </a>

        <nav ref={navRef} className="site-nav" aria-label="Primary">
          <ul className="site-nav__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className="site-nav__link"
                  aria-current={activeSection === item.id ? 'location' : undefined}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <span className="site-nav__indicator" style={indicatorStyle} aria-hidden="true" />
        </nav>

        <div className="site-header__tools">
          <button
            ref={toggleRef}
            type="button"
            className="icon-button site-header__menu-toggle"
            aria-expanded={menuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMenuOpen((open) => !open)}
          >
            <Icon name={menuOpen ? 'close' : 'menu'} />
            <span className="visually-hidden">{menuOpen ? 'Close menu' : 'Open menu'}</span>
          </button>
        </div>
      </div>

      <div id="mobile-menu" className="mobile-menu" inert={!menuOpen}>
        <nav className="container mobile-menu__inner" aria-label="Mobile">
          <ul className="mobile-menu__list">
            {navItems.map((item, index) => (
              <li key={item.id} style={{ '--i': index } as CSSProperties}>
                <a
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  href={`#${item.id}`}
                  className="mobile-menu__link"
                  aria-current={activeSection === item.id ? 'location' : undefined}
                  onClick={() => closeMenu()}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="mobile-menu__email" href={contact.email.href} onClick={() => closeMenu()}>
            <Icon name="mail" />
            {contact.email.value}
          </a>
        </nav>
      </div>
    </header>
  );
}
