import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navigation from './components/Navigation/navigation'
import Contactheader from './components/contactheader/contactheader'
import Contactform from './components/contactform/contactform'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
     <Navigation />
     <Contactheader />
     <Contactform />
    </>
  )
}

export default App
