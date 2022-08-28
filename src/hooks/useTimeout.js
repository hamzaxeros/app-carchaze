/**
 * Use Timeout Hook
 * @module 🔗:hooks/useTimeout
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version carchaze@0.1.0
 * @description Timeout Modular, Work like setTimeout, but it have built-in function, you can use it in any react component
 * 
 */

import { useCallback, useEffect, useRef } from "react"

/**
 * @callback VoidCallback
 * @return {void}
 */

/**
 * Work like setTimeout, but it have built-in function, you can use it in any react component
 * 
 * @function
 * @param {VoidCallback} callback 
 * @param {number} delay 
 * @returns {{reset: VoidCallback, clear: VoidCallback}}
 * 
 * @example
 * import { useState } from "react"
 * import useTimeout from "./useTimeout"
 * 
 * export default function TimeoutComponent() {
 *   const [count, setCount] = useState(10)
 *   const { clear, reset } = useTimeout(() => setCount(0), 1000)
 * 
 *   return (
 *     <div>
 *       <div>{count}</div>
 *       <button onClick={() => setCount(c => c + 1)}>Increment</button>
 *       <button onClick={clear}>Clear Timeout</button>
 *       <button onClick={reset}>Reset Timeout</button>
 *     </div>
 *   )
 * }
 * 
 */
export default function useTimeout(callback, delay) {
  const callbackRef = useRef(callback)
  /** @type {any} */
  const timeoutRef = useRef()

  useEffect(() => {
    callbackRef.current = callback
  }, [callback])

  const set = useCallback(() => {
    timeoutRef.current = setTimeout(() => callbackRef.current(), delay)
  }, [delay])

  const clear = useCallback(() => {
    timeoutRef.current && clearTimeout(timeoutRef.current)
  }, [])

  useEffect(() => {
    set()
    return clear
  }, [delay, set, clear])

  const reset = useCallback(() => {
    clear()
    set()
  }, [clear, set])

  return { reset, clear }
}
