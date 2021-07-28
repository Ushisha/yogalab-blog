import Layout from "@/components/Layout";
import Post from "@/components/Post";
import Link from "next/link";
import { getPosts } from "@/lib/posts";

export default function HomePage({ posts }) {
  console.log(posts);
  return (
    <Layout>
      <h1 className="text-3xl md:text-4xl text-center md:text-left border-b-4 p-5 font-bold">
        Latest Posts
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post, index) => (
          <Post key={index} post={post} />
        ))}
      </div>
      <Link href="/blog">
        <a className="block text-center border border-gray-300 text-gray-800 rounded-md py-4 my-5 transition duration-500 ease select-none hover:text-white hover:bg-yellow-300 hover:border-opacity-0 focus:outline-none focus:shadow-outline w-full">
          All Posts
        </a>
      </Link>
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: getPosts().slice(0, 6),
    },
  };
}
