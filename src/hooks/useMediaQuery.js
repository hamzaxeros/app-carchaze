/**
 * Use MediaQuery Hook
 * @module 🔗:hooks/useMediaQuery
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description MediaQuery Modular, To use media query in js using hooks without css
 * 
 */

import { useState, useEffect } from "react"
import useEventListener from "./useEventListener"

/**
 * To use media query in js using hooks without css
 * 
 * @function
 * @param {string} mediaQuery 
 * @returns {boolean}
 * 
 * @example
 * import useMediaQuery from "./useMediaQuery"
 * 
 * export default function MediaQueryComponent() {
 *   const isLarge = useMediaQuery("(min-width: 200px)")
 * 
 *   return <div>Large: {isLarge.toString()}</div>
 * }
 */
export default function useMediaQuery(mediaQuery) {
  const [isMatch, setIsMatch] = useState(false)
  /** @type {any} */
  const [mediaQueryList, setMediaQueryList] = useState(null)

  useEffect(() => {
    const list = window.matchMedia(mediaQuery)
    setMediaQueryList(list)
    setIsMatch(list.matches)
  }, [mediaQuery])

  useEventListener("change", e => setIsMatch(e.matches), mediaQueryList)

  return isMatch
}
