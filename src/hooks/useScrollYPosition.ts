import { useState, useEffect, useCallback } from "react";

export const useScrollYPosition = () => {
  const [scrollY, setScrollY] = useState(0);

  const callbackFn = useCallback(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    callbackFn();
  }, [callbackFn]);

  return { scrollY };
};
