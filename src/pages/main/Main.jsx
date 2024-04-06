import React from 'react'
import Header from '../../components/header/header'
import Services from '../../components/services/Services'
import About from '../../components/about/About'
import Testymonials from '../../components/Testymonials/Testymonials'
import Contac from '../../components/contact/Contac'
import Loader from '../../components/Loader'


const main = () => {
  return (
    <div>
      <Header/>
      <Services/>
      <About/>
      <Testymonials/>
      <Contac/>
      {/* <Loader/> */}
    </div>
  )
}

export default main
