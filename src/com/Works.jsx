import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/autoplay";
import "swiper/css/navigation";
import "./works.css"; // custom css for arrows

function Works() {
  const shortVideos = [
    { src: "https://ik.imagekit.io/6iu0mfpedy/v1.mp4", label: "A2B (Parrot Brand)" },
    { src: "https://ik.imagekit.io/6iu0mfpedy/v2.mp4", label: "Brand 2" },
    { src: "https://ik.imagekit.io/6iu0mfpedy/v3.mp4", label: "Brand 3" },
    { src: "https://ik.imagekit.io/6iu0mfpedy/v4.mp4", label: "Brand 4" },
    { src: "https://ik.imagekit.io/6iu0mfpedy/v5.mp4", label: "Brand 5" },
    { src: "https://ik.imagekit.io/6iu0mfpedy/v6.mp4", label: "Brand 6" },
    { src: "https://ik.imagekit.io/6iu0mfpedy/v7.mp4", label: "Brand 7" },
    { src: "https://ik.imagekit.io/6iu0mfpedy/v8.mp4", label: "Brand 8" },
    { src: "https://ik.imagekit.io/48on8e3ev/v9.mp4", label: "Brand 9" },
  ];

  const longVideos = [
  { src: "https://ik.imagekit.io/48on8e3ev/ad1.mp4", label: "Long Video 1" },
  { src: "https://ik.imagekit.io/48on8e3ev/ad1.mp4", label: "Long Video 2" },
  { src: "https://ik.imagekit.io/48on8e3ev/ad1.mp4", label: "Long Video 3" },
];

  return (
    <section
      id="works"
      className="min-h-screen py-16 bg-black text-white px-4 sm:px-6 relative"
    >
      <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-green-400 text-center drop-shadow-[0_0_14px_#22c55e] mb-10 sm:mb-12">
        My Works
      </h2>

      {/* ✅ Short Form Section */}
      <h6 className="text-2xl sm:text-3xl md:text-4xl text-white text-center mb-8">
        Short Form Videos
      </h6>

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
        {shortVideos.map((video, index) => (
          <SwiperSlide key={index}>
            <div className="flex justify-center relative">
              <video
                src={video.src}
                muted
                loop
                autoPlay
                playsInline
                className="rounded-xl shadow-lg w-full max-w-[260px] sm:max-w-[300px] md:max-w-[260px] h-[380px] sm:h-[420px] md:h-[460px] object-cover transition-transform duration-500 hover:scale-105"
              />
              <div className="absolute bottom-0 w-full bg-black/70 text-white text-center py-2 text-sm sm:text-base rounded-b-xl">
                {video.label}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      <div className="flex justify-center mt-8 mb-16">
        <button className="px-6 py-3 rounded-xl border-2 border-green-400 text-green-400 font-semibold hover:bg-green-400 hover:text-black transition-all duration-300 shadow-lg">
          For more
        </button>
      </div>

{/* ✅ Long Form Section */}
<h6 className="text-2xl sm:text-3xl md:text-4xl text-white text-center mb-8">
  Long Form Videos
</h6>

<Swiper
  modules={[Autoplay, Navigation]}
  spaceBetween={20}
  slidesPerView={1}
  breakpoints={{
    640: { slidesPerView: 1, spaceBetween: 20 },
    768: { slidesPerView: 1, spaceBetween: 25 },
    1024: { slidesPerView: 2, spaceBetween: 30 },
  }}
  loop={true}
  autoplay={{ delay: 4000, disableOnInteraction: false }}
  speed={1200}
  navigation={{
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  }}
  className="w-full max-w-6xl relative"
>
  {longVideos.map((video, index) => (
    <SwiperSlide key={index}>
      <div className="flex justify-center relative w-full max-w-[800px]">
        {/* ✅ Responsive 16:9 wrapper */}
        <div className="aspect-video w-full rounded-xl overflow-hidden shadow-lg">
          <video
            src={video.src}
            muted
            loop
            autoPlay
            playsInline
            className="w-full h-full object-cover"
          />
        </div>

        {/* ✅ Label */}
        <div className="absolute bottom-0 w-full bg-black/70 text-white text-center py-2 text-base sm:text-lg rounded-b-xl">
          {video.label}
        </div>
      </div>
    </SwiperSlide>
  ))}
</Swiper>

    </section>
  );
}

export default Works;
