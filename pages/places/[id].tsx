import { GetStaticPropsContext } from "next";
import Head from "next/head";

import { Container, HeroSection, Layout, PostCard } from "@/components";
import type { Place, Post } from "@/interfaces";
import prisma from "@/lib/prisma";

interface PlaceProps {
  place: Place;
}

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
    <Layout>
      <Head>
        <title>{place.title}</title>
      </Head>
      <HeroSection
        title={place.title}
        subtitle={place.description}
        image={place.image}
      />

      <Container>
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
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
              Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
              ultricies sed, dolor. Cras elementum ultrices diam. Lorem ipsum
              dolor sit amet, consectetur adipiscing elit. Sed non risus.
              Suspendisse lectus tortor, dignissim sit amet, adipiscing nec,
              ultricies sed, dolor. Cras elementum ultrices diam.
            </div>
            <hr />
            <h3 className="text-lg leading-9 font-medium text-gray-900 sm:text-xl sm:leading-10 m-10">
              &quot;Some less inspiring quote ultricies sed, dolor. Cras
              elementum ultrices diam. Lorem ipsum dolor sit amet, consectetur
              adipiscing elit&quot;
            </h3>
            <div className="mt-6 mb-10 text-gray-700">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
              risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing
              nec, ultricies sed, dolor. Cras elementum ultrices diam. Lorem
              ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus.
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
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {place.posts?.map((post: Post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </section>
      </Container>
    </Layout>
  );
}
