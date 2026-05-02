'use client';
import { useEffect, useState } from 'react';
import { useTranslation } from 'react-i18next';
import { Menu, X } from 'lucide-react';
import { Logo } from './Logo';
import { LanguageToggle } from './LanguageToggle';
import { NavLink } from './NavLink';
import { Button } from './ui/button';
import Link from 'next/link';

export const Navbar = () => {
  const { t } = useTranslation();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const links = [
    { to: '/', label: t('nav.home') },
    { to: '/features', label: t('nav.features') },
    { to: '/pricing', label: t('nav.pricing') },
    { to: '/contact', label: t('nav.contact') },
  ];

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-background/80 backdrop-blur-xl border-b border-border/60 shadow-soft'
          : 'bg-transparent'
      }`}
    >
      <div className='main-container flex h-16 items-center justify-between'>
        <Logo />
        <nav className='hidden md:flex items-center gap-1'>
          {links.map((l) => (
            <NavLink
              key={l.to}
              href={l.to}
              end={l.to === '/'}
              className={({ isActive }) =>
                `px-4 py-2 text-sm font-medium rounded-full transition-colors ${
                  isActive
                    ? 'text-primary'
                    : 'text-foreground/70 hover:text-foreground'
                }`
              }
            >
              {l.label}
            </NavLink>
          ))}
        </nav>
        <div className='hidden md:flex items-center gap-2'>
          <LanguageToggle />
          <Button asChild variant='hero' size='sm'>
            <Link href='/contact'>{t('nav.cta')}</Link>
          </Button>
        </div>
        <button
          className='md:hidden p-2'
          onClick={() => setOpen(!open)}
          aria-label='Menu'
        >
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <div className='md:hidden border-t border-border bg-background/95 backdrop-blur-xl animate-fade-in-down'>
          <div className='main-container py-4 flex flex-col gap-1'>
            {links.map((l) => (
              <NavLink
                key={l.to}
                href={l.to}
                end={l.to === '/'}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `px-3 py-2.5 rounded-lg text-base font-medium ${
                    isActive ? 'bg-muted text-primary' : 'text-foreground/80'
                  }`
                }
              >
                {l.label}
              </NavLink>
            ))}
            <div className='flex items-center justify-between pt-3 mt-2 border-t border-border'>
              <LanguageToggle />
              <Button asChild variant='hero' size='sm'>
                <Link href='/contact' onClick={() => setOpen(false)}>
                  {t('nav.cta')}
                </Link>
              </Button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
