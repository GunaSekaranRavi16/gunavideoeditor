import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./works.css"; // custom css for arrows

function Works() {
  const videos = [
    "https://ik.imagekit.io/6iu0mfpedy/v1.mp4",
    "https://ik.imagekit.io/6iu0mfpedy/v2.mp4",
    "https://ik.imagekit.io/6iu0mfpedy/v3.mp4",
    "https://ik.imagekit.io/6iu0mfpedy/v4.mp4",
    "https://ik.imagekit.io/6iu0mfpedy/v5.mp4",
    "https://ik.imagekit.io/6iu0mfpedy/v6.mp4",
    "https://ik.imagekit.io/6iu0mfpedy/v7.mp4",
    "https://ik.imagekit.io/6iu0mfpedy/v8.mp4",
  ];

  return (
    <section
      id="works"
      className="min-h-screen py-16 bg-black text-white px-4 sm:px-6 relative"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 text-center drop-shadow-[0_0_14px_#22c55e] mb-10 sm:mb-12">
        My Works
      </h2>

      <Swiper
        modules={[Autoplay, Navigation]}
        spaceBetween={20}
        slidesPerView={1}
        breakpoints={{
          640: { slidesPerView: 1.2, spaceBetween: 20 },
          768: { slidesPerView: 2, spaceBetween: 25 },
          1024: { slidesPerView: 3.2, spaceBetween: 30 },
        }}
        loop={true}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        speed={1000}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
        }}
        className="w-full max-w-6xl relative"
      >
        {videos.map((src, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center">
              <video
                src={src}
                muted
                loop
                autoPlay
                playsInline
                className="rounded-xl shadow-lg w-full max-w-[260px] sm:max-w-[300px] md:max-w-[260px] h-[380px] sm:h-[420px] md:h-[460px] object-cover transition-transform duration-500 hover:scale-105"
              />
            </div>
          </SwiperSlide>
        ))}

        {/* Navigation Arrows */}
        <div className="swiper-button-prev !w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12 !rounded-full !bg-white !flex !items-center !justify-center !shadow-lg"></div>
        <div className="swiper-button-next !w-8 !h-8 sm:!w-10 sm:!h-10 md:!w-12 md:!h-12 !rounded-full !bg-white !flex !items-center !justify-center !shadow-lg"></div>
      </Swiper>
    </section>
  );
}

export default Works;
