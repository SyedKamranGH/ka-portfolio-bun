import { useState, useEffect } from "react";

interface ScrollPosition {
  x: number;
  y: number;
}

interface UseScrollReturn {
  scrollPosition: ScrollPosition;
  isScrollingDown: boolean;
  isAtTop: boolean;
  isAtBottom: boolean;
  scrollTo: (sectionId: string, behavior?: ScrollBehavior) => void;
}

export const useScroll = (): UseScrollReturn => {
  const [scrollPosition, setScrollPosition] = useState<ScrollPosition>({
    x: 0,
    y: 0,
  });
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [prevScrollY, setPrevScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.pageYOffset;
      const currentScrollX = window.pageXOffset;

      setScrollPosition({ x: currentScrollX, y: currentScrollY });
      setIsScrollingDown(currentScrollY > prevScrollY);
      setPrevScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [prevScrollY]);

  const isAtTop = scrollPosition.y === 0;
  const isAtBottom =
    scrollPosition.y + window.innerHeight >=
    document.documentElement.scrollHeight;

  const scrollTo = (sectionId: string, behavior: ScrollBehavior = "smooth") => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior });
    }
  };
  return {
    scrollPosition,
    isScrollingDown,
    isAtTop,
    isAtBottom,
    scrollTo,
  };
};
