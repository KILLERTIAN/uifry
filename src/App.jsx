import './App.css'
import Customize from './components/Customize'
import Features from './components/Features'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import Testimonial from './components/Testimonial'
import Why from './components/Why'

function App() {
  return (
     <div className=" flex flex-col items-center backdrop-blur-md ">
     <Navbar/>
     <Hero/>
     <Features/>
     <Why/>
     <Customize/>
     <Testimonial/>
     </div>
  )
}

export default App
