export const fetchPosts = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const posts = response.json()
    return posts
  } catch(err) {
    console.log(err)
    throw new Error('Failed to fetch posts')
  }
}

export const fetchPostById = async (id: string) => {
  const response = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`)
  const post = response.json()
  return post;
}