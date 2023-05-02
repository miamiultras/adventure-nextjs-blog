import Image from "next/image";
import { GetStaticPropsContext } from "next";

import type { Place } from "@/interfaces";

interface PlaceProps {
  place: Place;
}

export default function Place({ place }: PlaceProps) {
  return (
    <>
      <section className="h-screen w-screen relative">
        <Image
          src={place.image}
          alt={place.title}
          fill
          objectFit="cover"
          quality={100}
          placeholder="blur"
          blurDataURL={place.image}
        />
      </section>
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">Details...</div>
      </section>
    </>
  );
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const req = await fetch(`http://localhost:3000/data/${params?.id}.json`);
  const data = await req.json();

  return {
    props: { place: data },
  };
}

export async function getStaticPaths() {
  const req = await fetch("http://localhost:3000/data/places.json");
  const data = await req.json();

  const paths = data.map((place: Place) => {
    return { params: { id: place.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}
