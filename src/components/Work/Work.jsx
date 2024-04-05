import { FiExternalLink } from 'react-icons/fi';
import { Tooltip } from 'react-tooltip';
import SkillsLine from '../SkillsLine/SkillsLine';
const Work = () => {
  const linkToUrl = (url, target) => {
    window.open(url, target);
  };
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
      {/* <h1 className="mt-4 text-3xl font-medium text-color-bg-photo"> */}

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
          Example of the last project —
          <span
            className="font-medium cursor-pointer hover:underline hover:underline-offset-8"
            data-tooltip-id="work-tooltip"
            data-tooltip-content="Click to open link in a new tab "
            data-tooltip-delay-hide={500}
            onClick={() =>
              linkToUrl('http://3vgroup.com.ua/', '3vgroup.com.ua')
            }
          >
            {' '}
            www.3vgroup.com.ua
          </span>
        </p>

        <p className="mb-2">
          An example of using the <b>React Router</b> library to navigate
          between different parts of a web application created in React —
          <span
            className="text-2xl font-medium cursor-pointer"
            data-tooltip-id="work-tooltip"
            data-tooltip-content="Click to open link in a new tab "
            data-tooltip-delay-hide={500}
            onClick={() =>
              linkToUrl(
                'https://react-router-coral.vercel.app',
                'react-router-coral.vercel.app'
              )
            }
          >
            <FiExternalLink className="inline mb-1 ml-2 text-color-bg-photo" />
          </span>
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
          An example of using the <b> Next JS 14</b> framework to server-side
          render a web application for a cartoon character database and to-do
          list operations running <b>MongoDB</b> —
          <span
            className="text-2xl font-medium cursor-pointer"
            data-tooltip-id="work-tooltip"
            data-tooltip-content="Click to open link in a new tab "
            data-tooltip-delay-hide={500}
            onClick={() =>
              linkToUrl(
                'https://todo-app-sage-three-71.vercel.app',
                'todo-app-sage-three-71.vercel.app'
              )
            }
          >
            <FiExternalLink className="inline mb-1 ml-2 text-color-bg-photo" />
          </span>
        </p>
        <p className="mb-2">
          I use some <b>CSS frameworks</b> to speed up the coding of React apps.
        </p>
        {/* <p className="mb-2">
          I use <b>Next JS</b> to build a performance-enhanced app with Server
          Side Rendering (SSR) and improve SEO rankings.
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
        <p className="mb-2">
          I never stop learning new knowledge and practicing code.
        </p>
        {/* <p className="mb-2">
          Example of the last project —
          <span
            className="font-bold cursor-pointer hover:underline hover:underline-offset-8"
            data-tooltip-id="work-tooltip"
            data-tooltip-content="Click to open link in a new tab "
            data-tooltip-delay-hide={500}
            onClick={() =>
              linkToUrl(
                'http://academy-massage-osteopathy.in.ua',
                'www.academy-massage-osteopathy.in.ua'
              )
            }
          >
            {' '}
            www.academy-massage-osteopathy.in.ua
          </span>
        </p> */}

        {/* <p className="mb-4">
          If necessary, I pre-design and prepare a prototype of the future
          website using <b>Figma</b>, create a layout in <b>Photoshop</b>. In my
          work I use <b>NPM</b> and <b>GitHub</b>.
        </p> */}
        {/* <p className="mb-2 underline underline-offset-4 decoration-color-bg-photo">
          <b>2014 – 2015:</b> RIM2000, Dniepropetrovsk
        </p> */}
        {/* <p>
          <b>position:</b> network equipment supply manager
        </p>
        <p className="mb-2">
          <b>job responsibilities:</b> Organization and maintenance of a base of
          passive and active network equipment. Procurement planning and
          optimization. Contracting with suppliers. Statistics.
        </p>
        <p className="mb-2 underline underline-offset-4 decoration-color-bg-photo">
          <b>2004 – 2014:</b> RIM2000, Dniepropetrovsk
        </p>
        <p>
          <b>position:</b> leading specialist of the Design Department.
        </p>
        <p>
          <b>job responsibilities:</b> Participation in projects and tenders,
          making contracts. Creation applications for equipment supply for the
          successful completion of work.
        </p> */}
      </div>
    </div>
  );
};

export default Work;
