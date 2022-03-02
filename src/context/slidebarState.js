import React, { useState } from "react";
import SlideBarContext from "./slidebarContext";

const SlideBarState = ({children}) =>{
  const [isSlideBar,setSlidebar] = useState(false);
  const [isModal,setModal] = useState(false);
  const openSlidebar = () =>{
    setSlidebar(!isSlideBar);
  }
  const closeSlidebar = () =>{
    setSlidebar(false);
  }
  const openModal = () =>{
    setModal(true);
  }
  const closeModal = () =>{
    setModal(false);
  }
    return <SlideBarContext.Provider value={{isSlideBar,openSlidebar,closeSlidebar,isModal,openModal,closeModal}}>
    {children}
  </SlideBarContext.Provider>
}

export default SlideBarState;