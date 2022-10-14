import { useRef } from 'react';
import { createPortal } from 'react-dom';

const Modal = ({ children }) => {
  const elementRef = useRef(document.getElementById('modal'));

  return createPortal(children, elementRef.current);
};

export default Modal;
