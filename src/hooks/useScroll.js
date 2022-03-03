import { useCallback, useEffect, useRef, useState } from "react";

export const useScroll = ({ initPos = false, maxLimitInPos = 0 }) => {
  const prevScrollPos = useRef(0);
  const [isInPos, setIsInPos] = useState(initPos);

  const handleScroll = useCallback(() => {
    if (window.scrollY <= maxLimitInPos && prevScrollPos.current > maxLimitInPos) {
      prevScrollPos.current = 0;
      setIsInPos(false);
    }
    
    if (window.scrollY > maxLimitInPos && prevScrollPos.current <= maxLimitInPos) {
      prevScrollPos.current = 1;
      setIsInPos(true);
    }
  }, [setIsInPos, maxLimitInPos]);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  useEffect(handleScroll, [handleScroll]);

  return isInPos;
}