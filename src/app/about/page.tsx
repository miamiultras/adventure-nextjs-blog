import Container from "@/app/_components/container";
import Link from "next/link";

export default function AboutPage() {
  return (
    <Container>
      <div className="animate-fadeIn">
        <Link
          href="/"
          className="inline-block mb-8 text-neutral-500 hover:text-black dark:hover:text-white transition-colors duration-200"
        >
          ← Back to home
        </Link>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 py-20">
          <div className="space-y-6">
            <h1 className="text-4xl font-bold tracking-tighter leading-tight md:pr-8">
              About Me
            </h1>
            <div className="text-lg space-y-4">
              <p>
                Hello! I'm a passionate traveler and photographer exploring the world
                one adventure at a time.
              </p>
              <p>
                Through this blog, I share my experiences, stories, and photographs
                from various corners of the globe.
              </p>
            </div>
          </div>
          <div className="group relative overflow-hidden rounded-lg shadow-lg">
            <div className="aspect-w-16 aspect-h-9">
              <img
                src="assets/about_me.jpeg"
                alt="About me"
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </Container>
  );
}
