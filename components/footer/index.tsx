import Link from "next/link";

function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-4 py-8">
      <div className="max-w-screen-lg mx-auto flex flex-col md:flex-row justify-between items-center">
        <div>
          <h3 className="text-lg font-semibold mb-2">About Us</h3>
          <p className="text-gray-400">
            We are a team of passionate travelers who love to explore the world
            and share our experiences with others.
          </p>
        </div>
        <nav className="mt-4 md:mt-0 flex space-x-4">
          <Link
            href="/"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Home
          </Link>
          <Link
            href="/about"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            About
          </Link>
          <Link
            href="/blog"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Blog
          </Link>
          <Link
            href="/contact"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            Contact
          </Link>
        </nav>
      </div>
    </footer>
  );
}

export { Footer };
