import React, { useEffect, useState } from 'react';

const CHARS = '!<>-_\\/[]{}+*^?#________';

interface ScrambleTextProps {
  text: string;
  className?: string;
  delay?: number;
}

export const ScrambleText: React.FC<ScrambleTextProps> = ({ text, className, delay = 0 }) => {
  const [displayText, setDisplayText] = useState('');

  useEffect(() => {
    let timeoutId: ReturnType<typeof setTimeout>;
    let intervalId: ReturnType<typeof setTimeout>;

    const startScramble = () => {
      let iteration = 0;
      const maxIterations = 15;
      
      intervalId = setInterval(() => {
        setDisplayText(
          text
            .split('')
            .map((letter, index) => {
              if (letter === ' ') return ' ';
              if (index < (iteration / maxIterations) * text.length) {
                return text[index];
              }
              return CHARS[Math.floor(Math.random() * CHARS.length)];
            })
            .join('')
        );

        if (iteration >= maxIterations) {
          clearInterval(intervalId);
          setDisplayText(text);
        }
        
        iteration += 1;
      }, 50);
    };

    if (delay > 0) {
      setDisplayText('');
      timeoutId = setTimeout(startScramble, delay);
    } else {
      startScramble();
    }

    return () => {
      clearTimeout(timeoutId);
      clearInterval(intervalId);
    };
  }, [text, delay]);

  return (
    <span className={className}>
      {displayText}
    </span>
  );
};
