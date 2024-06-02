import './App.css'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Why from './components/Why'

function App() {
  return (
     <div className=" flex flex-col items-center backdrop-blur-md ">
     <Navbar/>
     <Hero/>
     <Features/>
     <Why/>
     </div>
  )
}

export default App
