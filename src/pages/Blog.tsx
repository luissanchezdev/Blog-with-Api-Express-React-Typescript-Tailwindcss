import { Link } from "react-router-dom"
import { getBlogs } from "../services/data"

const Blog = () => {
  const blogs = getBlogs()

  return (
    <>
      <h1>Ultimas noticias de Tech</h1>
      <section>
        { blogs.map(blog => (
          <article key={ crypto.randomUUID() }>
            <img src={ blog.image } alt={ 'imagen de' + blog.title}  className="image" />
            <div>
              <p>{ blog.author }</p>
              <p>{ blog.date }</p>
            </div>
            <h3 className="title">{ blog.title }</h3>
            <p className="content">{ blog.content.substring(1,50) }</p>
            <Link to={ `/blog/${ blog.id }`}> Leer Más</Link>
          </article>
        ))}
      </section>
    </>
  )
}

export default Blog