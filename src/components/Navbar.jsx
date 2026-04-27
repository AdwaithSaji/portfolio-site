function Navbar() {
  return (
    <nav className="fixed w-full top-0 left-0 z-50 bg-black/40 backdrop-blur-md border-b border-white/10">
      <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center text-white">

        <h1 className="text-lg font-medium text-purple-400">Adwaith</h1>

        <ul className="flex gap-8 text-sm">

          {["home", "about", "skills", "projects", "contact"].map((item) => (
            <li key={item} className="group relative cursor-pointer">
              <a href={`#${item}`} className="capitalize text-gray-300 hover:text-white">
                {item}
              </a>

              {/* UNDERLINE ANIMATION */}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
            </li>
          ))}

        </ul>

      </div>
    </nav>
  );
}

export default Navbar;