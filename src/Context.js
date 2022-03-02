import React, { createContext, useState } from 'react'

const Context = createContext();

const State = ({children}) =>{
  const [isSlidebar , setSlidebar] = useState(false);
  const [isModal,setModal] = useState(false);
  return <Context.Provider value={{isSlidebar,isModal,setSlidebar,setModal}}>
    {children}
  </Context.Provider>
}

export {Context,State};