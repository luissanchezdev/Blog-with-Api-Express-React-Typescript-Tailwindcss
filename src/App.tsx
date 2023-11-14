import './App.css'

function App() {

  return (
    <div className='App font-spaceGrotesk'>
      <header>
        <a href='#'>
          <img src='' alt='logo' />
        </a>
        <nav className='menu hidden lg:block'>
          <ul>
            <li className="menu-items">
              <a href="" className="menu-items-links">Home</a>
            </li>
            <li className="menu-items">
              <a href="" className="menu-items-links">Blog</a>
            </li>
            <li className="menu-items">
              <a href="" className="menu-items-links">Contact</a>
            </li>
          </ul>
        </nav>
        <nav className='menu-mobile block lg:hidden'>
          <a href='#'>Menu</a>
          <ul className='hidden'>
            <li className="menu-items">
              <a href="" className="menu-items-links">Home</a>
            </li>
            <li className="menu-items">
              <a href="" className="menu-items-links">Blog</a>
            </li>
            <li className="menu-items">
              <a href="" className="menu-items-links">Contact</a>
            </li>
          </ul>
        </nav>
      </header>
      <main>
        <div className='container'>
          <section className="hero">
            <img src="" alt="" className="hero-image" />
            <h2 className='hero-title'></h2>
            <h3 className='hero-description'></h3>
            <a href='#' className='hero-button'>Enter</a>
          </section>
          <section className="latest-posts">
            <h2>The Latest</h2>
            <div className="grid-posts">
              <article className="grid-post">
                <img src="" alt="post image" className="grid-post-image" />
                <h3 className="grid-post-title">Title Post</h3>
                <p className="grid-post-description">lorem ipsum</p>
                <a href='#'>More</a>

              </article>
              <article className="post">
                <img src="" alt="post image" className="grid-post-image" />
                <h3 className="grid-post-title">Title Post</h3>
                <p className="grid-post-description">lorem ipsum</p>
                <a href='#'>More</a>

              </article>
              <article className="post">
                <img src="" alt="post image" className="grid-post-image" />
                <h3 className="grid-post-title">Title Post</h3>
                <p className="grid-post-description">lorem ipsum</p>
                <a href='#'>More</a>

              </article>
            </div>
          </section>
        </div>
      </main>
      <footer className="footer">
        <p>Todos los derechos reservados by Luis Sanchez</p>
        <small>{ new Date().getFullYear() }</small>
      </footer>
    </div>
  )
}

export default App
