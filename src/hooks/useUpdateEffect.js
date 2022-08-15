/**
 * Use UpdateEffect Hook
 * @module 🔗:hooks/useUpdateEffect
 * 
 * @author Hamza Hussain <hamzahussain@carchaze.com>
 * @version 0.1.0
 * @description It work exact like useEffect, but it will run on update, not on the component mount
 * 
 */

import { useEffect, useRef } from "react"

/**
 * @callback VoidCallback
 * @return {void}
 */

/**
 * It work exact like useEffect, but it will run on update, not on the component mount
 * 
 * @function
 * @param {VoidCallback} callback 
 * @param {Array<any>} dependencies 
 * 
 * @example
 * import { useState } from "react"
 * import useUpdateEffect from "./useUpdateEffect"
 * 
 * export default function UpdateEffectComponent() {
 *   const [count, setCount] = useState(10)
 *   useUpdateEffect(() => alert(count), [count])
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
export default function useUpdateEffect(callback, dependencies) {
  const firstRenderRef = useRef(true)

  useEffect(() => {
    if (firstRenderRef.current) {
      firstRenderRef.current = false
      return
    }
    return callback()
  }, dependencies)
}
