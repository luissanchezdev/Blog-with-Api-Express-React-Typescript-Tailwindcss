import { Header, Footer } from './'
import { Outlet } from 'react-router-dom'

const Layout = () => {
  return (
    <div className='App font-spaceGrotesk'>
      <Header />
      <main className='container'>
        <Outlet />
      </main>
      <Footer />
    </div>
    
  )
}

export default Layout