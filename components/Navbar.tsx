import Link from "next/link";
import Image from "next/image";

function Navbar() {
  return (
    <nav className="z-10 w-full p-4 px-8 flex items-center justify-between text-gray-900">
      <Link href="/">
        <Image src="logo.svg" alt="logo" width={50} height={50} />
      </Link>
      <ul className="flex">
        <li className="ml-6">
          <Link href="/places" className="text-2xl font-semibold hover:underline">
            Places
          </Link>
        </li>
        <li className="ml-6">
          <Link href="/about" className="text-2xl font-semibold hover:underline">
            About us
          </Link>
        </li>
      </ul>
    </nav>
  );
}

export { Navbar };
