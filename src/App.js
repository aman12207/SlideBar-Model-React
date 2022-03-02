import React from 'react'
import Modal from './Modal'
import Sidebar from './Sidebar'
import Home from './Home'
import  {State} from './Context'

function App() {
  return (
    <main>
      <State>
        <Sidebar/>
        <Home/>
        <Modal/>
      </State>
    </main>
  )
}

export default App
