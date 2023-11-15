import './App.css'
import { Header, Hero, LatestPosts, Footer } from './components'

function App() {

  return (
      <div className='App font-spaceGrotesk'>
        <Header />
        <main className='container'>
          <Hero />
          <LatestPosts />
        </main>
        <Footer />
      </div>
  )
}

export default App
