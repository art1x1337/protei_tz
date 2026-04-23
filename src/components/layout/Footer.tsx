import { footerColumns } from '../../data/footer';
import { Container } from './Container';
import { Logo } from '../ui/Logo';

export const Footer = () => {
  return (
    <footer className="mt-10 border-t border-white/5 bg-[#041229] py-12 sm:py-16">
      <Container>
        <div className="grid gap-10 md:grid-cols-[minmax(220px,1fr)_repeat(3,minmax(0,220px))] md:gap-8">
          <div>
            <Logo />
          </div>

          {footerColumns.map((column) => (
            <div key={column.title}>
              <h3 className="text-base font-semibold text-white">{column.title}</h3>
              <ul className="mt-4 space-y-3 text-sm text-white/72">
                {column.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Container>
    </footer>
  );
};
