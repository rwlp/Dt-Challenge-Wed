import { useEffect, useState } from "react";

export default function useDebouncer(value: string): string {
  const [debouncedValue, setDebouncedValue] = useState(value);

  useEffect(() => {
    const debouncer = setTimeout(() => {
      setDebouncedValue(value);
    }, 300);

    return () => clearTimeout(debouncer);
  }, [value]);

  return debouncedValue;
}