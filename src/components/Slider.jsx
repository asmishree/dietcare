import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation, Mousewheel } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const PageSlider = () => {
  const paginationStyle = {
    "--swiper-pagination-color": "#2563EB",
  };

  return (
    <Swiper
      style={paginationStyle}
      spaceBetween={0}
      centeredSlides={true}
      mousewheel={false}
      slidesPerView={1}
      loop={true}
      autoplay={{
        delay: 7000,
        disableOnInteraction: false,
      }}
      pagination={{
        dynamicBullets: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation, Mousewheel]}
    >
      {slideData.map((slide, index) => (
        <SwiperSlide key={index}>
          <div className="slidermain">
            <div className="myslider">
       
            </div>
            <div className="text-slide">
            <h2 >{slide.title}</h2>
              <p>{slide.description}</p>
            </div>
            <img
              src={slide.poster}
              alt="slide"
              style={{ userSelect: "none" }}
            />
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default PageSlider;

const slideData = [
  {
    _id: "1",
    poster: "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709361/pexels-naim-benjelloun-2291344_qwoc65.jpg",
    title: "Nutrient-Rich Delights",
    description: "Indulge in a rainbow of fruits and vegetables daily for a vibrant mix of vitamins and minerals that fuel your body with essential nutrients. Discover the joy of a colorful and nutritious diet!"
  },
  {
    _id: "2",
    poster: "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695707889/pexels-ketut-subiyanto-5038818_orhmkh.jpg",
    title: "Protein-Packed Power",
    description: "Elevate your energy levels with lean sources of protein such as grilled chicken, beans, and quinoa, supporting muscle health and overall well-being. Unleash the power of protein for a stronger and healthier you!"
  },
  {
    _id: "3",
    poster: "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709362/pexels-chan-walrus-958546_z2ak8v.jpg",
    title: "Whole Grain Goodness",
    description: "Opt for whole grains like brown rice and oats to enhance digestive health, regulate blood sugar levels, and provide a sustained release of energy throughout the day. Embrace the goodness of whole grains for a nourished and balanced lifestyle!"
  },
  {
    _id: "4",
    poster: "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709363/pexels-lauren-heaton-8633675_ok8dpi.jpg",
    title: "Green Elixir for Vitality",
    description: "Boost your immune system and detoxify with a daily dose of green tea, a rich source of antioxidants that promote overall health and longevity. Experience vitality with the refreshing and health-boosting green elixir!"
  },
  {
    _id: "5",
    poster: "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709362/pexels-august-de-richelieu-4259707_vdzwuw.jpg",
    title: "Omega-3 Bliss",
    description: "Incorporate fatty fish like salmon or chia seeds into your diet for a dose of omega-3 fatty acids, supporting heart health, brain function, and reducing inflammation. Dive into omega-3 bliss for a healthier heart and sharper mind!"
  },
  {
    _id: "6",
    poster: "https://res.cloudinary.com/dyun4cr6u/image/upload/v1695709981/pexels-anna-tarazevich-5119595_udtgi9.jpg",
    title: "Hydration Haven",
    description: "Quench your thirst with nature's elixir—water! Stay hydrated for radiant skin, optimal organ function, and enhanced physical performance. Experience the haven of hydration for a revitalized and energized lifestyle!"
}];


