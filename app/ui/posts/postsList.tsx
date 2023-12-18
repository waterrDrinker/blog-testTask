import Post from "./post";

type Post = {
  title: string;
  body: string;
  id: number;
  userId: number;
};

const PostsList = ({
  posts,
  currentPage,
}: {
  posts: Post[];
  currentPage: number;
}) => {
  let renderedPosts = posts.reverse();
  if (currentPage === 1) {
    renderedPosts = renderedPosts.slice(0, 5);
  } else {
    renderedPosts = renderedPosts.slice((currentPage - 1) * 5, currentPage * 5);
  }

  return (
    <>
      {renderedPosts.map((post: Post) => (
        <Post title={post.title} body={post.body} id={post.id} key={post.id} />
      ))}
    </>
  );
};

export default PostsList;
