import { useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
import Button from "./Button";

const Modal = ({ children, ref, buttonCaption }) => {
  const dialog = useRef();

  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });

  return createPortal(
    <dialog
      ref={dialog}
      className="backdrop:bg-black/70 backdrop:backdrop-blur-sm p-0 rounded-2xl shadow-2xl w-[90%] max-w-md bg-white overflow-hidden animate-fade-in mx-auto my-auto"
    >
      <div className="p-6 space-y-4">
        {children}

        <form
          method="dialog"
          className="flex justify-end pt-4 border-t border-gray-200"
        >
          <Button className="px-5 py-2 rounded-lg bg-cyan-600 text-white font-semibold shadow-md hover:bg-cyan-700 hover:scale-105 transition-all duration-200">
            {buttonCaption}
          </Button>
        </form>
      </div>
    </dialog>,
    document.getElementById("modal-root"),
  );
};

export default Modal;
