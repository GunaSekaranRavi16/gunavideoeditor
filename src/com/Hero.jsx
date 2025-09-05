import { motion } from "framer-motion";
import profile from "../assets/img/profile.png";

function Hero() {
  return (
    <section
      id="hero"
      className="min-h-screen pt-24 flex flex-col md:flex-row items-center justify-center text-center md:text-left px-6 bg-black"
    >
      {/* LEFT SIDE - TEXT */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="flex-1 md:ml-[20%]"
      >
        <h2 className="text-4xl md:text-6xl font-extrabold text-green-400 drop-shadow-[0_0_14px_#22c55e]">
          Hi, I’m Gunasekaran
        </h2>
        <p className="mt-4 text-lg md:text-xl text-gray-300 max-w-md mx-auto md:mx-0">
          Video Editor || Graphic Designer <br/>|| <b>Content Creator</b>
        </p>

        <div className="mt-7 flex gap-4 justify-center md:justify-start">
          <a
            href="#works"
            className="px-6 py-2 rounded-full bg-green-500 text-black font-semibold hover:bg-green-400 transition"
          >
            View My Work
          </a>
          <a
            href="#contact"
            className="px-6 py-2 rounded-full border border-green-500 text-green-400 hover:bg-green-500 hover:text-black transition"
          >
            Hire Me
          </a>
        </div>
      </motion.div>

      {/* RIGHT SIDE - PROFILE IMAGE */}
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.2 }}
        className="flex-1 flex justify-center mt-12 md:mt-0"
      >
        <div className="relative">
          {/* glowing circle container */}
          <div className="w-60 h-60 md:w-80 md:h-80 rounded-full border-4 border-green-300 shadow-[0_0_40px_#22c55e] overflow-hidden bg-gradient-to-tr from-green-500/20 to-black">
            {/* profile image inside circle */}
            <img
              src={profile}
              alt="Gunasekaran"
              className="w-full h-full object-cover"
            />
          </div>

          {/* subtle aura */}
          <div className="absolute inset-0 blur-3xl opacity-30 bg-green-500/30 rounded-full -z-10" />
        </div>
      </motion.div>
    </section>
  );
}
export default Hero;
