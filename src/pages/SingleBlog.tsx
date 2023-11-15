import { Link, Navigate, useParams, useNavigate } from "react-router-dom"
import { getBlog } from "../services/data"
import { Blog } from "../services/data"


const SingleBlog = () => {
  const { id } = useParams()
  const numberId = Number(id)
  const navigate = useNavigate()

  const blogTemp = getBlog(numberId)

  if (blogTemp === undefined) {
    return <Navigate to='/*' />
  } 

  const blog: Blog = blogTemp

  const handleButtonBack = () => navigate(-1)

  return (
    <>
      <div className="relative">
        <img src={ blog.image } alt={ blog.title } className="h-[300px] lg:h-full w-full object-fit object-cover brightness-75 mb-5"/>
        <a onClick={ handleButtonBack } className="text-4xl absolute left-4 top-4 text-white z-50 shadow-sm constrast-100 cursor-pointer">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10 z-50">
            <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18" />
          </svg>
        </a>
      </div>
      <h2 className="text-4xl font-bold text-left my-8">{ blog.title }</h2>
      <div className="flex flex-row justify-between items center">
        <p>Escrito por: <span className="font-bold">{ blog.author }</span></p>
        <p>{ blog.date }</p>
      </div>
      <hr className="bg-black my-5" />
      <p className="text-md lg:text-xl text-left">{ blog.content }</p>
      <Link to={ `/blog/category/${ blog.category }` } className="text-gray-600 text-left block py-5 capitalize">#{ blog.category }</Link>
    </>
  )
}

export default SingleBlog
