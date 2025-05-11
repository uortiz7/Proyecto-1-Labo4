import { useState } from "react";

export const useModal = () => {
  const [enabled, setEnabled] = useState(false);

  const toggleModal = () => setEnabled(!enabled);

  return { enabled, toggleModal };
};
