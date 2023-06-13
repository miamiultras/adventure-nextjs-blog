import Image from "next/image";
import Link from "next/link";

import type { Place } from "@/interfaces";
import { Container, Layout } from "@/components";
import prisma from "@/lib/prisma";

interface PlacesProps {
  places: Place[];
}

export async function getStaticProps() {
  const places = await prisma.place.findMany();

  return {
    props: { places },
  };
}

function Places({ places }: PlacesProps) {
  return (
    <Layout>
      <Container>
        <div className="flex flex-wrap justify-center items-center bg-white">
          {places?.map((place: Place) => (
            <div
              key={place.slug}
              className="m-4 w-64 h-64 relative overflow-hidden rounded-xl"
            >
              <Link href={`/places/${place.slug}`}>
                <Image
                  src={place.image}
                  alt={place.title}
                  fill
                  className="hover:opacity-75 transition ease-in-out duration-300 object-cover"
                />
                <div className="w-full h-full flex items-center justify-center">
                  <h2 className="z-10 text-2xl font-bold text-white py-4 px-6">
                    {place.title}
                  </h2>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </Container>
    </Layout>
  );
}

export default Places;
