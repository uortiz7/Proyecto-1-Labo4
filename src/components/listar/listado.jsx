import { useState } from "react";
import { useLista } from "../lista";
import ElementoLista from "./elemento-lista";

export default function Listado() {
  const { lista } = useLista();
  const [busqueda, setBusqueda] = useState("");
  console.log(busqueda);

  return (
    <section
      className="
        h-[70vh] w-[35vw]
      bg-black/50 border-t border-b
      flex items-center justify-center
      "
      id="listado"
    >
      <aside className="max-w-100 w-full">
        <h2 className="text-lg">Listado de Videos</h2>
        <div>
          {lista.length > 1 && (
            <input
              type="text"
              value={busqueda}
              onChange={(e) => setBusqueda(e.value)}
              className="mb-4"
              placeholder="Buscar Canción..."
            />
          )}
          {lista.length > 0 && (
            <ul className="max-h-55 overflow-y-auto border border-blue-300 p-2 rounded">
              {lista.map((video) => {
                return <ElementoLista video={video} />;
              })}
            </ul>
          )}
        </div>
      </aside>
    </section>
  );
}
