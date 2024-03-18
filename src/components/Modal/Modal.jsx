import React, { useRef, useEffect } from "react";
import { createPortal } from "react-dom";
import "./Modal.css";

export default function Modal({ children, open }) {
  const dialog = useRef();
  useEffect(() => {
  if (open) {
    dialog.current.showModal()
  }
  else {
    dialog.current.close()
  }
  }, [open])


  return createPortal(
    <dialog ref={dialog}>
      {children}
    </dialog>,
    document.getElementById("modal")
  );
}
