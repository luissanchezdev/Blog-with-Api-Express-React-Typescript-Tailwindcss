import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Page404 from './pages/Page404'
import Layout from './components/Layout'
import Blog from './pages/Blog'
import SingleBlog from './pages/SingleBlog'

function App() {

  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Layout /> }>
          <Route index element={ <Home />}  />
          <Route path='blog' element={ <Blog /> } />
          <Route path='blog/:id' element={ <SingleBlog /> } />
          <Route path='*' element={ <Page404 /> } />
        </Route>
      </Routes>
    </Router>
  )
}

export default App
