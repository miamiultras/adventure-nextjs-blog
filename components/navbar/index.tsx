import Link from "next/link";

function Navbar() {
  return (
    <section className="relative">
      <nav className="z-10 absolute top-0 left-0 w-full p-4 flex items-center justify-between text-gray-900">
        <h1 className="text-3xl font-bold">Logo</h1>
        <ul className="flex">
          <li className="ml-4">
            <Link href="/" className="text-lg uppercase">
              Home
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/places" className="text-lg uppercase">
              Places
            </Link>
          </li>
          <li className="ml-4">
            <Link href="/about" className="text-lg uppercase">
              About
            </Link>
          </li>
        </ul>
      </nav>
    </section>
  );
}

export default Navbar;
