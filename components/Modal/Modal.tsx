import React, { ReactNode, useEffect, useRef } from 'react'
import {createPortal} from 'react-dom'
type modal = {
    isOpen: boolean,
    children: ReactNode
}
const Modal:React.FC<modal> = (props) => {
    const {isOpen, children} = props
    const modalRef = useRef<HTMLDialogElement>(null)
    useEffect(() => {
        if(isOpen){
            modalRef.current?.showModal()
        }
        else{
            modalRef.current?.close()
        }
    }, [isOpen])
  return createPortal(
    <dialog ref={modalRef} className='modal' open>
        {children}
    </dialog>
  , document.querySelector("#root")!)
}

export default Modal