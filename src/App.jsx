import './App.css'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
     <div className=" flex flex-col items-center backdrop-blur-md">
     <Navbar/>
     <Hero/>
     <Features/>
     </div>
  )
}

export default App
