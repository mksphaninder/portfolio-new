import React from "react"
import "bootstrap/dist/css/bootstrap.min.css"
import Navigation from "../components/Navigation"
import Intro from "../components/Intro"
import About from "../components/About"
import "../page-styles/index.css"
import Experience from "../components/Experience"
import { ProjectProvider } from "../context/projectContext"
import Contact from "../components/Contact"
import Footer from "../components/Footer"
import "../styles/global.css"
import "../styles/fonts.css"
import Projects from "../components/Projects"
import Description from "../partial-components/Description"
import Skills from "../components/Skills"

export default function Home() {
  const data = require("../data/data.json")
  return (
    <>
      <Navigation />
      <Intro name={data.name} roles={data.roles} />
      <About description={data.about} />
      {/* <Skills skills={data.skills} /> */}
      <ProjectProvider>
        <Experience projects={data.projects} />
      </ProjectProvider>
      <Projects />
      <Footer />
    </>
  )
}
