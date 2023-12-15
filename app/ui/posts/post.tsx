import Image from "next/image";
import Link from "next/link";
import { ArrowRightIcon } from "@heroicons/react/24/outline";
import styles from "./post.module.scss";
import { capitalizeTitle } from "@/app/lib/utils";

const Post = ({ title, body, id }: { title: string; body: string, id: number }) => {
  const postTitle = capitalizeTitle(title)
  
  return (
    <div className={styles.post}>
      <div>
        <h3>{postTitle}</h3>
        <p>{body}</p>
        <Link className="link-btn" href={`/${id}`}>
          Open Post
          <ArrowRightIcon style={{ width: "24px" }} />
        </Link>
      </div>
        <Image
          src="/placeholder-photo.jpg"
          width={300}
          height={210}
          alt="post-photo"
        />
    </div>
  );
};

export default Post;
