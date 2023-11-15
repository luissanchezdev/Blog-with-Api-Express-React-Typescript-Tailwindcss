import articleImage from '../assets/img/copilot-workspace.png'

const LatestPosts = () => {
  return (
    <section className="latest-posts">
      <h2 className="latest-posts-title">Últimas publicaciones</h2>
      <div className="latest-posts-grid">
        <article className="grid-post">
          <img src={ articleImage } alt="post image" className="grid-post-image" />
          <h3 className="grid-post-title">Lanzamiento de Github Copilot</h3>
          <p className="grid-post-description">Esto apenas comienza</p>
          <a href='#' className=' grid-post-link'>Artículo Completo</a>
        </article>
        <article className="grid-post">
          <img src={ articleImage } alt="post image" className="grid-post-image" />
          <h3 className="grid-post-title">Lanzamiento de Github Copilot</h3>
          <p className="grid-post-description">Esto apenas comienza</p>
          <a href='#' className=' grid-post-link'>Artículo Completo</a>
        </article>
        <article className="grid-post">
          <img src={ articleImage } alt="post image" className="grid-post-image" />
          <h3 className="grid-post-title">Lanzamiento de Github Copilot</h3>
          <p className="grid-post-description">Esto apenas comienza</p>
          <a href='#' className=' grid-post-link'>Artículo Completo</a>
        </article>
      </div>
    </section>
  )
}

export default LatestPosts