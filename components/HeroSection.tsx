import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle: string;
  image: string;
}

function HeroSection({ title, subtitle, image }: HeroSectionProps) {
  return (
    <section className="h-[calc(100vh-112px)] relative flex flex-col justify-end m-4 mt-0 p-10">
      <Image
        src={image}
        alt="backgroundImage"
        fill
        quality={100}
        placeholder="blur"
        blurDataURL={image}
        className="rounded-3xl object-cover"
      />
      <h1 className="text-4xl md:text-6xl font-bold text-white z-10">
        {title}
      </h1>
      <p className="text-2xl md:text-2xl font-medium text-white z-10">
        {subtitle}
      </p>
    </section>
  );
}

export { HeroSection };
