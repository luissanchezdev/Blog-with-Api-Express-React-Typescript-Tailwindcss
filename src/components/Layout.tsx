import React from 'react'
import { Header, Footer } from './'

interface Props {
  children: React.ReactNode
}

const Layout = ( { children } : Props ) => {

  return (
    <>
      <Header />
        { children }
      <Footer />
    </>
    
  )
}

export default Layout