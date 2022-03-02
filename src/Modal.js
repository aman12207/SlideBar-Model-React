import React,{useContext} from 'react'
import { FaTimes } from 'react-icons/fa'
import { Context } from './Context'

const Modal = () => {
  const state = useContext(Context);
  return (
    <div className={`modal-overlay ${state.isModal && 'show-modal'}`}>
      <div class="modal-container">
        <h3>modal content</h3>
        <button onClick={()=>state.setModal(false)} class="close-modal-btn">
        <FaTimes/>
        </button>
      </div>
    </div>
  )
}

export default Modal
