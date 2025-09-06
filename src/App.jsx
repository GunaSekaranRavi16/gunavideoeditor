import Navbar from "./com/Navbar";
import Hero from "./com/Hero";
import About from "./com/About";
import Works from "./com/Works";
function App() {
  return (
    <div className="bg-black text-white font-sans min-h-screen">
      <Navbar />
      <Hero />
      <About />
      <Works />
      {/* Placeholder anchors so navbar links don't 404 while you build next sections */}
      <section id="works" className="h-24"></section>
      <section id="experience" className="h-24"></section>
      <section id="contact" className="h-24"></section>
    </div>
  );
}
export default App;
