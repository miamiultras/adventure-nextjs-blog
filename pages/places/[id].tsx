import Image from "next/image";
import { GetStaticPropsContext } from "next";
import { PrismaClient } from "@prisma/client";

import type { Place } from "@/interfaces";

interface PlaceProps {
  place: Place;
}

const prisma = new PrismaClient();

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const place = await prisma.place.findUnique({
    where: { slug: params?.id as string },
  });

  return {
    props: { place },
  };
}

export async function getStaticPaths() {
  const places = await prisma.place.findMany();

  const paths = places.map((place: Place) => {
    return { params: { id: place.slug } };
  });

  return {
    paths,
    fallback: false,
  };
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
