import { Link, Navigate, useParams } from "react-router-dom"
import { getBlog } from "../services/data"
import { Blog } from "../services/data"

const SingleBlog = () => {
  const { id } = useParams()
  const numberId = Number(id)

  const blogTemp = getBlog(numberId)

  if (blogTemp === undefined) {
    return <Navigate to='/*' />
  } 

  const blog: Blog = blogTemp

  return (
    <>
      <div className=" bg-image-post-random">
        <a href="/" className="text-4xl">{ '<-' }</a>
      </div>
      <h2>{ blog.title }</h2>
      <div>
        <p>{ blog.author }</p>
        <p>{ blog.date }</p>
      </div>
      <p>{ blog.content }</p>
      <Link to='/'>{ blog.category }</Link>
    </>
  )
}

export default SingleBlog
