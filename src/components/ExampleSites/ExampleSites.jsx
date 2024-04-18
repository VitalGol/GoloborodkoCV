import { exampleSites } from '../../data';
import { Tooltip } from 'react-tooltip';

const ExampleSites = () => {
  const linkToUrl = (url, target) => {
    window.open(url, target);
  };
  return (
    <div className="flex lg:flex-col md:flex-col sm:flex-col xs:flex-col ls:flex-col  lg:w-[95%]  lg:m-auto  md:w-[80%]  md:m-auto sm:w-[60%] xs:w-[80%] ls:w-[90%]  sm:m-auto xs:m-auto ls:m-auto gap-2 text-lg">
      <Tooltip
        id="work-tooltip"
        style={{
          backgroundColor: '#689cca',
          color: 'rgb(249, 250, 251)',
          zIndex: 10,
        }}
      />
      {exampleSites.map((site) => (
        <div
          key={site.id}
          className="flex flex-1 flex-col lg:flex-row md:flex-row justify-start items-center dark:border-gray-600 border-slate-200 rounded-lg border p-4 cursor-pointer hover:bg-gray-600 dark:hover:bg-slate-200"
          data-tooltip-id="work-tooltip"
          data-tooltip-content="Click to open link in a new tab "
          data-tooltip-delay-hide={500}
          onClick={() => linkToUrl(site.url, site.target)}
        >
          <img
            src={site.img}
            alt={site.target}
            className=" w-[300px] h-[175px] lg:w-[195px] lg:h-auto md:w-[200px] md:h-auto mt-2 mb-4 lg:mt-0 lg:mb-0 md:mt-0 md:mb-0 "
          />

          <p className="lg:ml-4 md:ml-4">
            {site.text[0]}
            <b>{site.span[0]}</b>
            {site.text[1]} <b>{site.span[1]}</b>.
          </p>
        </div>
      ))}
    </div>
  );
};

export default ExampleSites;
