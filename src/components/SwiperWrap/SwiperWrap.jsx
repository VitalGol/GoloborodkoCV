/* eslint-disable react/prop-types */
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

// eslint-disable-next-line react/prop-types
const SwiperWrap = ({ courses }) => {
  // const { id, pic, title } = courses;
  return (
    // <div className="flex justify-center items-center w-full 2xl:w-[1000px] xl:w-[800px] p-6">
    // <div className="flex justify-center items-center xl:w-[850px] lg:w-[700px] md:w-[850px] p-6">
    <div className=" xl:w-[850px] lg:w-[700px] md:w-[850px] p-6">
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
      >
        {courses.map((el) => (
          <SwiperSlide key={el.id}>
            <h1 className=" text-2xl font-medium">{el.title}</h1>
            <p className="pb-10">{el.content}</p>
            {/* <div className="flex justify-center items-center  "> */}

            <img src={el.pic} alt={el.title} />
            {/* </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default SwiperWrap;
