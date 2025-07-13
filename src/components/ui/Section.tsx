import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  id?: string;
  className?: string;
  background?: 'light' | 'dark' | 'primary' | 'secondary' | 'none';
}

const Section = ({
  children,
  id,
  className = '',
  background = 'light',
}: SectionProps) => {
  const bgClasses = {
    light: 'bg-background-light',
    dark: 'bg-background-dark text-white',
    primary: 'bg-primary text-white',
    secondary: 'bg-secondary text-white',
    none: '',
  };

  return (
    <section
      id={id}
      className={`section ${bgClasses[background]} ${className}`}
    >
      <div className="container">
        {children}
      </div>
    </section>
  );
};

export default Section;