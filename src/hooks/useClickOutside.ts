import { RefObject, useEffect } from "react"

export function useClickOutside<T extends HTMLElement>(
  ref: RefObject<T>, 
  handler: () => void, 
  attached: boolean = true
) {
  useEffect(() => {
    if (!attached) return;

    const handleClick = (e: MouseEvent) => {
      if (!ref.current) return;
      if (!ref.current.contains(e.target as Node)) {
        handler();
      }
    }

    document.addEventListener('click', handleClick);

    return () => {
      document.removeEventListener('click', handleClick);
    }
  }, [ref, handler, attached])
}