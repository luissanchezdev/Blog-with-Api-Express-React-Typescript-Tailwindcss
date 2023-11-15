import { Link, useParams } from "react-router-dom"
import { getBlogs } from "../services/data"

const Category = () => {
  const { nameCategory } = useParams()

  const blogs = getBlogs()
  const blogsFiltered = blogs.filter( blog => blog.category === nameCategory)

  return (
    <div>
      <h1 className="title-page text-4xl font-bold text-left py-5">Ultimas noticias de Tech</h1>
      <hr className="mb-10 bg-black"/>
      <section className="grid md:grid-cols-3">
        { blogsFiltered.map(blog => (
          <article key={ crypto.randomUUID() } className="py-8 px-2">
            <img src={ blog.image } alt={ 'imagen de' + blog.title}  className="image" />
            <hr className="my-10 mb-4 bg-black"/>
            <Link to={ `/blog/${ blog.id }` } className="py-2">
              <h3 className="title text-xl font-bold text-left">{ blog.title }</h3>
            </Link>
            <hr className="mt-4 mb-5 bg-black"/>
            <p className="content text-left pb-2 text-md">{ blog.content.substring(0,150) }</p>
            <a className="category text-gray-600 text-sm md:text-md block text-left">{ `# ${ blog.category }` }</a>
          </article>
        ))}
      </section>
    </div>
  )
}

export default Category