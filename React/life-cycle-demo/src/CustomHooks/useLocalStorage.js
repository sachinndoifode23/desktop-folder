import { useEffect, useState } from "react";

export default function useLocalStorage(key, initialValue) {
  const [value, setValue] = useState(() => {
    const jsonValue = localStorage.getItem(key);
    if (jsonValue != null) return JSON.parse(jsonValue);
    return initialValue;
  });
  useEffect(() => {
    return () => {
      localStorage.removeItem(key);
      setValue(initialValue);
    };
  }, [initialValue, key]);
  useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value));
    return;
  }, [initialValue, key, value]);

  return [value, setValue];
}
