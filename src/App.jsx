import './App.css'
import Artists from './components/Artists'
import Building from './components/Building'
import CallToAction from './components/CallToAction'
import Companies from './components/Companies'
import Navbar from './components/Navbar'
import Recommended from './components/Recommended'
import Tickets from './components/Tickets'
import Welcome from './components/Welcome'
import Footer from './components/Footer'
import Modal from './components/Modal'
import { useState } from 'react'

function App() {
  const [openModal, setOpenModal] = useState(false)

  function onOpen() {
    setOpenModal(true)
  }

  function onClose() {
    setOpenModal(false)
  }

  return (
    <>
      <Navbar onOpen={onOpen}/>
      <Welcome />
      <Modal openModal={openModal} onClose={onClose} />
      {/* <Companies />
      <Tickets />
      <Artists />
      <Recommended />
      <Building />
      <CallToAction />
      <Footer /> */}
    </>
    
  )
}

export default App
