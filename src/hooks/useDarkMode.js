/**
 * Use DarkMode Hook
 * @module 🔗:hooks/useDarkMode
 *
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description DarkMode Modular, It will capture whether you are in dark mode or light
 *
 */

import { useEffect } from "react"
import useMediaQuery from "./useMediaQuery"
import { useLocalStorage } from "./useStorage"

/**
 * It will capture whether you are in dark mode or light
 * 
 * @function
 * @returns {Array<any>}
 * 
 * @example
 * import useDarkMode from "./useDarkMode"
 * 
 * export default function DarkModeComponent() {
 *   const [darkMode, setDarkMode] = useDarkMode()
 * 
 *   return (
 *     <button
 *       onClick={() => setDarkMode(prevDarkMode => !prevDarkMode)}
 *       style={{
 *         border: `1px solid ${darkMode ? "white" : "black"}`,
 *         background: "none",
 *         color: darkMode ? "white" : "black",
 *       }}
 *     >
 *       Toggle Dark Mode
 *     </button>
 *   )
 * }
 */
export default function useDarkMode() {
  const [darkMode, setDarkMode] = useLocalStorage("useDarkMode", null)
  const prefersDarkMode = useMediaQuery("(prefers-color-scheme: dark)")
  const enabled = darkMode ?? prefersDarkMode

  useEffect(() => {
    document.body.classList.toggle("dark-mode", enabled)
  }, [enabled])

  return [enabled, setDarkMode]
}
