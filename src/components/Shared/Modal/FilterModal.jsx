import React, { useEffect, useRef } from "react";
import ReactDOM from "react-dom";
import { AiOutlineClose } from "react-icons/ai";

const FilterModal = ({ isOpen, onClose, children }) => {
  const modalRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return ReactDOM.createPortal(
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div
        ref={modalRef}
        className="modal bg-white p-4 rounded shadow-lg min-w-[30rem] min-h-[15rem]"
      >
        <button
          className="modal-close absolute top-0 right-0 m-4 text-md font-bold text-black"
          onClick={onClose}
        >
          <AiOutlineClose />
        </button>
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};

export default FilterModal;
