import { fetchPosts } from "@/app/lib/data";
import Post from "./post";

type Post = {
  title: string;
  body: string;
  id: number;
  userId: number;
};

const PostsList = async () => {
  const posts = await fetchPosts();
  const renderedPosts = posts
    .reverse()
    .slice(0, 5)
    .map((post: Post) => (
      <Post title={post.title} body={post.body} id={post.id} key={post.id} />
    ));

  return <>{renderedPosts}</>;
};

export default PostsList;
