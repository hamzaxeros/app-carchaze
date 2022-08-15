/**
 * Use WindowSize Hook
 * @module 🔗:hooks/useWindowSize
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description WindowSize Modular, Give you the window size
 * 
 */

import { useState } from "react"
import useEventListener from "./useEventListener"

/**
 * It gives the window size
 * 
 * @function
 * @returns {{width: number, height: number}}
 * 
 * @example
 * import useWindowSize from "./useWindowSize"
 *
 * export default function WindowSizeComponent() {
 *   const { width, height } = useWindowSize()
 * 
 *   return (
 *     <div>
 *       {width} x {height}
 *     </div>
 *   )
 * }
 */
export default function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: window.innerWidth,
    height: window.innerHeight,
  })

  useEventListener("resize", () => {
    setWindowSize({ width: window.innerWidth, height: window.innerHeight })
  })

  return windowSize
}
