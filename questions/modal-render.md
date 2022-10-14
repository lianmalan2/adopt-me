Hi.

Firstly, this is a great course!!

In **Modal.js**, could we not render the **children** passed in through **props** directly in the **#modal** div?
This could take away the need to clean up the created **div**.

Are there any side effects to this that I can't think of?

Thanks.

Example of what the **Modal.js** function would look like:

const Modal = ({ children }) => {
  const elementRef = useRef(document.getElementById('modal'));

  return createPortal(children, elementRef.current);
};