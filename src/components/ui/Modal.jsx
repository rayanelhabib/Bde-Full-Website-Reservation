import { useEffect } from "react";

const Modal = ({ open, onClose, children }) => {
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
  }, [open]);

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/50 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL CONTENT */}
      <div className="relative z-10 max-h-[90vh] overflow-auto rounded-2xl bg-[#F5F7FA] p-8 shadow-2xl animate-fadeIn">
        {children}

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-gray-900"
          aria-label="Fermer"
        >
          ✕
        </button>
      </div>
    </div>
  );
};

export default Modal;
