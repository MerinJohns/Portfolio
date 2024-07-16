import React from 'react'

import Navbar from './Navbar'

import Hero from './Hero'

import Aboutme from './Aboutme'

import Skills from './Skills'

import Qualifications from './Qualifications'

import Projects from './Projects'

import Service from './Service'

import Footer from './Footer'





function App() {

  const user={"name":"Alice Jhon","degree":"BTech","phone":"7567892309","dob":"05-08-1999","experience":"5 years","email":"info@gmail.com"}

  const skillsets=[
    {"name":"Python","percentage":"90"},
    {"name":"JavaScript","percentage":"50"},
    {"name":"C++","percentage":"40"},
    {"name":"CSS","percentage":"50"}
  ]

  return (
    <div>
      <Navbar></Navbar>
      <Hero></Hero>
      <Aboutme user={user}></Aboutme>
      <Skills skillsets={skillsets}></Skills>
      <Qualifications></Qualifications>
      <Service></Service>
      <Projects></Projects>
      <Footer></Footer>
    </div>
  )
}

export default App
