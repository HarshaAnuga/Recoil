import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const Networknotificationcount=useRecoilValue(networkAtom)


  return (
    <>
      <button>Home</button>

      <button> My Network</button>
      <button> Messaging</button>
      <button>Notification</button>
      
      <button>Me</button>
    </>
  )
}

export default App
