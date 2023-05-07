import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <section className="relative">
      <nav className="z-10 w-full p-4 px-8 flex items-center justify-between text-gray-900">
        <h1 className="text-3xl font-bold">
          <Image src="logo.svg" alt="logo" width={50} height={50} />
        </h1>
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

export { Navbar };
