import React from 'react'
import Navbar from '../components/navbar'
import Footer from '../components/rodape/footer_component'

const Layout = ({children}) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
    
  )
}

export default Layout