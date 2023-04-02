import { useState } from 'react'
import './App.css'
import Navbar from './components/Navbar/Navbar'
import Pricelist from './components/Pricelist/Pricelist'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navbar></Navbar>
      <Pricelist></Pricelist>



    </div>
  )
}

export default App
