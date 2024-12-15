import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Start from './components/start'
import Game from './components/Game'

function App() {
  const [start, setStart] = useState(true)

  return (
    <>
    
     <div className='app'>
     {start?(
     <Start start={start} setStart={setStart}/>
     ):(<Game/>)}
     </div>
   </>
  )
}

export default App
