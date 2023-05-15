import { GetStaticPropsContext } from "next";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import { PrismaClient } from "@prisma/client";

import { HeroSection } from "@/components";
import type { Place } from "@/interfaces";

interface PlaceProps {
  place: Place;
}

const prisma = new PrismaClient();

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const place = await prisma.place.findUnique({
    where: { slug: String(params?.id) },
    include: {
      posts: true,
    },
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
      <Head>
        <title>{place.title}</title>
      </Head>
      <HeroSection
        title={place.title}
        subtitle={place.description}
        image={place.image}
      />

      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-lg leading-9 font-medium text-gray-900 sm:text-xl sm:leading-10">
            &quot;Some inspiring quote ultricies sed, dolor. Cras elementum
            ultrices diam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit&quot;
          </h2>
          <div className="mt-6 mb-10 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam.
          </div>
          <hr />
          <h3 className="text-lg leading-9 font-medium text-gray-900 sm:text-xl sm:leading-10 m-10">
            &quot;Some less inspiring quote ultricies sed, dolor. Cras elementum
            ultrices diam. Lorem ipsum dolor sit amet, consectetur adipiscing
            elit&quot;
          </h3>
          <div className="mt-6 mb-10 text-gray-700">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
            risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
            nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit. Sed non risus.
            Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
            ultricies sed, dolor. Cras elementum ultrices diam.
          </div>
          <hr />
        </div>
      </section>
      <section className="bg-white py-4 px-4 sm:px-6 lg:px-8 mb-20">
        <div className="mt-12 grid gap-8 md:grid-cols-2 xl:grid-cols-3 mx-10">
          {place.posts?.map((place) => (
            <div
              key={place.title}
              className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg hover:opacity-90 transition ease-in-out duration-300"
            >
              <Link href={`/places/${place.slug}`}>
                <div className="relative h-48">
                  <Image
                    src={place.image}
                    alt={place.title}
                    fill
                    className="object-cover"
                  />
                  <div className="w-full h-full flex items-center justify-center">
                    <h2 className="z-10 text-2xl font-bold text-white py-4 px-6">
                      {place.title}
                    </h2>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 mb-2">
                    {place.title}
                  </h3>
                  <p className="text-gray-700">{place.excerpt}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
