import { useState, useEffect } from "react";
/**
 * This hook is used to check the current width of the viewport.
 * 
 * @returns {int} Width: width of the current viewport
 */
export const useViewport = () => {
    const [width, setWidth] = useState(window.innerWidth);
  
    useEffect(() => {
      const handleWindowResize = () => setWidth(window.innerWidth);
      window.addEventListener("resize", handleWindowResize);
      return () => window.removeEventListener("resize", handleWindowResize);
    }, []);
  
    // Return the width so we can use it in our components
    return { width };
  }