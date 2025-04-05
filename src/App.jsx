import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { RecoilRoot,useRecoilValue } from 'recoil'
import { networkAtom } from './assets/atoms'

function App() {
  return<RecoilRoot>
    <MainApp />
  </RecoilRoot>
}
function MainApp() {
  const networkNotificationCount = useRecoilValue(networkAtom)


  return (
    <>
      <button>Home</button>

      <button> My Network({networkNotificationCount>=100 ? "99+": networkNotificationCount})</button>
      <button> Messaging</button>
      <button>Notification</button>
      
      <button>Me</button>
    </>
  )

}
export default App
