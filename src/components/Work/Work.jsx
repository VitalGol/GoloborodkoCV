import { Tooltip } from 'react-tooltip';
import SkillsLine from '../SkillsLine/SkillsLine';
import ExampleSites from '../ExampleSites/ExampleSites';
const Work = () => {
  return (
    <div className="flex flex-col w-full p-4 font-thin bg-gray-500 xs:p-2 ls:p-2 lg:w-4/6 xl:w-4/6 dark:bg-slate-100 text-gray-50 dark:text-color-text-light font-inter dark:font-normal ">
      <Tooltip
        id="work-tooltip"
        style={{
          backgroundColor: '#689cca',
          color: 'rgb(249, 250, 251)',
          zIndex: 10,
        }}
      />
      <SkillsLine />
      <h1 className="mt-1 text-3xl font-bold tracking-wider xs:text-2xl ls:text-2xl font-jakarta xl:mt-4 text-color-bg-photo">
        Work experience
      </h1>
      <div className="py-6 xl:px-4 lg:px-4 md:px-2 sm:px-2 xs:px-2 ls:px-2">
        <p className="mb-4 underline underline-offset-8 decoration-color-bg-photo">
          <b>2015 – present:</b>
        </p>
        <p className="mb-4">
          I practice the <b>React JS</b> library when writing single page
          applications (SPAs), and use progressive libraries and tools to make
          the web application more interactive and user-friendly.
        </p>
        <p className="mb-2">
          I&#39;m using <b>Next JS</b> to create the web applications with
          improved performance and server rendering (SSR) and improve SEO
          rankings.
        </p>

        <p className="mb-2">
          In some projects I used a database management system — <b>MongoDB</b>.
        </p>
        <p className="mb-2">
          I use some <b>CSS frameworks</b> to create attractive and responsive
          user interfaces and to speed up application coding.{' '}
        </p>
        {/* <p className="mb-2">
          I use some <b>CSS frameworks</b> to speed up the coding of React apps.
        </p> */}

        <p className="mb-2">
          I write codes for cross-browser and responsive websites of any
          complexity - using <b>HTML5</b>, <b>CSS3</b>, <b>JavaScript</b>. To
          automate the web development process I use a task manager —{' '}
          <b>Gulp4</b> and module builders — <b>Webpack5</b>.
        </p>
        <p className="mb-2">
          A tool for setting up a web application development environment with
          the React JS library using — <b>Vite JS</b>.
        </p>
        <p className="mb-2">
          If necessary, I use the design and prototyping tool <b>Figma</b>,
          which allows creating website designs and graphics editor{' '}
          <b>Photoshop</b> for editing raster images.
        </p>
        <p className="mb-2">
          In my work I use a package manager to install libraries — <b>NPM</b>{' '}
          and a platform for project hosting and collaborative development —{' '}
          <b>GitHub</b>.
        </p>
        <p className="mb-10">
          I never stop learning new knowledge and practicing code.
        </p>
        <p className="mb-4">
          Examples of using the React JS library and the Next js framework:
        </p>
        <ExampleSites />
      </div>
    </div>
  );
};

export default Work;
