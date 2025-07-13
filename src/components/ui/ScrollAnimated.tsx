import { ReactNode, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface ScrollAnimatedProps {
  children: ReactNode;
  animation?: 'fade-in' | 'slide-up';
  delay?: number;
  threshold?: number;
  className?: string;
}

const ScrollAnimated = ({
  children,
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = '',
}: ScrollAnimatedProps) => {
  const { ref, inView } = useInView({
    threshold,
    triggerOnce: true,
  });

  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (inView && elementRef.current) {
      const timer = setTimeout(() => {
        elementRef.current?.classList.add('active');
      }, delay);
      
      return () => clearTimeout(timer);
    }
  }, [inView, delay]);

  return (
    <div 
      ref={(node) => {
        // Combine refs
        ref(node);
        if (elementRef) {
          // @ts-ignore - this is a valid assignment
          elementRef.current = node;
        }
      }}
      className={`${animation} ${className}`}
    >
      {children}
    </div>
  );
};

export default ScrollAnimated;