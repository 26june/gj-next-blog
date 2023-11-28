import { getPosts } from "@/lib/posts";
import Link from "next/link";

export default function BlogPage() {
  const posts = getPosts();

  return (
    <div>
      <h2>My Posts:</h2>
      <ul>
        {posts.map((e) => {
          return (
            <li key={e.slug}>
              <Link href={`blog/${e.slug}`}>{e.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
