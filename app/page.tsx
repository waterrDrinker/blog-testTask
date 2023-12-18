// import styles from './page.module.css'
import PostsList from './ui/posts/postsList'
import Pagination from './ui/pagination'

export default function Home() {
  return (
    <>
      <h2>Posts</h2>
      <PostsList />
      <Pagination totalPages={20} />
    </>
  )
}
