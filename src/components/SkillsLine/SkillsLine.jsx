import { skillsLine } from '../../data';
import Marquee from 'react-fast-marquee';

const SkillsLine = () => {
  const themeSkillsLine = localStorage.getItem('theme');
  return (
    <div className="flex max-w-[1450px] xl:max-w-[910px] lg:max-w-[650px] md:max-w-[750px] sm:max-w-[600px] xs:max-w-[450px] ls:max-w-[280px] w-full m-auto text-base">
      {themeSkillsLine === 'light' ? (
        <Marquee
          speed="30"
          gradient="true"
          gradientWidth="50px"
          gradientColor="rgb(107,114,128)"
        >
          <ul
            className="flex justify-center items-center text-gray-50     dark:text-color-surname
       "
          >
            {skillsLine.map((skill) => {
              return (
                <li
                  key={skill.id}
                  className="flex items-center px-4 md:px-3 sm:px-3 xs:px-2 ls:px-2"
                >
                  <skill.icon className="mr-1" />
                  {skill.name}
                </li>
              );
            })}
          </ul>
        </Marquee>
      ) : (
        <Marquee
          speed="30"
          gradient="true"
          gradientWidth="50px"
          gradientColor="rgb(241,245,249)"
        >
          <ul
            className="flex justify-center items-center text-color-bg-photo
        dark:text-color-surname
       "
          >
            {skillsLine.map((skill) => {
              return (
                <li key={skill.id} className="flex items-center px-4">
                  <skill.icon className="mr-1" />
                  {skill.name}
                </li>
              );
            })}
          </ul>
        </Marquee>
      )}
    </div>
  );
};

export default SkillsLine;
