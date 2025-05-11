import { createPortal } from "react-dom";

export default function Modal({ enabled, onClose, children }) {
  if (!enabled) return null;

  return createPortal(
    <div
      className=" 
        h-screen w-full 
        absolute top-0 
      bg-black/50
        flex justify-center items-center
      "
    >
      <main className="w-full max-w-200">
        <button onClick={onClose}>Cerrar</button>
        {children}
      </main>
    </div>,
    document.body
  );
}
