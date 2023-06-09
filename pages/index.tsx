import { PostCard, HeroSection, Layout, Container } from "@/components";
import type { Post } from "@/interfaces";
import prisma from "@/lib/prisma";

interface HomeProps {
  posts: Post[];
}

export async function getStaticProps() {
  const posts = await prisma.post.findMany();

  return {
    props: { posts },
  };
}

export default function Home({ posts }: HomeProps) {
  return (
    <Layout>
      <HeroSection
        title="Adventure Blog"
        subtitle="Adventure Blog bla bla bla bla bla lorem bla ipsum bla bla"
        image="/images/background.jpg"
      />
      <section className="bg-white py-24">
        <Container>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: Post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </Container>
      </section>
    </Layout>
  );
}
