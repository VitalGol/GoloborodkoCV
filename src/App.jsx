import { useEffect, useState } from 'react';
import Address from './components/Address/Address';
import Courses from './components/Courses/Courses';
import Name from './components/Name/Name';
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

function App() {
  // const [darkMode, setDarkMode] = useState('light');
  const [darkMode, setDarkMode] = useState('dark');
  useEffect(() => {
    if (
      localStorage.theme === 'dark' ||
      (!('theme' in localStorage) &&
        window.matchMedia('(prefers-color-scheme: dark)').matches)
    ) {
      document.documentElement.classList.add('dark');
      setDarkMode('dark');
    } else {
      document.documentElement.classList.remove('dark');
      setDarkMode('light');
    }
  }, []);

  return (
    <div className="flex flex-wrap justify-between items-stretch text-xl box-border xl:mx-4">
      <div className="flex flex-col justify-center w-full mx-0 m-auto">
        <Name darkMode={darkMode} setDarkMode={setDarkMode} />
        <div className="flex flex-wrap">
          <div className="flex flex-col lg:flex-row  xl:flex-row">
            <Address />
            <Work />
          </div>
          <div className="flex flex-col lg:flex-row xl:flex-row">
            <Skills />
            <Courses />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
