import { createPortal } from "react-dom";

export default function Modal({ enabled, onClose, children }) {
  if (!enabled) return null;

  return createPortal(
    <div
      className="
        h-screen w-full 
        absolute top-0 
      bg-black/50 backdrop-blur-sm
        flex justify-center items-center
      "
    >
      <main className="w-full max-w-175 flex flex-col items-start gap-2">
        <button onClick={onClose} className="top-0 -left-2">
          Cerrar
        </button>
        {children}
      </main>
    </div>,
    document.body
  );
}
