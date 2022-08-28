/**
 * Use OnScreen Hook
 * @module 🔗:hooks/useOnScreen
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description OnScreen Modular, To return you whether your element is on Screen or Not
 * 
 */

import { useEffect, useState } from "react"

/**
 * To return you whether your element is on Screen or Not
 * 
 * @function
 * @param {any} ref 
 * @param {string} [rootMargin] 
 * @returns {boolean}
 * 
 * @example
 * import { useRef } from "react"
 * import useOnScreen from "./useOnScreen"
 * 
 * export default function OnScreenComponentComponent() {
 *   const headerTwoRef = useRef()
 *   const visible = useOnScreen(headerTwoRef, "-100px")
 * 
 *   return (
 *     <div>
 *       <h1>Header 1</h1>
 *       <h1 ref={headerTwoRef}>Header 2 {visible && "(Visible)"}</h1>
 *     </div>
 *   )
 * }
 */
export default function useOnScreen(ref, rootMargin = "0px") {
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    if (ref.current == null) return
    const observer = new IntersectionObserver(
      ([entry]) => setIsVisible(entry.isIntersecting),
      { rootMargin }
    )
    observer.observe(ref.current)
    return () => {
      if (ref.current == null) return
      observer.unobserve(ref.current)
    }
  }, [ref.current, rootMargin])

  return isVisible
}
