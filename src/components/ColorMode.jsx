import { useTheme } from 'next-themes';
import React from 'react';
import { BiSun } from 'react-icons/bi';
import { HiMoon } from 'react-icons/hi';

const ColorMode = ({ className }) => {
  const { theme, setTheme } = useTheme();

  return (
    <div className={`${className}`}>
      {theme === 'light' ? (
        <HiMoon
          className="cursor-pointer mx-3"
          onClick={() => setTheme('dark')}
        />
      ) : (
        <BiSun
          className="cursor-pointer mx-3  dark:text-yellow-400"
          onClick={() => setTheme('light')}
        />
      )}
    </div>
  );
};

export default ColorMode;
