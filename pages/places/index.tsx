import Image from "next/image";
import Link from "next/link";

import type { Place } from "@/interfaces";

interface PlacesProps {
  places: Place[];
}

function Places({ places }: PlacesProps) {
  return (
    <div className="container mx-auto px-4 py-40">
      <div className="flex flex-wrap justify-center items-center bg-white">
        {places?.map((place: Place) => (
          <div
            key={place.slug}
            className="m-4 w-64 h-64 relative overflow-hidden"
          >
            <Link href={`/places/${place.slug}`}>
              <Image
                src={place.image}
                alt={place.title}
                layout="fill"
                objectFit="cover"
                objectPosition="center"
                className="hover:opacity-75 transition ease-in-out duration-300"
              />
              <div className="w-full h-full flex items-center justify-center hover:opacity-75 transition ease-in-out duration-300">
                <h2 className="z-10 text-2xl font-bold text-white py-4 px-6">
                  {place.title}
                </h2>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  const req = await fetch(`http://localhost:3000/data/places.json`);
  const data = await req.json();

  return {
    props: { places: data },
  };
}

export default Places;
