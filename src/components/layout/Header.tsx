import { useEffect, useState } from 'react';
import { navItems } from '../../data/landing';
import { CloseIcon, MenuIcon } from '../icons/Icons';
import { Button } from '../ui/Button';
import { Container } from './Container';
import { Logo } from '../ui/Logo';

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 768) {
        setIsOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <header className="sticky top-0 z-40 border-b border-white/5 bg-[#061739]/70 backdrop-blur-md">
      <Container className="flex h-20 items-center justify-between gap-6">
        <Logo />

        <nav className="hidden items-center gap-8 md:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="text-sm text-white/82 transition hover:text-white">
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            onClick={() => document.getElementById('lectory')?.scrollIntoView({ behavior: 'smooth' })}
            variant="secondary"
            className="min-w-[220px]"
          >
            Зарегистрироваться на лекторий
          </Button>
        </div>

        <button
          type="button"
          className="inline-flex h-11 w-11 items-center justify-center rounded-[10px] border border-white/10 bg-white/5 text-white md:hidden"
          onClick={() => setIsOpen((value) => !value)}
          aria-label={isOpen ? 'Закрыть меню' : 'Открыть меню'}
          aria-expanded={isOpen}
        >
          {isOpen ? <CloseIcon className="h-5 w-5" /> : <MenuIcon className="h-5 w-5" />}
        </button>
      </Container>

      {isOpen ? (
        <div className="border-t border-white/5 bg-[#071634]/95 md:hidden">
          <Container className="py-5">
            <nav className="flex flex-col gap-4 rounded-[14px] border border-cyan/25 bg-white/5 p-4">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="text-base text-white/88"
                  onClick={() => setIsOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </nav>
          </Container>
        </div>
      ) : null}
    </header>
  );
};
