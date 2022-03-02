import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { Context } from './Context'

const Home = () => {
  const state = useContext(Context);
  console.log(state);
  return <main>
    <button onClick={()=>state.setSlidebar(true)} className={`sidebar-toggle`}>
    <FaBars/>
    </button>
    <button onClick={
      ()=> {state.setSlidebar(false);
      state.setModal(true)}
    } className='btn'>show model</button>
  </main>
}

export default Home
