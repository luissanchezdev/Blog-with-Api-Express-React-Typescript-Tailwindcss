import { getBlogs } from '../services/data'
import { Link } from 'react-router-dom'

const LatestPosts = () => {
  const blogs = getBlogs()

  return (
    <section className="latest-posts">
      <h2 className="latest-posts-title">Últimas publicaciones</h2>
      <div className="latest-posts-grid">
        { blogs.map( (blog, index) => (
          <>
            { index <= 2 && (
              <article key={ crypto.randomUUID() } className="grid-post">
                <img src={ blog.image } alt="post image" className="grid-post-image" />
                <h3 className="grid-post-title">{ blog.title }</h3>
                <p className="grid-post-description">{ blog.content.substring(0,50) }</p>
                <Link to={ `/blog/${ blog.id }` } className=' grid-post-link py-5'>Artículo Completo</Link>
              </article>
            )}
          </>
        ))}
      </div>
    </section>
  )
}

export default LatestPosts