import { useLista } from "./lista";

export default function Favoritos() {
  const { lista } = useLista();

  const favoritos = lista.filter((video) => video.favorito);

  return (
    <section id="favoritos" className="w-[65vw] h-full bg-black/80 flex flex-col items-center justify-center">
      <h2 className="text-2xl">Favoritos</h2>
      <div className="w-full mt-7 flex gap-6 overflow-x-auto pb-3">
        {favoritos.length > 0 ? (
          favoritos.map((video) => (
            <article
              key={video.id}
              className="flex flex-col justify-between rounded shadow overflow-hidden"
            >
              <img
                src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                alt={`Miniatura de ${video.nombre}`}
                className="rounded"
              />
              <div className="p-2 flex flex-col">
                <span className="text-xl font-bold">{video.nombre}</span>
                <span className="text-cyan-200 font-medium text-sm">
                  Reproducciones: {video.contador}
                </span>
              </div>
            </article>
          ))
        ) : (
          <p className="text-sm text-black/40">No hay favoritos aún.</p>
        )}
      </div>
    </section>
  );
}
