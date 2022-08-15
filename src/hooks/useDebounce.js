/**
 * Use Debounce Hook
 * @module 🔗:hooks/useDebounce
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description Debounce Modular, Work like useTimeout, but it will run only on changes not gonna run on mount
 * 
 */

import { useEffect } from "react"
import useTimeout from "./useTimeout"

/**
 * @callback VoidCallback
 * @return {void}
 */

/**
 * Work like useTimeout, but it will run only on changes not gonna run on mount
 * 
 * @function
 * @param {VoidCallback} callback 
 * @param {number} delay 
 * @param {Array<any>} dependencies 
 * 
 * @example
 * import { useState } from "react"
 * import useDebounce from "./useDebounce"
 * 
 * export default function DebounceComponent() {
 *   const [count, setCount] = useState(10)
 *   useDebounce(() => alert(count), 1000, [count])
 * 
 *   return (
 *     <div>
 *       <div>{count}</div>
 *       <button onClick={() => setCount(c => c + 1)}>Increment</button>
 *     </div>
 *   )
 * }
 * 
 */
export default function useDebounce(callback, delay, dependencies) {
  const { reset, clear } = useTimeout(callback, delay)
  useEffect(reset, [...dependencies, reset])
  useEffect(clear, [])
}
