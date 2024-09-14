import { useEffect, useState } from "react";

export default function useDebounce<T>(value: T, delay: number = 250): T {
  const [debouncedValue, setDebouncedValue] = useState<T>(value);

  useEffect(() => {
    const handeler = setTimeout(() => {
      setDebouncedValue(value);
    }, delay);

    return () => clearTimeout(handeler);
  }, [delay, value]);

  return debouncedValue;
}
