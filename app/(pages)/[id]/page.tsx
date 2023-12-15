import { fetchPostById } from "@/app/lib/data"
import { capitalizeTitle } from "@/app/lib/utils"
import Link from "next/link"

const Page = async ({ params }: { params: {id: string}}) => {
  const post = await fetchPostById(params.id)
  const postTitle = capitalizeTitle(post.title)
  
  return (
    <article>
      <h3>{postTitle}</h3>
      <p>{post.body}</p>
      <Link className="link-btn" href="/">Back</Link>
    </article>
  )
}

export default Page