import { useEffect, useState } from "react";

const useDebouced = (value: string, timeDelay: number = 500) => {
  const [valueDebouced, setValueDebouced] = useState(value);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setValueDebouced(value);
    }, timeDelay);

    return () => {
      clearTimeout(timerId);
    };
  }, [value, timeDelay]);
  return valueDebouced;
};

export default useDebouced;
