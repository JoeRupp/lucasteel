import React, { useEffect } from "react";

export const useClickOutside = (ref: {current: any}, handler: React.Dispatch<React.SetStateAction<boolean>>) => {
  useEffect(() => {
    const listener = (event: any) => {
      if (!ref.current || ref.current.contains(event.target)) {
        return;
      }
      handler(event);
    };
    document.addEventListener("mousedown", listener);
    return () => {
      document.removeEventListener("mousedown", listener);
    };
  }, [ref, handler]);
};
