'use client';

import React, { useState, useEffect } from 'react';
import Clock from 'react-clock';
import 'react-clock/dist/Clock.css';
import { useTheme } from 'next-themes';

export function ThemeClock() {
  const [mounted, setMounted] = useState(false);
  const [value, setValue] = useState(new Date());
  const { theme } = useTheme();
  
  useEffect(() => {
    setMounted(true);
    const interval = setInterval(() => {
      // Set time to Toronto time
      const torontoTime = new Date().toLocaleString("en-US", {
        timeZone: "America/Toronto"
      });
      setValue(new Date(torontoTime));
    }, 50);

    return () => {
      clearInterval(interval);
    };
  }, []);

  if (!mounted) {
    return null; // Avoid hydration mismatch
  }

  return (
    <div className="flex items-center justify-center pt-3">
      <Clock
        value={value}
        size={125}
        renderNumbers={false}
        hourHandWidth={2}
        hourHandLength={50}

        minuteHandWidth={2}
        minuteHandLength={70}

        secondHandWidth={1}
        secondHandLength={85}
        
        hourMarksWidth={1}
        hourMarksLength={30}
        minuteMarksWidth={1}
        minuteMarksLength={5}
        
        renderSecondHand={true}
        className="theme-clock"
      />
      <style jsx global>{`
        .theme-clock {
          background-color: ${theme === 'dark' ? '#18191B' : '#ffffff'} !important;
          transition: transform 50ms linear !important;
        }
        .react-clock__face {
          border-color: ${theme === 'dark' ? '#18191B' : '#ffffff'} !important;
          transition: transform 50ms linear !important;
        }
        .react-clock__hand__body {
          background-color: ${theme === 'dark' ? '#ffffff' : '#000000'} !important;
          transition: transform 50ms linear !important;
        }
        .react-clock__second-hand__body {
          transition: transform 50ms linear !important;
        }
        .react-clock__mark__body {
          background-color: ${theme === 'dark' ? '#666666' : '#DCDCDC'} !important;
        }
      `}</style>
    </div>
  );
}