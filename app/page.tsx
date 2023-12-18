// import styles from './page.module.css'
import PostsList from './ui/posts/postsList'
import Pagination from './ui/pagination'
import { fetchPosts } from "@/app/lib/data";

export default async function Home({ searchParams }: { searchParams: { page?: string} }) {
  const posts = await fetchPosts();
  const currentPage = Number(searchParams?.page) || 1
  const POSTS_PER_PAGE = 5
  const allPages = posts.length / POSTS_PER_PAGE

  return (
    <>
      <h2>Posts</h2>
      <PostsList posts={posts} currentPage={currentPage} />
      <Pagination totalPages={allPages} />
    </>
  )
}
