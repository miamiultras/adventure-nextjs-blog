import Link from "next/link";

import { Post } from "@/interfaces/Post";

interface PostCardProps {
  post: Post;
}

function PostCard({ post }: PostCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <Link href={`/posts/${post.slug}`}>
        <img
          className="w-full h-48 object-cover"
          src={post.image}
          alt={post.title}
        />
        <div className="p-6">
          <h3 className="text-xl font-bold mb-2">{post.title}</h3>
          <p className="text-gray-700">{post.excerpt}</p>
        </div>
      </Link>
    </div>
  );
}

export default PostCard;
