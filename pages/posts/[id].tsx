import { GetStaticPropsContext } from "next";
import Head from "next/head";

import { Container, HeroSection, Layout } from "@/components";
import type { Post } from "@/interfaces";
import prisma from "@/lib/prisma";

interface PostProps {
  post: Post;
}

export async function getStaticProps({ params }: GetStaticPropsContext) {
  const post = await prisma.post.findUnique({
    where: { slug: String(params?.id) },
  });

  return {
    props: { post },
  };
}

export async function getStaticPaths() {
  const posts = await prisma.post.findMany();

  const paths = posts.map((post: Post) => {
    return { params: { id: post.slug } };
  });

  return {
    paths,
    fallback: false,
  };
}

export default function Post({ post }: PostProps) {
  return (
    <Layout>
      <Head>
        <title>{post.title}</title>
      </Head>
      <HeroSection
        title={post.title}
        subtitle={post.excerpt}
        image={post.image}
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
      </Container>
    </Layout>
  );
}
