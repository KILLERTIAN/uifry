import './App.css'
import Hero from './components/Hero'
import Navbar from './components/Navbar'

function App() {
  return (
     <div className="m-[30px] flex flex-col items-center ">
     <Navbar/>
     <Hero/>
     </div>
  )
}

export default App
