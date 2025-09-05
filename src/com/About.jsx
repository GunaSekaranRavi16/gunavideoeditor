import { motion } from "framer-motion";

function About() {
  return (
    <section id="about" className="py-20 bg-gradient-to-b from-black to-green-950 px-6">
      <div className="max-w-5xl mx-auto">
        <motion.h3
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold text-center text-green-400 drop-shadow-[0_0_12px_#22c55e]"
        >
          About Me
        </motion.h3>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="mt-6 text-gray-300 leading-relaxed text-center max-w-3xl mx-auto"
        >
          I’m a passionate video editor and content creator with experience in editing
          short-form and long-form videos, designing graphics, and building engaging
          content for brands and individuals. With a creative eye and technical
          expertise, I transform ideas into compelling visuals that connect with audiences.
        </motion.p>
      </div>
    </section>
  );
}
export default About;
