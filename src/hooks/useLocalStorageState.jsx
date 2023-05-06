import { useEffect, useState } from "react";
const isClientSide = () => typeof window !== "undefined";
const useLocalStorageState = (key, defaultValue) => {
  const [state, setState] = useState(() => {
    if (!isClientSide()) return defaultValue;
    const storedValue = localStorage.getItem(key);
    return storedValue ? JSON.parse(storedValue) : defaultValue || [];
  });
  useEffect(() => {
    if (!isClientSide()) return;
    localStorage.setItem(key, JSON.stringify(state));
  }, [key, state]);
  return [state, setState];
};

export default useLocalStorageState;
