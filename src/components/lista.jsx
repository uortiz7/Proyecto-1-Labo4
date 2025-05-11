import { createContext, useContext, useEffect, useState } from "react";

const ListaContext = createContext();

// eslint-disable-next-line react-refresh/only-export-components
export const useLista = () => useContext(ListaContext);

export const ListaProvider = ({ children }) => {
  const [lista, setLista] = useState(() => {
    const listaGuardada = localStorage.getItem("miLista");
    return listaGuardada ? JSON.parse(listaGuardada) : [];
  });

  useEffect(() => {
    localStorage.setItem("miLista", JSON.stringify(lista));
  }, [lista]);

  return (
    <ListaContext.Provider value={{ lista, setLista }}>
      {children}
    </ListaContext.Provider>
  );
};
