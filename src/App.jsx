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

function App() {

  return (
    <>
      <Navbar />
      <Welcome />
      <Companies />
      <Tickets />
      <Artists />
      <Recommended />
      <Building />
      <CallToAction />
      <Footer />
    </>
    
  )
}

export default App
