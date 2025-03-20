"use client";

import React, { useState, useEffect, useRef } from 'react';

interface FadeInOnScrollProps {
  children: React.ReactNode;
  threshold?: number; // Visibility threshold (0-1)
  delay?: number; // Delay in milliseconds
  duration?: number; // Animation duration in milliseconds
  once?: boolean; // Whether to animate only once
  className?: string; // Additional className
}

const FadeInOnScroll = ({
  children,
  threshold = 0.1,
  delay = 0,
  duration = 800,
  once = true,
  className = '',
}: FadeInOnScrollProps) => {
  const [isVisible, setIsVisible] = useState(false);
  const domRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        // When the component is visible in the viewport
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          // If once is true, disconnect the observer after first visibility
          if (once) {
            observer.disconnect();
          }
        } else if (!once) {
          // Reset visibility if not set to animate once
          setIsVisible(false);
        }
      },
      { threshold }
    );

    const currentRef = domRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, [threshold, once]);

  return (
    <div
      ref={domRef}
      className={`transition-opacity ${className}`}
      style={{
        opacity: isVisible ? 1 : 0,
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        transition: `opacity ${duration}ms ease-in-out, transform ${duration}ms ease-in-out`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

// HOC wrapper function
export const withFadeInOnScroll = <P extends object>(
  Component: React.ComponentType<P>,
  options?: Omit<FadeInOnScrollProps, 'children'>
) => {
  const WithFadeInOnScroll = (props: P) => {
    return (
      <FadeInOnScroll {...options}>
        <Component {...props} />
      </FadeInOnScroll>
    );
  };

  return WithFadeInOnScroll;
};

export default FadeInOnScroll;
