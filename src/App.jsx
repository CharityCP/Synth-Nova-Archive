import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'

function App() {
  function checkSystemStatus () {
    alert("Unity Nexus Archive: System Online")
  }
   function activateChronolink () {
    alert("Chronolink Activated")
   }
  return (
    <main> 
      <h1> Synth Nova Archive</h1>
      <button  onClick = {activateChronolink} > Archive Entry
      </button>
      <button onClick={checkSystemStatus}>
        Check System Status
      </button>
    </main>
  )
}

export default App