// import styles from './Skills.module.scss';
import { skills } from '../../data';
import Education from '../Education/Education';

const Skills = () => (
  <div className="flex flex-col w-full lg:w-2/6  xl:w-2/6 p-4 xs:p-2 ls:p-2 bg-gray-600  dark:bg-slate-200 text-gray-50 dark:text-color-text-light font-inter font-thin dark:font-normal">
    <h1 className="font-jakarta text-3xl xs:text-2xl ls:text-2xl font-bold tracking-wider text-color-bg-photo">
      Skills
    </h1>
    <ul role="list" className="py-6 px-2 divide-y divide-slate-400">
      {skills.map((el, index) => {
        let icon = null;
        el.icon !== null
          ? (icon = <el.icon className="inline h-6 w-6 pb-1 ml-1" />)
          : (icon = '');

        return (
          <li
            key={index}
            className="py-2 lg:py-4 xl:py-3 md:py-3 first:pt-0 last:pb-0 sm:pr-1 xs:pr-1 ls:pr-1"
          >
            <p>
              {el.title}
              <span>{icon}</span>
              {el.text}
            </p>
          </li>
        );
      })}
    </ul>
    <Education />
  </div>
);

export default Skills;
