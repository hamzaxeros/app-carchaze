/**
 * Use EffectOnce Hook
 * @module 🔗:hooks/useEffectOnce
 *
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description EffectOnce Modular, It will work like useEffect first but only on mount, its a shortcut of useEffect one time, No dependencies need to right
 *
 */

import { useEffect } from "react"

/**
 * @callback VoidCallback
 * @return {void}
 */

/**
 * It will work like useEffect first but only on mount, its a shortcut of useEffect one time, No dependencies need to right
 * 
 * @function
 * @param {VoidCallback} cb 
 * 
 * @example
 * import { useState } from "react"
 * import useEffectOnce from "./useEffectOnce"
 * 
 * export default function EffectOnceComponent() {
 *   const [count, setCount] = useState(0)
 * 
 *   useEffectOnce(() => alert("Hi"))
 * 
 *   return (
 *     <>
 *       <div>{count}</div>
 *       <button onClick={() => setCount(c => c + 1)}>Increment</button>
 *     </>
 *   )
 * }
 */
export default function useEffectOnce(cb) {
  useEffect(cb, [])
}
