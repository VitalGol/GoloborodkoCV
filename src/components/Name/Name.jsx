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

  return (
    <div className="flex lg:flex-row sm:flex-col md:flex-col xs:flex-col ls:flex-col justify-between w-full font-bold bg-color-bg-photo font-inter dark:text-slate-700  text-slate-100">
      <div className="flex flex-col justify-center items-center lg:pl-24 xl:pl-24 w-5/6 md:w-full sm:w-full xs:w-full ls:w-full pt-8 pb-8 md:pb-0 sm:pb-0 xs:pb-0 ls:pb-0">
        <div className={styles.name}>
          <h1 className="mb-4 text-4xl xs:text-3xl ls:text-2xl font-bold tracking-normal font-jakarta dark:text-color-surname text-slate-200">
            Goloborodko Vitaly
          </h1>
          {darkMode === 'dark' ? (
            <h2
              className={`text-2xl xs:text-xl ls:text-lg font-bold font-jakarta text-color-bg-photo mt-[-1rem] tracking-super ls:tracking-normal ${styles.onShadow}`}
            >
              web developer
            </h2>
          ) : (
            <h2 className="text-2xl xs:text-xl ls:text-lg font-bold font-jakarta text-gray-300 mt-[-1rem] tracking-super ls:tracking-normal">
              web developer
            </h2>
          )}
        </div>
      </div>
      <div
        className="flex items-center justify-end xl:w-1/6 lg:w-1/6"
        onClick={switchMode}
      >
        <div className="flex items-center justify-end border rounded-xl dark:border-slate-800 border-slate-200 shadow-lg  mx-4 mb-4 mt-4 sm:mt-1 md:mt-[-1rem] p-3 bg-color-bg-photo cursor-pointer">
          {darkMode === 'dark' ? (
            <FaRegMoon className="w-4 sm:w-5 h-4 sm:h-5" />
          ) : (
            <FaRegSun className="w-4 sm:w-5 h-4 sm:h-5" />
          )}
          <div className="ml-1.5 ">
            <p className="text-base">{`${
              darkMode === 'light' ? 'Light' : 'Dark'
            } Mode`}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Name;
