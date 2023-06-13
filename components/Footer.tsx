import Link from "next/link";
import { Container } from "./Container";

function Footer() {
  return (
    <footer className="bg-neutral-50 border-t border-neutral-200">
      <Container>
        <div className="py-28 flex flex-col lg:flex-row items-center">
          <h3 className="text-3xl lg:text-[1.5rem] font-bold tracking-tighter leading-tight text-center lg:text-left mb-10 lg:mb-0 lg:pr-4 lg:w-1/2">
            We are a team of passionate travelers who love to explore the world
            and share our experiences with others.{" "}
          </h3>
          <div className="flex flex-col lg:flex-row justify-center items-center lg:pl-4 lg:w-1/2">
            <Link href="/" className="mx-4 font-bold text-2xl hover:underline">
              Home
            </Link>
            <Link
              href="/places"
              className="mx-4 font-bold text-2xl hover:underline"
            >
              About us
            </Link>
            <Link
              href="/places"
              className="mx-4 font-bold text-2xl hover:underline"
            >
              Places
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  );
}

export { Footer };
