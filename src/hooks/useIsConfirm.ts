import { useState } from "react";

const useIsConfirm = () => {
  const [isConfirmed, setIsConfirmed] = useState(false);

  const toggleConfirmed = () => {
    setIsConfirmed((prev) => !prev);
  };

  return { isConfirmed, toggleConfirmed };
};

export default useIsConfirm;