/**
 * Use Previous Hook
 * @module 🔗:hooks/usePrevious
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description Use Previous Modular use to access previous state, by passing state variable ref
 * 
 */

import { useRef } from "react"

/**
 * Use to access previous state, by passing state variable ref
 * 
 * @function
 * @param {any} value Pass the state
 * @returns {any} Return the state with previous
 * @example
 * import { useState } from "react"
 * import usePrevious from "./usePrevious"
 * 
 * export default function PreviousComponent() {
 *   const [count, setCount] = useState(0)
 *   const previousCount = usePrevious(count)
 * 
 *   return (
 *     <div>
 *       <div>
 *         {count} - {previousCount}
 *       </div>
 *       <button onClick={() => setCount(currentCount => currentCount + 1)}>
 *         Increment
 *       </button>
 *     </div>
 *   )
 * }
 * 
 */
export default function usePrevious(value) {
  const currentRef = useRef(value)
  const previousRef = useRef()

  if (currentRef.current !== value) {
    previousRef.current = currentRef.current
    currentRef.current = value
  }

  return previousRef.current
}
