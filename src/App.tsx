import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <h1>¡Universidad Católica de Pereira !</h1>
      <h1>Especialización en Desarrollo de Software</h1>
      <p>Listado de integrantes - Proceso de Desarrollo de Software I</p>
      <p>profe: Andrés Mauricio Martinez Hincapie</p>
    </div>
  )
}

export default App
