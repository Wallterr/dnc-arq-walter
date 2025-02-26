import  { useContext } from 'react'

import Header from "../components/Header/Header"
import Banner from "../components/Banner/Banner"
import ProjectList from "../components/ProjectList/ProjectList"
import Footer from "./../components/Footer/Footer"

// CONTEXT
import { AppContext } from '../contexts/AppContext'

function Projects() {
  const appContext = useContext(AppContext)
  return (
    <>
        <Header />
        <Banner title={appContext.languages[appContext.language].menu.projects} image="Projects.jpg"/>
        <div className="container">
          
          <ProjectList />
        </div>
        <Footer />
    </>
  )
}

export default Projects
