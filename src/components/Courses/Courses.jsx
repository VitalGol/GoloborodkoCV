// import { useEffect, useState } from 'react';
import { courses } from '../../data';
import SwiperWrap from '../SwiperWrap/SwiperWrap';

const Courses = () => {
  // const [widthScreen, setWidthScreen] = useState(false);

  // useEffect(() => {
  //   addEventListener('resize', () => {
  //     // if (window.innerWidth < 1280) {
  //     if (window.innerWidth < 768) {
  //       setWidthScreen(true);
  //     } else {
  //       setWidthScreen(false);
  //     }
  //   });
  //   return () => {
  //     // removeEventListener('resize',()=>{})
  //   };
  // }, []);

  return (
    <div
      className="flex flex-col w-full lg:w-4/6 xl:w-4/6 p-4 xs:p-2 ls:p-2 bg-gray-500 dark:bg-slate-100 font-inter text-gray-50 dark:text-color-text-light
      font-thin dark:font-normal"
    >
      <h1 className="font-jakarta text-3xl xs:text-2xl ls:text-2xl font-bold tracking-wider text-color-bg-photo">
        Courses
      </h1>
      <div className="flex justify-center items-center flex-col xl:flex-row xl:hidden lg:hidden">
        {courses.map((el) => (
          <div key={el.id}>
            <h1 className="text-2xl xs:text-xl ls:text-xl font-medium mt-8 sm:pl-2 xs:pl-2 ls:pl-2 ">
              {el.title}
            </h1>
            <p className="pb-4 xl:pb-2 sm:pl-2 xs:pl-2 ls:pl-2">{el.content}</p>
            {/* <div className="flex justify-center items-center  "> */}

            <img src={el.pic} alt={el.title} />
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center flex-col xl:flex-row md:hidden sm:hidden xs:hidden ls:hidden">
        <SwiperWrap courses={courses} />
      </div>
    </div>
  );
};

export default Courses;

{
  /* <div className="flex justify-center items-center flex-col xl:flex-row">
{widthScreen ? (
  courses.map((el) => (
    <div key={el.id}>
      <h1 className="text-2xl xs:text-xl ls:text-xl font-medium mt-8 ">
        {el.title}
      </h1>
      <p className="pb-4 xl:pb-2">{el.content}</p>
      <div className="flex justify-center items-center  ">
        <img src={el.pic} alt={el.title} />
      </div>
    </div>
  ))
) : (
  <SwiperWrap courses={courses} />
)}
</div> */
}
