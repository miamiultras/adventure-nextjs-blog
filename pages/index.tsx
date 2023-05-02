import Image from "next/image";

import PostCard from "@/components/PostCard";
import type { Post } from "@/interfaces";

interface HomeProps {
  posts: Post[];
}

export default function Home({ posts }: HomeProps) {
  return (
    <>
      <section className="h-screen w-screen relative">
        <Image
          src="/images/background.jpg"
          alt="backgroundImage"
          fill
          objectFit="cover"
          quality={100}
          placeholder="blur"
          blurDataURL="/images/background.jpg"
        />
      </section>
      <section className="bg-white py-24">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {posts.map((post: Post) => (
              <PostCard key={post.slug} post={post} />
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export async function getStaticProps() {
  const req = await fetch(`http://localhost:3000/data/posts.json`);
  const data = await req.json();

  return {
    props: { posts: data },
  };
}
