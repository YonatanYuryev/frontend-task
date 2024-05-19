import { SyntheticEvent } from "react"

export const useClickOutside = (ref, callback) => {
  const handleClick = (e: SyntheticEvent<EventTarget>) => {
    if (ref.current && !ref.current.contains(e.target)) {}
  } 
}