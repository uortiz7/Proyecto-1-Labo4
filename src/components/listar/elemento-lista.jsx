import { useLista } from "../lista";
import Modal from "../modal/modal";
import { useModal } from "../modal/use-modal";
import "@justinribeiro/lite-youtube";

export default function ElementoLista({ video }) {
  const { lista, setLista } = useLista();

  const handleFavorito = () => {
    setLista((prevLista) =>
      prevLista.map((item) =>
        item.id === video.id ? { ...item, favorito: !item.favorito } : item
      )
    );
  };

  const { enabled, toggleModal } = useModal();

  const reproducirVideo = () => {
    toggleModal();

    setLista((prevLista) =>
      prevLista.map((item) =>
        item.id === video.id ? { ...item, contador: item.contador + 1 } : item
      )
    );
  };

  const borrarVideo = () => {
    const nuevaLista = lista.filter((item) => item.id !== video.id);
    setLista(nuevaLista);
  };

  return (
    <li className="flex flex-wrap gap-2 items-center justify-between p-1">
      <div className="flex flex-col">
        <span className="font-bold text-lg">{video.nombre}</span>
        <span className="text-cyan-200 font-medium text-xs">
          Reproducciones: {video.contador}
        </span>
      </div>
      <div className="flex gap-2">
        <button onClick={borrarVideo}>🗑️</button>
        <button onClick={reproducirVideo}>Play</button>
        <button onClick={handleFavorito}>{video.favorito ? "❤️" : "🤍"}</button>
        <Modal enabled={enabled} onClose={toggleModal}>
          <lite-youtube videoid={video.id}></lite-youtube>
        </Modal>
      </div>
    </li>
  );
}
