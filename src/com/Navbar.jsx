function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-black/80 backdrop-blur-sm border-b border-green-500">
      <div className="max-w-6xl mx-auto flex justify-between items-center px-6 py-4">
        <a href="#hero" className="text-2xl font-bold text-white-400 drop-shadow-[0_0_8px_#22c55e]">
          GUNASEKARAN
        </a>
        <ul className="hidden md:flex space-x-8 text-lg">
          <li><a href="#about" className="hover:text-green-400">About</a></li>
          <li><a href="#works" className="hover:text-green-400">Works</a></li>
          <li><a href="#experience" className="hover:text-green-400">Experience</a></li>
          <li><a href="#contact" className="hover:text-green-400">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}
export default Navbar;
