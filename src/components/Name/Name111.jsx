import { useEffect, useState } from 'react';
import styles from './Name.module.scss';
import { FaRegMoon, FaRegSun } from 'react-icons/fa';

// eslint-disable-next-line react/prop-types
const Name = ({ darkMode, setDarkMode }) => {
  const switchMode = () => {
    const toggle = document.documentElement.classList.toggle('dark');
    const theme = toggle ? 'dark' : 'light';
    window.localStorage.setItem('theme', theme);
    setDarkMode(theme);
  };

  const [buttonTheme, setButtonTheme] = useState(
    localStorage.getItem('buttonTheme')
  );
  const [paragraphName, setParagraphName] = useState(
    localStorage.getItem('paragraphName')
  );

  useEffect(() => {
    window.innerWidth < 1024 ? setButtonTheme(false) : setButtonTheme(true);
    localStorage.setItem('buttonTheme', buttonTheme);
    window.innerWidth < 650 ? setParagraphName(false) : setParagraphName(true);
    localStorage.setItem('paragraphName', paragraphName);
  }, [buttonTheme, paragraphName]);

  return (
    <div className="flex lg:flex-row sm:flex-col md:flex-col xs:flex-col ls:flex-col justify-between w-full font-bold bg-color-bg-photo font-inter text-slate-700 dark:text-white">
      <div className="flex flex-col justify-center items-center lg:pl-20  xl:pl-20   w-5/6 md:w-full sm:w-full xs:w-full ls:w-full pt-8 pb-8 md:pb-0 sm:pb-0 xs:pb-0 ls:pb-0  ">
        <div className={styles.name}>
          <h1 className="mb-4 text-4xl xs:text-3xl ls:text-2xl font-bold tracking-widest font-jakarta text-color-surname">
            Goloborodko Vitaly
          </h1>
          {paragraphName ? (
            <h2 className="text-2xl xs:text-xl ls:text-xl font-bold font-jakarta text-color-bg-photo">
              Web Developer
            </h2>
          ) : (
            <p className="font-jakarta text-2xl xs:text-xl ls:text-xl text-color-surname font-bold mt-[-1rem]   ">
              Web Developer
            </p>
          )}
        </div>
      </div>
      <div
        className="flex items-center justify-end w-1/6 md:w-full sm:w-full xs:w-full ls:w-full"
        onClick={switchMode}
      >
        <div className="flex items-center justify-end border rounded-xl border-slate-800 dark:border-slate-100 shadow-lg  mx-4 mb-4 mt-4 sm:mt-1 md:mt-1 p-3  bg-color-bg-photo cursor-pointer">
          {darkMode === 'dark' ? (
            <FaRegSun className="w-4 sm:w-5 h-4 sm:h-5" />
          ) : (
            <FaRegMoon className="w-4 sm:w-5 h-4 sm:h-5" />
          )}
          {buttonTheme && (
            <div className="ml-1.5 ">
              <p className="text-base">{`${
                darkMode === 'dark' ? 'Light' : 'Dark'
              } Mode`}</p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Name;
//xl:p-1.5  lg:m-4
