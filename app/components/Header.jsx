/* eslint-disable @next/next/no-img-element */
/* eslint-disable @next/next/no-html-link-for-pages */
export default function Header() {
  return (
    <header className="relative w-full bg-black pb-32">
      {/* Navbar */}
      <nav className="max-w-full mx-auto px-6 py-4 flex justify-between items-center fixed top-0 left-0 w-full bg-black/90 backdrop-blur-md z-50">
        <span className="font-bold text-2xl text-white">MyPortfolio</span>
        <div className="space-x-6 text-white font-medium">
          <a href="/" className="hover:text-red-500 transition-colors">Home</a>
          <a href="/about" className="hover:text-gray-500 transition-colors">About</a>
          <a href="/contact" className="hover:text-gray-500 transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero content */}
      <div className="max-w-4xl mx-auto pt-40 text-center flex flex-col items-center gap-4">
        {/* Profile Image */}
        <div className="w-40 h-40 border-4 border-gray-500 rounded-full overflow-hidden shadow-lg">
          <img
            src="/profile.jpg"
            alt="John Doe"
            className="w-full h-full object-cover"
          />
        </div>

        <h1 className="text-5xl font-extrabold text-white mb-2">Arvin Tumangan</h1>
        <p className="text-xl text-gray-300 mb-4">Full-Stack Developer & IT Specialist</p>
        <a
          href="/contact"
          className="inline-block px-8 py-3 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition"
        >
          Work With Me
        </a>
      </div>
    </header>
  );
}
