import Link from "next/link";

export default function Navbar() {
  return (
    <header className="fixed w-full bg-white backdrop-blur-lg z-50 ">
      <div className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="group flex items-center space-x-2">
            <div className="w-10 h-10 flex items-center justify-center  transition-colors">
              <svg
                className="w-20 h-20 mx-auto text-emerald-400"
                viewBox="0 0 24 24"
              >
                <path
                  d="M18 12C18 18 12 22 12 22C12 22 6 18 6 12C6 6 12 2 12 2C12 2 18 6 18 12Z"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                />
                <circle cx="16" cy="8" r="2" fill="currentColor" />
              </svg>
            </div>
            <span className="text-2xl font-bold bg-gradient-to-r from-emerald-600 to-emerald-400 bg-clip-text text-transparent font-arabic tracking-wider">
              الخطاط
            </span>
          </Link>

          <nav className="hidden md:flex space-x-8 font-bold">
            <Link
              href="/"
              className="relative px-3 py-2 text-emerald-400 hover:text-emerald-600 transition-colors group"
            >
              <span>Home</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/gallery"
              className="relative px-3 py-2 text-emerald-400 hover:text-emerald-600 transition-colors group"
            >
              <span>Gallery</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/about"
              className="relative px-3 py-2 text-emerald-400 hover:text-emerald-600 transition-colors group"
            >
              <span>About</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link
              href="/contact"
              className="relative px-3 py-2 text-emerald-400 hover:text-emerald-600 transition-colors group"
            >
              <span>Contact</span>
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-emerald-300 group-hover:w-full transition-all duration-300"></span>
            </Link>
          </nav>

          <button className="md:hidden p-2 rounded-md text-emerald-200 hover:bg-emerald-800/600 transition-colors">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </header>
  );
}
