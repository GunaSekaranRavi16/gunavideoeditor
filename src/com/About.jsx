import { color } from "framer-motion";

export default function About() {
  const experiences = [
    {
      company: "CCMedia Marketing Solutions",
      year: "Agency Experience",
      date:"march 2023 - present",
      details: [
        "AI-generated edits",
        "Multilingual content: Hindi, Telugu, Kannada",
        "Lalithaa Jewellery",
        "A2B (Adyar Ananda Bhavan)",
        "Femi9",
        "GIGA Shockmarket Company",
        "VRG Software Training Company",
      ],
    },
    {
      company: "Freelance Projects",
      year: "Worked with top creators in tamil nadu",
      details: [
        "Branding & personal videos",
        "YouTube vidoes",
        "Brand AD Videos",

        
      ],
    },
  ];

  return (
    <section className="bg-black text-white py-16 px-6" id="about">
      {/* Heading */}
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-emerald-400 drop-shadow-[0_0_10px_rgba(16,185,129,0.8)]">
          About Me
        </h2>
        <p className="text-gray-200 text-lg leading-relaxed max-w-3xl mx-auto">
          I’m <span className="font-semibold text-emerald-400">Gunasekaran</span>, 
          a passionate <span className="font-semibold text-emerald-400">Video Editor</span> 
          with both agency and freelance experience. I specialize in crafting impactful 
          videos that connect with audiences across different platforms.
        </p>
      </div>

      {/* Experience Cards */}
      <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {experiences.map((exp, idx) => (
          <div
            key={idx}
            className="bg-gray-900 rounded-2xl shadow-lg p-6 border border-emerald-500/40 hover:border-emerald-400 hover:shadow-[0_0_25px_rgba(16,185,129,0.8)] transition-all"
          >
            <h3 className="text-xl font-semibold text-emerald-400 drop-shadow-[0_0_8px_rgba(16,185,129,0.8)] mb-2">
              {exp.company}
            </h3>
            <p className="text-gray-400 mb-4">{exp.year}<br/><b>{exp.date}</b></p>
             {/* <p className="text-gray-400 mb-4">{exp.date}</p> */}
            <ul className="list-disc list-inside space-y-2 text-gray-200">
              {exp.details.map((detail, i) => (
                <li
                  key={i}
                  className="hover:text-emerald-300 transition-colors"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
