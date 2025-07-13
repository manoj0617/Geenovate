import React, { useState, useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface CounterProps {
  end: number;
  duration?: number;
  prefix?: string;
  suffix?: string;
  className?: string;
}

const Counter: React.FC<CounterProps> = ({
  end,
  duration = 2000,
  prefix = '',
  suffix = '',
  className = '',
}) => {
  const [count, setCount] = useState(0);
  const countRef = useRef<number>(0);
  const { ref, inView } = useInView({
    triggerOnce: true,
    threshold: 0.3,
  });

  useEffect(() => {
    if (inView) {
      const startTime = Date.now();
      const timer = setInterval(() => {
        const timePassed = Date.now() - startTime;
        const progress = Math.min(timePassed / duration, 1);
        countRef.current = Math.floor(progress * end);
        setCount(countRef.current);
        
        if (progress === 1) {
          clearInterval(timer);
        }
      }, 16);
      
      return () => clearInterval(timer);
    }
  }, [inView, end, duration]);

  return (
    <div ref={ref} className={className}>
      <span className="font-heading font-bold text-4xl md:text-5xl">
        {prefix}{count}{suffix}
      </span>
    </div>
  );
};

export default Counter;